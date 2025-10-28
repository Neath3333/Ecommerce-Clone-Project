import { stripe } from "@/lib/stripe"
import { ProductDetail } from "@/components/ui/product_detail";

export default async function ProductPage({ params }:
    {
        params:
        Promise<{ id: string }>
    }) {
    try {
        const { id } = await params;
        console.log('Fetching product with ID:', id);
        const product = await stripe.products.retrieve(id, {
            expand: ['default_price']
        });
        console.log('Product fetched successfully:', product.name);

        // Convert Stripe Product to plain object for client component
        const plainProduct = JSON.parse(JSON.stringify(product));

        return <ProductDetail product={plainProduct} />
    } catch (error) {
        console.error('Error fetching product:', error);
        return (
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold text-red-600">Product Not Found</h1>
                <p className="text-gray-600 mt-2">Sorry, we couldn't find the product you're looking for.</p>
                <p className="text-sm text-gray-500 mt-2">Error: {error instanceof Error ? error.message : 'Unknown error'}</p>
                <a href="/" className="text-blue-600 hover:underline mt-4 inline-block">Return to Home</a>
            </div>
        );
    }
}

