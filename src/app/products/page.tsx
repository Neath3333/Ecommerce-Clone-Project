import { stripe } from "@/lib/stripe";
import { ProductList } from "@/components/ui/product_list";

export default async function ProductsPage() {
  try {
    const products = await stripe.products.list({
      expand: ["data.default_price"],
    });

    return (
      <div className="min-h-screen">
        {/* Page Header */}
        <section className="bg-white py-12 border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <h1 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
                All Products
              </h1>
              <p className="text-gray-600">
                Our complete collection of thoughtfully selected items.
              </p>
            </div>
          </div>
        </section>

        {/* Products List */}
        <section className="py-12">
          <ProductList products={products.data} />
        </section>
      </div>
    );
  } catch (error) {
    console.error("Error fetching products:", error);

    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h1 className="text-2xl font-medium text-gray-900 mb-4">
            Products Unavailable
          </h1>
          <p className="text-gray-600 mb-8">
            We're unable to load products at the moment. Please try again later.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
            >
              Try Again
            </button>
            <a
              href="/"
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium inline-flex items-center justify-center"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    );
  }
}