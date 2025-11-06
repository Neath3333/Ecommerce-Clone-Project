import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "J Neath Store - Premium Shopping Experience",
  description: "Discover the latest products at the best prices. Shop with confidence at J Neath Store.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${playfairDisplay.variable} font-poppins antialiased`}
      >
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Navbar />
          <main className="flex-1">{children}</main>
          <footer className="bg-white border-t border-gray-100 py-16 mt-0">
            <div className="container mx-auto px-6">
              <div className="text-center space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-light text-gray-900 font-playfair">J Neath</h3>
                  <p className="text-gray-600 max-w-md mx-auto font-light">
                    Thoughtful skincare essentials for your daily routine.
                  </p>
                </div>
                <div className="flex justify-center space-x-8 text-sm">
                  <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 font-light">Home</a>
                  <a href="/products" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 font-light">Products</a>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 font-light">About</a>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 font-light">Contact</a>
                </div>
                <div className="text-center text-gray-500 text-sm font-light">
                  <p>&copy; 2024 J Neath. All rights reserved.</p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
