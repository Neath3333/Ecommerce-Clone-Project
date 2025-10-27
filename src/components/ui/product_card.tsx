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
        <Link href={`/product/${product.id}`}>
            <Card className="group overflow-hidden border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 bg-white">
                {/* Product Image Container */}
                <div className="relative w-full h-64 overflow-hidden bg-gray-50">
                    {product.images && product.images[0] ? (
                        <>
                            <Image
                                alt={product.name}
                                src={product.images[0]}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                priority
                            />
                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                        </>
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            <svg
                                className="w-16 h-16 text-gray-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                        </div>
                    )}

                    {/* Quick Actions Overlay */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                // Add to wishlist functionality
                            }}
                            className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200"
                        >
                            <svg
                                className="w-5 h-5 text-gray-600 hover:text-red-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Product Info */}
                <CardHeader className="pb-3 pt-4 px-6">
                    {/* Category Badge */}
                    <div className="mb-2">
                        <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                            {product.metadata?.category || 'Product'}
                        </span>
                    </div>

                    <CardTitle className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                        {product.name}
                    </CardTitle>

                    {product.description && (
                        <CardDescription className="text-sm text-gray-600 mb-3 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                            {product.description}
                        </CardDescription>
                    )}

                    <CardContent className="pt-0 px-0">
                        <div className="flex flex-col space-y-3">
                            {/* Price and Rating Row */}
                            <div className="flex items-center justify-between">
                                <span className="text-2xl font-bold text-gray-900">
                                    {price && price.unit_amount
                                        ? new Intl.NumberFormat('en-US', {
                                            style: 'currency',
                                            currency: price.currency || 'USD',
                                          }).format(price.unit_amount / 100)
                                        : 'Price not available'
                                    }
                                </span>

                                {/* Rating */}
                                <div className="flex items-center space-x-1">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <span className="text-xs text-gray-500">(4.0)</span>
                                </div>
                            </div>

                            {/* Single View Details Button */}
                            <button className="w-full px-4 py-3 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
                                View Details
                            </button>
                        </div>
                    </CardContent>
                </CardHeader>
            </Card>
        </Link>
    )
}