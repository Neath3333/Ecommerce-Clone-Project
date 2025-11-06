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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <div className="space-y-8">
                <h1 className="text-5xl lg:text-7xl font-light text-gray-900 leading-tight font-playfair">
                  Radiant Skin,
                  <br />
                  <span className="font-medium">Simple Care</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-md leading-relaxed font-light">
                  Thoughtfully crafted skincare essentials for your daily routine. Pure ingredients, visible results.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products">
                  <Button className="px-8 py-3 text-base font-light bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 hover:border-gray-400 rounded-none transition-all duration-300">
                    Explore Products
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative lg:h-[500px] w-full">
              {products.data[0]?.images[0] && (
                <Image
                  alt="Featured Product"
                  width={600}
                  height={600}
                  src={products.data[0].images[0]}
                  className="object-cover w-full h-full"
                  priority
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 font-playfair">
              Essentials
            </h2>
            <p className="text-gray-600 max-w-lg mx-auto text-lg font-light">
              Simple formulations for effective daily care.
            </p>
          </div>
          <Carousel products={products.data} />
        </div>
      </section>

      {/* Simple CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-light text-gray-900 mb-6 font-playfair">
            Begin Your Journey
          </h2>
          <p className="text-gray-600 max-w-md mx-auto mb-12 text-lg font-light">
            Discover your perfect skincare routine with our curated collection.
          </p>
          <Link href="/products">
            <Button className="px-12 py-4 text-base font-light bg-gray-900 hover:bg-gray-800 text-white rounded-none transition-all duration-300">
              Shop Collection
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
