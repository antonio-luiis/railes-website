"use client";

import * as React from "react";
import { Search, X } from "lucide-react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

import { blogPosts } from "@/lib/blog-data";

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
    const [query, setQuery] = React.useState("");
    const inputRef = React.useRef<HTMLInputElement>(null);

    // Search Index
    // In a larger app, this would be fetched or generated at build time.
    const staticPages = [
        { title: "Digital Twin", category: "Product", href: "/product/digital-twin", description: "Virtual representation of your factory." },
        { title: "Manufacturing AI", category: "Product", href: "/product/artificial-intelligence", description: "AI-driven insights and optimization." },
        { title: "Digital Record", category: "Product", href: "/product/digital-record", description: "Traceability and compliance records." },
        { title: "Quality Management", category: "Product", href: "/product/quality-management", description: "Ensure product quality and standards." },
        { title: "Monitoring", category: "Product", href: "/product/monitoring", description: "Real-time production monitoring." },
        { title: "Production Management", category: "Product", href: "/product/production-management", description: "End-to-end production control." },
        { title: "Pharmaceuticals", category: "Industry", href: "/industries/pharmaceuticals", description: "Solutions for pharma manufacturing." },
        { title: "Automotive", category: "Industry", href: "/industries/automotive", description: "Solutions for automotive manufacturing." },
        { title: "Electronics", category: "Industry", href: "/industries/electronics", description: "Solutions for electronics manufacturing." },
        { title: "Aerospace", category: "Industry", href: "/industries/aerospace", description: "Solutions for aerospace manufacturing." },
        { title: "Medical Devices", category: "Industry", href: "/industries/medical-devices", description: "Solutions for medical device manufacturing." },
        { title: "Home", category: "General", href: "/", description: "RAILES Homepage." },
        { title: "Contact Sales", category: "General", href: "/contact", description: "Get in touch with our team." },
        { title: "Request Demo", category: "General", href: "/demo", description: "See RAILES in action." },
    ];

    // Combine static pages with blog posts
    const searchIndex = React.useMemo(() => {
        const blogItems = blogPosts.map(post => ({
            title: post.title,
            category: "Blog",
            href: `/blog/${post.slug}`,
            description: post.excerpt
        }));
        return [...staticPages, ...blogItems];
    }, []);

    // Filter results
    const filteredResults = React.useMemo(() => {
        if (!query) return [];
        const lowerQuery = query.toLowerCase();
        return searchIndex.filter(item =>
            item.title.toLowerCase().includes(lowerQuery) ||
            item.description.toLowerCase().includes(lowerQuery) ||
            item.category.toLowerCase().includes(lowerQuery)
        );
    }, [query]);

    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            // Focus input after a small delay to allow animation
            setTimeout(() => {
                inputRef.current?.focus();
            }, 50);
        } else {
            document.body.style.overflow = "";
            setQuery(""); // Reset query on close
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    // Handle ESC key
    React.useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    if (!isOpen) return null;

    if (typeof window === "undefined") return null;

    return createPortal(
        <div className="fixed inset-0 z-[60] flex items-start justify-center pt-24 px-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-top-4 duration-300 ring-1 ring-gray-900/5">
                <div className="flex items-center border-b border-gray-100 p-4">
                    <Search className="w-5 h-5 text-gray-400 ml-2" />
                    <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search for products, solutions, or resources..."
                        className="flex-1 px-4 py-2 text-lg text-gray-900 placeholder:text-gray-400 focus:outline-none bg-transparent"
                    />
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-500"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Results Area */}
                <div className="p-4 min-h-[100px] max-h-[60vh] overflow-y-auto">
                    {query.length === 0 ? (
                        <div className="text-center py-8 text-gray-500 text-sm">
                            Type to begin searching...
                        </div>
                    ) : (
                        <div className="space-y-2">
                            {filteredResults.length > 0 ? (
                                filteredResults.map((result, index) => (
                                    <a
                                        key={index}
                                        href={result.href}
                                        onClick={onClose}
                                        className="block p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                                    >
                                        <div className="flex justify-between items-center">
                                            <div className="font-medium text-gray-900">{result.title}</div>
                                            <div className="text-xs uppercase tracking-wider font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                                                {result.category}
                                            </div>
                                        </div>
                                        <div className="text-sm text-gray-500 mt-1">{result.description}</div>
                                    </a>
                                ))
                            ) : (
                                <div className="text-center py-8 text-gray-500">
                                    No results found for "{query}"
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <div className="bg-gray-50 px-4 py-2 text-xs text-gray-400 border-t border-gray-100 flex justify-between">
                    <span>Press ESC to close</span>
                    <span>RAILES Search</span>
                </div>
            </div>
        </div>,
        document.body
    );
}
