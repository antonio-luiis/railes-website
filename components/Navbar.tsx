"use client";

import * as React from "react";
import Link from "next/link";
import {
    Search, ChevronDown, Menu, X,
    Building2, Home,
    Megaphone, TrendingUp, Box, Code2,
    ClipboardList, Settings, Monitor, Users,
    ShoppingCart, Clapperboard, Hammer, Landmark,
    Sparkles, Calculator,
    CarFront, Plane, Package, FlaskConical, Factory
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
    { label: "Product", url: "#", hasDropdown: true },
    { label: "Industries", url: "#", hasDropdown: true },
    { label: "Partners", url: "/partners" },
    { label: "Resources", url: "#", hasDropdown: true },
    { label: "About us", url: "#" },
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
                            className="relative"
                            onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
                            onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
                        >
                            <Link
                                href={link.url}
                                className={cn(
                                    "text-[15px] font-medium px-4 py-2 rounded-full transition-colors flex items-center gap-1.5",
                                    activeDropdown === link.label
                                        ? "bg-blue-50 text-blue-600"
                                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                )}
                            >
                                {link.label}
                                {link.hasDropdown && <ChevronDown className={cn("w-4 h-4 transition-transform", activeDropdown === link.label ? "rotate-180" : "")} />}
                            </Link>

                            {/* Product Dropdown */}
                            {link.label === 'Product' && activeDropdown === 'Product' && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-screen max-w-7xl z-50">
                                    <div className="container mx-auto px-4 md:px-6">
                                        <div className="bg-white border text-left border-gray-100 shadow-2xl rounded-2xl w-full max-w-6xl mx-auto animate-in fade-in slide-in-from-top-2 duration-200 overflow-hidden">
                                            <div className="grid grid-cols-12 p-8 gap-8">
                                                {/* Features Column (8 cols) */}
                                                <div className="col-span-8 border-r border-gray-100 pr-8">
                                                    <h3 className="text-base font-semibold text-gray-900 mb-6 flex items-center gap-2">
                                                        Features
                                                    </h3>
                                                    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                                                        <Link href="/product/production-management" className="flex items-start gap-3 group hover:bg-gray-50 p-2 -ml-2 rounded-lg transition-colors">
                                                            <div className="p-1.5 bg-blue-50 text-blue-600 rounded-md group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                                                <Settings className="w-4 h-4" />
                                                            </div>
                                                            <div>
                                                                <div className="font-medium text-gray-900 group-hover:text-blue-600 text-sm">Production Management</div>
                                                                <div className="text-xs text-gray-500 mt-0.5">Control shop floor operations</div>
                                                            </div>
                                                        </Link>
                                                        <Link href="#" className="flex items-start gap-3 group hover:bg-gray-50 p-2 -ml-2 rounded-lg transition-colors">
                                                            <div className="p-1.5 bg-purple-50 text-purple-600 rounded-md group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                                                <ClipboardList className="w-4 h-4" />
                                                            </div>
                                                            <div>
                                                                <div className="font-medium text-gray-900 group-hover:text-purple-600 text-sm">Quality Management</div>
                                                                <div className="text-xs text-gray-500 mt-0.5">Ensure highest standards</div>
                                                            </div>
                                                        </Link>
                                                        <Link href="#" className="flex items-start gap-3 group hover:bg-gray-50 p-2 -ml-2 rounded-lg transition-colors">
                                                            <div className="p-1.5 bg-green-50 text-green-600 rounded-md group-hover:bg-green-600 group-hover:text-white transition-colors">
                                                                <Code2 className="w-4 h-4" />
                                                            </div>
                                                            <div>
                                                                <div className="font-medium text-gray-900 group-hover:text-green-600 text-sm">Digital Record</div>
                                                                <div className="text-xs text-gray-500 mt-0.5">Paperless documentation</div>
                                                            </div>
                                                        </Link>
                                                        <Link href="#" className="flex items-start gap-3 group hover:bg-gray-50 p-2 -ml-2 rounded-lg transition-colors">
                                                            <div className="p-1.5 bg-orange-50 text-orange-600 rounded-md group-hover:bg-orange-600 group-hover:text-white transition-colors">
                                                                <TrendingUp className="w-4 h-4" />
                                                            </div>
                                                            <div>
                                                                <div className="font-medium text-gray-900 group-hover:text-orange-600 text-sm">Monitoring</div>
                                                                <div className="text-xs text-gray-500 mt-0.5">Real-time visibility</div>
                                                            </div>
                                                        </Link>
                                                        <Link href="#" className="flex items-start gap-3 group hover:bg-gray-50 p-2 -ml-2 rounded-lg transition-colors">
                                                            <div className="p-1.5 bg-cyan-50 text-cyan-600 rounded-md group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                                                                <Hammer className="w-4 h-4" />
                                                            </div>
                                                            <div>
                                                                <div className="font-medium text-gray-900 group-hover:text-cyan-600 text-sm">Automation & Integration</div>
                                                                <div className="text-xs text-gray-500 mt-0.5">Connect systems</div>
                                                            </div>
                                                        </Link>
                                                        <Link href="#" className="flex items-start gap-3 group hover:bg-gray-50 p-2 -ml-2 rounded-lg transition-colors">
                                                            <div className="p-1.5 bg-indigo-50 text-indigo-600 rounded-md group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                                                <Sparkles className="w-4 h-4" />
                                                            </div>
                                                            <div>
                                                                <div className="font-medium text-gray-900 group-hover:text-indigo-600 text-sm">Artificial Intelligence</div>
                                                                <div className="text-xs text-gray-500 mt-0.5">Advanced insights</div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                {/* Use Cases Column (4 cols) */}
                                                <div className="col-span-4">
                                                    <h3 className="text-base font-semibold text-gray-900 mb-6">
                                                        Use Cases
                                                    </h3>
                                                    <div className="space-y-3">
                                                        <Link href="#" className="flex items-start gap-3 group hover:bg-gray-50 p-2 -ml-2 rounded-lg transition-colors">
                                                            <div className="p-1.5 bg-gray-100 text-gray-600 rounded-md group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                                                <Building2 className="w-4 h-4" />
                                                            </div>
                                                            <div>
                                                                <div className="font-medium text-gray-900 group-hover:text-blue-600 text-sm">Manufacturing</div>
                                                                <div className="text-xs text-gray-500 mt-0.5">Optimize production lines</div>
                                                            </div>
                                                        </Link>
                                                        <Link href="#" className="flex items-start gap-3 group hover:bg-gray-50 p-2 -ml-2 rounded-lg transition-colors">
                                                            <div className="p-1.5 bg-gray-100 text-gray-600 rounded-md group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                                                <Users className="w-4 h-4" />
                                                            </div>
                                                            <div>
                                                                <div className="font-medium text-gray-900 group-hover:text-blue-600 text-sm">Workforce Management</div>
                                                                <div className="text-xs text-gray-500 mt-0.5">Track team performance</div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Specific Dropdown for Industries */}
                            {link.label === 'Industries' && activeDropdown === 'Industries' && (
                                <div className="absolute top-full left-0 pt-2 w-72 z-50">
                                    <div className="bg-white border border-gray-100 shadow-xl rounded-xl overflow-hidden animate-in fade-in slide-in-from-top-1 duration-200">
                                        <div className="p-2 flex flex-col gap-1">
                                            <Link href="/industries/automotive" className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg group transition-colors">
                                                <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                                    <CarFront className="w-4 h-4" />
                                                </div>
                                                <div>
                                                    <div className="font-medium text-gray-900 group-hover:text-blue-600 text-sm">Automotive</div>
                                                </div>
                                            </Link>
                                            <Link href="/industries/aerospace-and-defense" className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg group transition-colors">
                                                <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                                    <Plane className="w-4 h-4" />
                                                </div>
                                                <div>
                                                    <div className="font-medium text-gray-900 group-hover:text-blue-600 text-sm">Aerospace & Defense</div>
                                                </div>
                                            </Link>
                                            <Link href="/industries/packaging" className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg group transition-colors">
                                                <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                                    <Package className="w-4 h-4" />
                                                </div>
                                                <div>
                                                    <div className="font-medium text-gray-900 group-hover:text-blue-600 text-sm">Packaging</div>
                                                </div>
                                            </Link>
                                            <Link href="/industries/pharmaceuticals" className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg group transition-colors">
                                                <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                                    <FlaskConical className="w-4 h-4" />
                                                </div>
                                                <div>
                                                    <div className="font-medium text-gray-900 group-hover:text-blue-600 text-sm">Pharmaceuticals</div>
                                                </div>
                                            </Link>
                                            <Link href="/industries/discrete-manufacturing" className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg group transition-colors">
                                                <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                                    <Factory className="w-4 h-4" />
                                                </div>
                                                <div>
                                                    <div className="font-medium text-gray-900 group-hover:text-blue-600 text-sm">Discrete Manufacturing</div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Specific Dropdown for Resources (Simple Dropdown) */}
                            {link.label === 'Resources' && activeDropdown === 'Resources' && (
                                <div className="absolute top-full left-0 pt-2 w-60 z-50">
                                    <div className="bg-white border border-gray-100 shadow-xl rounded-xl overflow-hidden animate-in fade-in slide-in-from-top-1 duration-200">
                                        <div className="p-2 flex flex-col gap-1">
                                            <Link href="/blog" className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg group transition-colors">
                                                <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                                    <Megaphone className="w-4 h-4" />
                                                </div>
                                                <div>
                                                    <div className="font-medium text-gray-900 group-hover:text-blue-600 text-sm">Blog</div>
                                                </div>
                                            </Link>
                                            <Link href="/roi-calculator" className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg group transition-colors">
                                                <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                                    <Calculator className="w-4 h-4" />
                                                </div>
                                                <div>
                                                    <div className="font-medium text-gray-900 group-hover:text-blue-600 text-sm">ROI Calculator</div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )}
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



            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t shadow-xl z-50 max-h-[calc(100vh-80px)] overflow-y-auto">
                    <div className="p-4 space-y-2">
                        {navItems.map((link) => (
                            <div key={link.label}>
                                {link.hasDropdown ? (
                                    <div>
                                        <button
                                            onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                                            className="w-full flex items-center justify-between text-lg font-medium text-gray-900 py-3 border-b border-gray-100"
                                        >
                                            {link.label}
                                            <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                                        </button>

                                        {/* Product Dropdown */}
                                        {link.label === 'Product' && activeDropdown === 'Product' && (
                                            <div className="pl-4 py-2 space-y-2 bg-gray-50">
                                                <div className="text-sm font-semibold text-gray-500 mb-2">Features</div>
                                                <Link href="/product/production-management" className="flex items-center gap-2 py-2 text-gray-700">
                                                    <Settings className="w-4 h-4 text-blue-600" />
                                                    Production Management
                                                </Link>
                                                <Link href="#" className="flex items-center gap-2 py-2 text-gray-700">
                                                    <ClipboardList className="w-4 h-4 text-purple-600" />
                                                    Quality Management
                                                </Link>
                                                <Link href="#" className="flex items-center gap-2 py-2 text-gray-700">
                                                    <Code2 className="w-4 h-4 text-green-600" />
                                                    Digital Record
                                                </Link>
                                                <Link href="#" className="flex items-center gap-2 py-2 text-gray-700">
                                                    <TrendingUp className="w-4 h-4 text-orange-600" />
                                                    Monitoring
                                                </Link>
                                                <Link href="#" className="flex items-center gap-2 py-2 text-gray-700">
                                                    <Hammer className="w-4 h-4 text-cyan-600" />
                                                    Automation & Integration
                                                </Link>
                                                <Link href="#" className="flex items-center gap-2 py-2 text-gray-700">
                                                    <Sparkles className="w-4 h-4 text-indigo-600" />
                                                    Artificial Intelligence
                                                </Link>
                                            </div>
                                        )}

                                        {/* Industries Dropdown */}
                                        {link.label === 'Industries' && activeDropdown === 'Industries' && (
                                            <div className="pl-4 py-2 space-y-2 bg-gray-50">
                                                <Link href="/industries/automotive" className="flex items-center gap-2 py-2 text-gray-700">
                                                    <CarFront className="w-4 h-4 text-blue-600" />
                                                    Automotive
                                                </Link>
                                                <Link href="/industries/aerospace-and-defense" className="flex items-center gap-2 py-2 text-gray-700">
                                                    <Plane className="w-4 h-4 text-blue-600" />
                                                    Aerospace & Defense
                                                </Link>
                                                <Link href="/industries/packaging" className="flex items-center gap-2 py-2 text-gray-700">
                                                    <Package className="w-4 h-4 text-blue-600" />
                                                    Packaging
                                                </Link>
                                                <Link href="/industries/pharmaceuticals" className="flex items-center gap-2 py-2 text-gray-700">
                                                    <FlaskConical className="w-4 h-4 text-blue-600" />
                                                    Pharmaceuticals
                                                </Link>
                                                <Link href="/industries/discrete-manufacturing" className="flex items-center gap-2 py-2 text-gray-700">
                                                    <Factory className="w-4 h-4 text-blue-600" />
                                                    Discrete Manufacturing
                                                </Link>
                                            </div>
                                        )}

                                        {/* Resources Dropdown */}
                                        {link.label === 'Resources' && activeDropdown === 'Resources' && (
                                            <div className="pl-4 py-2 space-y-2 bg-gray-50">
                                                <Link href="/blog" className="flex items-center gap-2 py-2 text-gray-700">
                                                    <Megaphone className="w-4 h-4 text-blue-600" />
                                                    Blog
                                                </Link>
                                                <Link href="/roi-calculator" className="flex items-center gap-2 py-2 text-gray-700">
                                                    <Calculator className="w-4 h-4 text-blue-600" />
                                                    ROI Calculator
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        href={link.url}
                                        className="block text-lg font-medium text-gray-900 py-3 border-b border-gray-100"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                )}
                            </div>
                        ))}

                        {/* Mobile CTAs */}
                        <div className="pt-4 space-y-3">
                            <Link href="/contact" className="block">
                                <Button variant="outline" className="w-full">Contact us</Button>
                            </Link>
                            <Link href="/demo" className="block">
                                <Button className="w-full bg-railes-blue hover:bg-blue-800">Book a Demo</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
