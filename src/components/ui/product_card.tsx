'use client';

import Stripe from "stripe";
import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

interface Props {
    product: Stripe.Product;
}

export const ProductCard = ({ product }: Props) => {
    const price = product.default_price as Stripe.Price;

    return (
        <Link href={`/products/${product.id}`}>
            <Card className="group overflow-hidden border border-gray-100 hover:border-gray-300 transition-all duration-300 bg-white rounded-none">
                {/* Product Image Container */}
                <div className="relative w-full h-80 overflow-hidden bg-gray-50">
                    {product.images && product.images[0] ? (
                        <>
                            <Image
                                alt={product.name}
                                src={product.images[0]}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                priority
                            />
                        </>
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            <svg
                                className="w-16 h-16 text-gray-200"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1}
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                        </div>
                    )}
                </div>

                {/* Product Info */}
                <CardHeader className="pb-4 pt-6 px-6">
                    <CardTitle className="text-lg font-light text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300 leading-tight font-playfair overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                        {product.name}
                    </CardTitle>

                    {product.description && (
                        <CardDescription className="text-sm text-gray-500 mb-4 overflow-hidden font-light" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                            {product.description}
                        </CardDescription>
                    )}

                    <CardContent className="pt-0 px-0">
                        <div className="flex flex-col space-y-4">
                            {/* Price */}
                            <div className="flex items-center justify-between">
                                <span className="text-xl font-light text-gray-900">
                                    {price && price.unit_amount
                                        ? new Intl.NumberFormat('en-US', {
                                            style: 'currency',
                                            currency: price.currency || 'USD',
                                          }).format(price.unit_amount / 100)
                                        : 'Price not available'
                                    }
                                </span>
                            </div>

                            {/* View Details Button */}
                            <button className="w-full px-6 py-3 bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 hover:border-gray-400 rounded-none transition-all duration-300 text-sm font-light tracking-wide">
                                View Details
                            </button>
                        </div>
                    </CardContent>
                </CardHeader>
            </Card>
        </Link>
    )
}