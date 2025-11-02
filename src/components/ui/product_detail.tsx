'use client';

import Image from "next/image";
import Stripe from "stripe";
import { Button } from "@/components/ui/button";
import { useCartStore } from "../../../store/cart-store";


interface Props {
    product: any; // Plain object representation of Stripe Product
}
export const ProductDetail = ({ product }: Props) => {
    const { items, addItem } = useCartStore()
    const price = product.default_price as Stripe.Price;
    const cartItem = items.find((item) => item.id === product.id);
    const quantity = cartItem ? cartItem.quantity : 0;

    const onAddItem = () => {
        addItem({
            id: product.id,
            name: product.name,
            imageUrl: product.images ? product.images[0] : null,
            price: price.unit_amount as number,
            quantity: 1,
        })
    }
        return (
            <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8 items-center">
                {product.images && product.images.length > 0 && (
                    <div className="relative h-60 w-full md:w-1/2 rounded-lg overflow-hidden">
                        <Image
                            src={product.images[0]}
                            alt={product.name}
                            layout="fill"
                            objectFit="cover"
                            className="hover:opacity-90 tansition duration-300"
                        />
                    </div>
                )}
                <div className="md:w-1/2 space-y-6">
                    <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                    {product.description && <p className="text-gray-700 mb-4">{product.description}</p>}

                    {price && price.unit_amount && (
                        <div className="space-y-4">
                            <p className="text-2xl font-bold text-gray-900">
                                ${(price.unit_amount / 100).toFixed(2)}
                            </p>
                            <div className="flex items-center space-x-4">
                                <Button variant="outline"> -</Button>
                                <span className="text-lg font-semibold w-8 text-center">{quantity}</span>
                                <Button onClick={onAddItem}> +</Button>
                            </div>
                        </div>
                    )}
                </div >
            </div>
        )
};