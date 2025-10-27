'use client';

import Stripe from "stripe";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import { ProductCard } from "@/components/ui/product_card";

interface Props {
    products: Stripe.Product[];
}

export const ProductList = ({ products }: Props) => {
    const [searchQuery, setSearchQuery] = useState('');

    // Filter products based on search query
    const filteredProducts = useMemo(() => {
        if (!searchQuery.trim()) return products;

        const query = searchQuery.toLowerCase().trim();

        return products.filter((product) => {
            // Search in product name
            const nameMatch = product.name?.toLowerCase().includes(query);

            // Search in product description
            const descriptionMatch = product.description?.toLowerCase().includes(query);

            // Search in product metadata (like category)
            const metadataMatch = Object.values(product.metadata || {}).some(
                value => value?.toString().toLowerCase().includes(query)
            );

            return nameMatch || descriptionMatch || metadataMatch;
        });
    }, [products, searchQuery]);
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header with Search */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Our Products</h1>
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                    <div className="relative flex-1 max-w-md">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <svg
                            className="absolute left-3 top-3.5 w-5 h-5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        )}
                    </div>
                    <div className="text-sm text-gray-600">
                        {searchQuery.trim() && (
                            <span className="font-medium text-blue-600">
                                {filteredProducts.length} of {products.length}
                            </span>
                        )}{' '}
                        {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
                        {searchQuery.trim() && (
                            <span className="ml-2">
                                for "{searchQuery}"
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredProducts.map((product, key) => (
                        <ProductCard key={`${product.id}-${key}`} product={product} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <svg
                        className="mx-auto h-12 w-12 text-gray-400 mb-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                        />
                    </svg>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                        {searchQuery.trim() ? 'No products found' : 'No products available'}
                    </h3>
                    <p className="text-gray-500">
                        {searchQuery.trim()
                            ? `No products match "${searchQuery}". Try different keywords or browse all products.`
                            : 'Check back later for new products.'
                        }
                    </p>
                    {searchQuery.trim() && (
                        <button
                            onClick={() => setSearchQuery('')}
                            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                        >
                            Clear Search
                        </button>
                    )}
                </div>
            )}
        </div>
    )
}