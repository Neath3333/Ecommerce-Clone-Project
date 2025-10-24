import Link from "next/link";

export const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-4">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200"
                    >
                        UniShop
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            href="/"
                            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                        >
                            Home
                        </Link>
                        <Link
                            href="/products"
                            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                        >
                            Products
                        </Link>
                        <Link
                            href="/checkout"
                            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 capitalize"
                        >
                            Checkout
                        </Link>
                    </div>

                    {/* Mobile menu button - placeholder for future implementation */}
                    <div className="md:hidden">
                        <button className="text-gray-700 hover:text-blue-600 focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}