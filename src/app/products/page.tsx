import { stripe } from "@/lib/stripe";
import { ProductList } from "@/components/ui/product_list";

export default async function ProductsPage() {
  try {
    const products = await stripe.products.list({
      expand: ["data.default_price"],
    });

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Page Header */}
        <div className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
              All Products
            </h1>
            <p className="text-gray-600 mt-2">
              Browse our complete collection of products
            </p>
          </div>
        </div>

        {/* Products List */}
        <ProductList products={products.data} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching products:", error);

    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Unable to Load Products
          </h1>
          <p className="text-gray-600 mb-6">
            We're having trouble loading our products. Please try again later.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }
}