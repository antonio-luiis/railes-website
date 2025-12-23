"use client";

import * as React from "react";
import Link from "next/link";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavbarProps {
    siteSettings?: {
        siteTitle?: string;
        logo?: {
            asset?: {
                url: string;
            };
        };
        navigationItems?: Array<{
            label: string;
            url: string;
        }>;
    };
}

const defaultNavLinks = [
    { label: "Product", url: "#" },
    { label: "Industries", url: "#" },
    { label: "Partners", url: "#" },
    { label: "Resources", url: "#" },
    { label: "About us", url: "#" },
];

export function Navbar({ siteSettings }: NavbarProps) {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const siteTitle = siteSettings?.siteTitle || "RAILES";
    const logoUrl = siteSettings?.logo?.asset?.url;
    const navLinks = siteSettings?.navigationItems && siteSettings.navigationItems.length > 0
        ? siteSettings.navigationItems
        : defaultNavLinks;

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    {logoUrl ? (
                        <img src={logoUrl} alt={siteTitle} className="h-8" />
                    ) : (
                        <span className="text-2xl font-bold tracking-wide text-railes-blue">
                            {siteTitle}
                        </span>
                    )}
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.url}
                            className="text-sm font-medium text-gray-700 hover:text-railes-blue flex items-center gap-1 transition-colors"
                        >
                            {link.label}
                            <ChevronDown className="w-4 h-4" />
                        </Link>
                    ))}
                </nav>

                {/* Right Actions */}
                <div className="hidden lg:flex items-center gap-4">
                    <button className="text-sm font-medium text-gray-600 hover:text-railes-blue flex items-center gap-1">
                        EN <ChevronDown className="w-4 h-4" />
                    </button>
                    <button className="text-gray-600 hover:text-railes-blue">
                        <Search className="w-5 h-5" />
                    </button>
                    <div className="flex items-center bg-railes-blue rounded-full p-1 pl-4 pr-1">
                        <Link
                            href="/contact"
                            className="text-sm font-medium text-white hover:text-white/90 mr-3"
                        >
                            Contact us
                        </Link>
                        <span className="text-white/30 mr-3">|</span>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-white hover:text-white hover:bg-white/10 rounded-full px-4"
                        >
                            Book a demo <ChevronDown className="w-4 h-4 ml-1 rotate-[-90deg]" />
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-gray-700"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg animate-in slide-in-from-top-2 duration-200">
                    <div className="p-6 flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.url}
                                className="text-base font-medium text-gray-700 hover:text-railes-blue hover:bg-gray-50 py-3 px-4 rounded-lg transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-100">
                            <Button className="w-full bg-railes-blue text-white hover:bg-railes-blue/90 h-12">
                                Book a demo
                            </Button>
                            <Button variant="outline" className="w-full h-12 border-railes-blue text-railes-blue hover:bg-railes-blue/5">
                                Contact us
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
