'use client';

import Link from "next/link";
import { useCartStore } from "../../../store/cart-store";
import { useEffect } from "react";
export default function SuccessPage() { 

    const {clearCart} = useCartStore();
    useEffect(() => {
        clearCart();
    }, [clearCart]);
    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="text-center space-y-12 p-8 max-w-md">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-10 h-10 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <div className="space-y-6">
                    <h1 className="text-4xl font-light text-gray-900 font-playfair">Thank You</h1>
                    <p className="text-gray-600 font-light leading-relaxed">
                        Your order has been received. We'll begin preparing your skincare essentials with care.
                    </p>
                </div>
                <Link href="/products">
                    <button className="px-12 py-4 bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 hover:border-gray-400 rounded-none transition-all duration-300 font-light text-sm uppercase tracking-wide">
                        Continue Shopping
                    </button>
                </Link>
            </div>
        </div>
    )
}