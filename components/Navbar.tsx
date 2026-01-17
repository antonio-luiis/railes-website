"use client";

import * as React from "react";
import Link from "next/link";
import {
    Search, ChevronDown, Menu, X,
    Building2, Home,
    Megaphone, TrendingUp, Box, Code2,
    ClipboardList, Settings, Monitor, Users,
    ShoppingCart, Clapperboard, Hammer, Landmark,
    Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

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

const navItems = [
    { label: "Products", url: "#" },
    { label: "AI", url: "#", icon: Sparkles },
    { label: "Solutions", url: "#", hasDropdown: true },
    { label: "Resources", url: "#" },
    { label: "Enterprise", url: "#" },
];

export function Navbar({ siteSettings }: NavbarProps) {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);

    const siteTitle = siteSettings?.siteTitle || "RAILES";
    const logoUrl = siteSettings?.logo?.asset?.url;

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
            if (activeDropdown) {
                setActiveDropdown(null);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [activeDropdown]);

    // Mega Menu Content
    const renderSolutionsDropdown = () => (
        <div
            className="absolute top-full left-0 w-full z-50 -mt-2"
            onMouseEnter={() => setActiveDropdown('Solutions')}
            onMouseLeave={() => setActiveDropdown(null)}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="bg-white border text-left border-gray-100 shadow-2xl rounded-2xl w-full max-w-5xl mx-auto animate-in fade-in slide-in-from-top-2 duration-200 overflow-hidden">
                    <div className="flex flex-row p-8">

                        {/* Column 1: Company Size (30%) */}
                        <div className="w-[30%] pr-8 border-r border-gray-100">
                            <h3 className="text-base font-semibold text-gray-900 mb-4 px-2">Company size</h3>
                            <div className="flex flex-col gap-2">
                                <Link href="#" className="flex gap-4 group items-start hover:bg-gray-50 p-3 rounded-xl transition-colors">
                                    <div className="bg-indigo-600 text-white p-2.5 rounded-lg h-10 w-10 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                                        <Building2 className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900 text-[15px] group-hover:text-indigo-600 transition-colors">Enterprise</div>
                                        <div className="text-[13px] text-gray-500 leading-snug mt-0.5">Gain visibility and control at scale</div>
                                    </div>
                                </Link>

                                <Link href="#" className="flex gap-4 group items-start hover:bg-gray-50 p-3 rounded-xl transition-colors">
                                    <div className="bg-blue-600 text-white p-2.5 rounded-lg h-10 w-10 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                                        <Home className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900 text-[15px] group-hover:text-blue-600 transition-colors">SMB</div>
                                        <div className="text-[13px] text-gray-500 leading-snug mt-0.5">Run your entire business in one place</div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        {/* Column 2: Teams (40%) */}
                        <div className="w-[40%] px-10 border-r border-gray-100">
                            <h3 className="text-base font-semibold text-gray-900 mb-4">Teams</h3>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                                <Link href="#" className="flex items-center gap-2.5 group hover:bg-gray-50/50 p-1.5 -ml-1.5 rounded-lg transition-colors">
                                    <Megaphone className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                                    <span className="text-[14px] font-medium text-gray-600 group-hover:text-blue-600">Marketing</span>
                                </Link>
                                <Link href="#" className="flex items-center gap-2.5 group hover:bg-gray-50/50 p-1.5 -ml-1.5 rounded-lg transition-colors">
                                    <ClipboardList className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                                    <span className="text-[14px] font-medium text-gray-600 group-hover:text-blue-600">PMO</span>
                                </Link>
                                <Link href="#" className="flex items-center gap-2.5 group hover:bg-gray-50/50 p-1.5 -ml-1.5 rounded-lg transition-colors">
                                    <TrendingUp className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                                    <span className="text-[14px] font-medium text-gray-600 group-hover:text-blue-600">Sales</span>
                                </Link>
                                <Link href="#" className="flex items-center gap-2.5 group hover:bg-gray-50/50 p-1.5 -ml-1.5 rounded-lg transition-colors">
                                    <Settings className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                                    <span className="text-[14px] font-medium text-gray-600 group-hover:text-blue-600">Operations</span>
                                </Link>
                                <Link href="#" className="flex items-center gap-2.5 group hover:bg-gray-50/50 p-1.5 -ml-1.5 rounded-lg transition-colors">
                                    <Box className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                                    <span className="text-[14px] font-medium text-gray-600 group-hover:text-blue-600">Product</span>
                                </Link>
                                <Link href="#" className="flex items-center gap-2.5 group hover:bg-gray-50/50 p-1.5 -ml-1.5 rounded-lg transition-colors">
                                    <Monitor className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                                    <span className="text-[14px] font-medium text-gray-600 group-hover:text-blue-600">IT</span>
                                </Link>
                                <Link href="#" className="flex items-center gap-2.5 group hover:bg-gray-50/50 p-1.5 -ml-1.5 rounded-lg transition-colors">
                                    <Code2 className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                                    <span className="text-[14px] font-medium text-gray-600 group-hover:text-blue-600">R&D</span>
                                </Link>
                                <Link href="#" className="flex items-center gap-2.5 group hover:bg-gray-50/50 p-1.5 -ml-1.5 rounded-lg transition-colors">
                                    <Users className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                                    <span className="text-[14px] font-medium text-gray-600 group-hover:text-blue-600">HR</span>
                                </Link>
                            </div>
                        </div>

                        {/* Column 3: Industries (30%) */}
                        <div className="w-[30%] pl-10">
                            <h3 className="text-base font-semibold text-gray-900 mb-4">Industries</h3>
                            <div className="flex flex-col gap-3">
                                <Link href="#" className="flex items-center gap-2.5 group hover:bg-gray-50/50 p-1.5 -ml-1.5 rounded-lg transition-colors">
                                    <ShoppingCart className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                                    <span className="text-[14px] font-medium text-gray-600 group-hover:text-blue-600">Retail</span>
                                </Link>
                                <Link href="#" className="flex items-center gap-2.5 group hover:bg-gray-50/50 p-1.5 -ml-1.5 rounded-lg transition-colors">
                                    <Clapperboard className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                                    <span className="text-[14px] font-medium text-gray-600 group-hover:text-blue-600">Media</span>
                                </Link>
                                <Link href="#" className="flex items-center gap-2.5 group hover:bg-gray-50/50 p-1.5 -ml-1.5 rounded-lg transition-colors">
                                    <Hammer className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                                    <span className="text-[14px] font-medium text-gray-600 group-hover:text-blue-600">Construction</span>
                                </Link>
                                <Link href="#" className="flex items-center gap-2.5 group hover:bg-gray-50/50 p-1.5 -ml-1.5 rounded-lg transition-colors">
                                    <Landmark className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                                    <span className="text-[14px] font-medium text-gray-600 group-hover:text-blue-600">Government</span>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled || activeDropdown
                    ? "bg-white border-b border-gray-100 py-4"
                    : "bg-transparent py-5"
            )}
            onMouseLeave={() => setActiveDropdown(null)}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between relative z-50">
                <Link href="/" className="flex items-center gap-2 mr-8">
                    <Logo className="h-8" color="#1e3a8a" />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-1">
                    {navItems.map((link) => (
                        <div
                            key={link.label}
                            onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
                        >
                            <Link
                                href={link.url}
                                className={cn(
                                    "text-[15px] font-medium px-4 py-2 rounded-full transition-colors flex items-center gap-1.5",
                                    activeDropdown === link.label || link.label === "Solutions" && activeDropdown // Highlight when active
                                        ? "bg-blue-50 text-blue-600"
                                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                )}
                            >
                                {link.icon && <link.icon className="w-4 h-4" />}
                                {link.label}
                                {link.hasDropdown && <ChevronDown className={cn("w-4 h-4 transition-transform", activeDropdown === link.label ? "rotate-180" : "")} />}
                            </Link>
                        </div>
                    ))}
                </nav>

                {/* Right Actions */}
                <div className="hidden lg:flex items-center gap-4 ml-auto">
                    <button className="text-sm font-medium text-gray-600 hover:text-railes-blue flex items-center gap-1">
                        EN <ChevronDown className="w-4 h-4" />
                    </button>
                    <button className="text-gray-600 hover:text-railes-blue">
                        <Search className="w-5 h-5" />
                    </button>
                    <Link href="/contact">
                        <Button
                            variant="ghost"
                            className="text-[15px] font-medium text-gray-600 hover:text-railes-blue hover:bg-blue-50/50 px-5 transition-all"
                        >
                            Contact us
                        </Button>
                    </Link>
                    <Link href="/demo">
                        <Button
                            className="bg-railes-blue hover:bg-blue-800 text-white rounded-full px-6 py-2.5 h-auto text-[15px] font-semibold transition-all shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 hover:-translate-y-0.5"
                        >
                            Book a demo <ChevronDown className="w-4 h-4 ml-1.5 rotate-[-90deg]" />
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-gray-700"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mega Menu Dropdown Section */}
            {activeDropdown === 'Solutions' && renderSolutionsDropdown()}

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t p-4 h-screen overflow-y-auto">
                    <div className="flex flex-col gap-4">
                        {navItems.map((link) => (
                            <Link
                                key={link.label}
                                href={link.url}
                                className="text-lg font-medium text-gray-900 py-2 border-b border-gray-100"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Button className="w-full mt-4">Contact Sales</Button>
                    </div>
                </div>
            )}
        </header>
    );
}
