import Image from "next/image";
import { stripe } from "@/lib/stripe";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Carousel } from "@/components/ui/carousel";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  })
  console.log(products);
  return <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    {/* Hero Section */}
    <section className="relative overflow-hidden bg-white shadow-lg">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Welcome to <span className="text-blue-600">UniShop</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 max-w-lg">
                Discover the latest products at the best prices
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" className="px-8 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 transform hover:scale-105">
                <Link href="/products" className="text-white hover:text-white">
                  Browse our products
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative lg:h-96 lg:w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-2xl opacity-10"></div>
            {products.data[0]?.images[0] && (
              <Image
                alt="Hero Product"
                width={500}
                height={500}
                src={products.data[0].images[0]}
                className="relative z-10 rounded-2xl shadow-2xl object-cover w-full h-full"
                priority
              />
            )}
          </div>
        </div>
      </div>
    </section>

    {/* Featured Products Section */}
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Check out our handpicked selection of premium products
          </p>
        </div>
        <Carousel products={products.data}/>
      </div>
    </section>
  </div>;
}
