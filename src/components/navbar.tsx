'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useCartStore } from "../../store/cart-store";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

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
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between py-6">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-2xl font-light text-gray-900 hover:text-gray-700 transition-colors duration-300 font-playfair"
                    >
                        J Neath
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-12">
                        <Link
                            href="/"
                            className={`${isActive("/")
                                    ? "text-gray-900 font-medium"
                                    : "text-gray-600 hover:text-gray-900 font-light"
                                } transition-colors duration-300 text-sm uppercase tracking-wide`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/products"
                            className={`${isActive("/products")
                                    ? "text-gray-900 font-medium"
                                    : "text-gray-600 hover:text-gray-900 font-light"
                                } transition-colors duration-300 text-sm uppercase tracking-wide`}
                        >
                            Products
                        </Link>
                    </div>

                    <div className="flex items-center">
                        <Link href="/checkout" className="relative flex items-center p-2">
                            <ShoppingCartIcon className="w-5 h-5 text-gray-700" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                        <Button variant="ghost" className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
                            {mobileOpen ? (
                                <XMarkIcon className="w-5 h-5 text-gray-700" />
                            ) : (
                                <Bars3Icon className="w-5 h-5 text-gray-700" />
                            )}
                        </Button>
                    </div>
                </div>
            </div>
            {mobileOpen && (
                <nav className="md:hidden bg-white border-t border-gray-100">
                    <ul className="flex flex-col p-6 space-y-4">
                        <li>
                            <Link href="/" className="block text-gray-600 hover:text-gray-900 font-light transition-colors duration-300">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/products" className="block text-gray-600 hover:text-gray-900 font-light transition-colors duration-300">
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link href="/checkout" className="block text-gray-600 hover:text-gray-900 font-light transition-colors duration-300">
                                Cart
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}
        </nav>
    );
}