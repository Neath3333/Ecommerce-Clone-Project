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
  return <div>
    <section>
      <div>
        <div>
          <h2>Welcome to UniShop</h2>
          <p>Discover the lastest products at the bests price</p>
          <Button variant="default">
            <Link href="\products">Browse our products</Link>
          </Button>
        </div>
        <Image 
        alt="Banner Image" 
        width={450} 
        height={450} 
        src={products.data[0].images[0]}
        /> 
      </div>
    </section>
    <section> 
      <Carousel/>
       </section>
  </div>;
}
