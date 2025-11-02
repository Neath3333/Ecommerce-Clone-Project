'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useCartStore } from "../../store/cart-store";
import { useEffect, useState } from "react";

export const Navbar = () => {

    const [mobileOpen, setMobileOpen] = useState<boolean>(false);
    const { items } = useCartStore()
    const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);
    const pathname = usePathname();

    const isActive = (path: string) => {
        if (path === "/" && pathname === "/") return true;
        if (path !== "/" && pathname.startsWith(path)) return true;
        return false;
    };

    useEffect(() => {
       const handleResize = () => {
        if (window.innerWidth >= 768) {
            setMobileOpen(false);
        }
       };
       window.addEventListener('resize', handleResize);
       return () => window.removeEventListener('resize', handleResize);
    }, []);
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
                            className={`${
                                isActive("/")
                                    ? "text-blue-600 font-bold"
                                    : "text-gray-700 hover:text-blue-600 font-medium"
                            } transition-colors duration-200`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/products"
                            className={`${
                                isActive("/products")
                                    ? "text-blue-600 font-bold"
                                    : "text-gray-700 hover:text-blue-600 font-medium"
                            } transition-colors duration-200`}
                        >
                            Products
                        </Link>
                        <Link
                            href="/checkout"
                            className={`${
                                isActive("/checkout")
                                    ? "text-blue-600 font-bold"
                                    : "text-gray-700 hover:text-blue-600 font-medium"
                            } transition-colors duration-200 capitalize`}
                        >
                            Checkout
                        </Link>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Link href="/checkout" className="relative flex items-center">
                            <ShoppingCartIcon className="w-6 h-6"/>
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </div>

                    {/* Mobile menu button - placeholder for future implementation */}
                    {/* <div className="md:hidden">
                        <button className="text-gray-700 hover:text-blue-600 focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div> */}
                </div>
            </div>
        </nav>
    );
}