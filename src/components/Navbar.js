"use client";

import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <header className="bg-[#1E3A8A] text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo and Search Bar (Left Side) */}
                <div className="flex items-center space-x-4">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/next.svg" // Replace with your logo path
                            alt="Logo"
                            width={120}
                            height={40}
                            className="h-10 w-auto"
                        />
                    </Link>
                    <div className="hidden md:flex items-center bg-white rounded-full px-3 py-1">
                        <Search className="text-gray-500" size={20} />
                        <Input
                            type="text"
                            placeholder="Search..."
                            className="border-none focus:outline-none text-black"
                        />
                    </div>
                </div>

                {/* Nav Items and Toggle Button (Right Side) */}
                <div className="flex items-center space-x-4">
                    <div className="hidden md:flex space-x-4">
                        <a href="#" className="hover:text-orange-500">
                            Nav Item 1
                        </a>
                        <a href="#" className="hover:text-orange-500">
                            Nav Item 2
                        </a>
                    </div>
                    <Button
                        variant="ghost"
                        className="md:hidden text-white"
                        onClick={toggleNav}
                    >
                        {isNavOpen ? <X size={24} /> : <Menu size={24} />}
                    </Button>
                </div>
            </div>

            {/* Mobile Navbar */}
            {isNavOpen && (
                <div className="md:hidden mt-4">
                    <div className="flex flex-col space-y-2">
                        <a href="#" className="hover:text-orange-500">
                            Nav Item 1
                        </a>
                        <a href="#" className="hover:text-orange-500">
                            Nav Item 2
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}