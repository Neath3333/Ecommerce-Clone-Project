'use client';

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Stripe } from "stripe";
import { useEffect } from "react";
import { useState } from "react";



interface Props {
  products: Stripe.Product[];
}

export const Carousel = ({ products }: Props) => {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [products.length]);

  const currentProduct = products[current];
  const price = currentProduct.default_price as Stripe.Price;
  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-2xl shadow-2xl bg-white">
        {/* Product Image */}
        {currentProduct.images && currentProduct.images[0] && (
          <div className="relative w-full h-full">
            <Image
              alt={currentProduct.name || `Product ${current + 1}`}
              src={currentProduct.images[0]}
              fill
              className="object-cover transition-opacity duration-500"
              priority
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
        )}

        {/* Product Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white">
          <div className="space-y-2">
            <h3 className="text-2xl lg:text-3xl font-bold">
              {currentProduct.name || `Featured Product ${current + 1}`}
            </h3>
            <p className="text-lg lg:text-xl opacity-90">
              {currentProduct.description || 'Premium quality product'}
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold">
                {price?.unit_amount ? `$${(price.unit_amount / 100).toFixed(2)}` : 'Price TBD'}
              </span>
              {price?.currency && (
                <span className="text-lg opacity-75 uppercase">{price.currency}</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current
                ? 'bg-blue-600 w-8'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to product ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrent((prev) => (prev - 1 + products.length) % products.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Previous product"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % products.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Next product"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};
