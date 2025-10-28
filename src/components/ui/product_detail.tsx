'use client';

import Image from "next/image";
import Stripe from "stripe";

interface Props {
    product: any; // Plain object representation of Stripe Product
}
export const ProductDetail = ({ product }: Props) => {
    const price = product.default_price as Stripe.Price;
    return (
        <div>
            {product.images && product.images.length > 0 && (
            <div className="relative h-60 w-full">
                <Image
                    src={product.images[0]}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg group-hover:opacity-90 tansition-opacity duration-300"                
                />
            </div>    
           )}
           <div>
            <h1>{product.name}</h1>
            {product.description && <p>{product.description}</p>}

            {price && price.unit_amount &&(
                <p className="text-lg font-semibold text-gray-900">
                    ${(price.unit_amount / 100).toFixed(2)}
                </p>
            )}
           </div>
        </div>
    )
};