import Stripe from "stripe";
import Image from "next/image";
import Link from "next/link";

interface Props {
    products: Stripe.Product[];
}

export const ProductList = ({ products }: Props) => {
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Search Bar */}
            <div className="mb-8">
                <input
                    type="text"
                    placeholder="Search Product"
                    className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        {/* Product Image */}
                        {product.images && product.images.length > 0 && (
                            <div className="relative h-48 w-full">
                                <Image
                                    src={product.images[0]}
                                    alt={product.name || 'Product'}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}

                        {/* Product Info */}
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {product.name}
                            </h3>

                            {product.description && (
                                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                    {product.description}
                                </p>
                            )}

                            {/* Price */}
                            {product.default_price && typeof product.default_price === 'object' && 'unit_amount' in product.default_price && (
                                <div className="text-xl font-bold text-blue-600 mb-4">
                                    ${(product.default_price.unit_amount! / 100).toFixed(2)}
                                </div>
                            )}

                            {/* View Product Button */}
                            <Link
                                href={`/products/${product.id}`}
                                className="block w-full bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                            >
                                View Product
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {products.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">No products available at the moment.</p>
                </div>
            )}
        </div>
    )
}