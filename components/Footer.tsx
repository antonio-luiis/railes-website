import { Facebook, Instagram, Linkedin, Twitter, Youtube, Github, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { siteSettings } from "@/lib/mock-data";

export function Footer() {
    const logoUrl = siteSettings?.logo?.asset?.url;
    const siteTitle = siteSettings?.siteTitle || "RAILES";

    return (
        <footer className="bg-[#F9FAFB] pt-20 pb-12 font-sans border-t border-gray-100">
            <div className="container mx-auto px-4">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">

                    {/* Column 1: Brand & Socials & Copyright */}
                    <div className="lg:col-span-1 flex flex-col justify-between h-full">
                        <div>
                            <Link href="/" className="inline-block mb-8">
                                {logoUrl ? (
                                    <img src={logoUrl} alt={siteTitle} className="h-8 md:h-10" />
                                ) : (
                                    <span className="text-3xl font-extrabold tracking-widest text-[#1e40af] uppercase font-mono">
                                        {siteTitle}
                                    </span>
                                )}
                            </Link>

                            <div className="flex items-center gap-3 mb-8">
                                <Link href="#" className="w-10 h-10 rounded-full bg-[#E5E7EB] flex items-center justify-center text-[#1e40af] hover:bg-[#1e40af] hover:text-white transition-all">
                                    <Linkedin className="w-5 h-5" />
                                </Link>
                                <Link href="#" className="w-10 h-10 rounded-full bg-[#E5E7EB] flex items-center justify-center text-[#1e40af] hover:bg-[#1e40af] hover:text-white transition-all">
                                    <Instagram className="w-5 h-5" />
                                </Link>
                                <Link href="#" className="w-10 h-10 rounded-full bg-[#E5E7EB] flex items-center justify-center text-[#1e40af] hover:bg-[#1e40af] hover:text-white transition-all">
                                    <Facebook className="w-5 h-5" />
                                </Link>
                            </div>

                            <div className="text-gray-400 text-xs font-medium leading-relaxed">
                                <p>© 2025 Muvu technologies.</p>
                                <p>All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Railes */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-6 text-sm">Railes</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-gray-500 hover:text-[#1e40af] text-sm transition-colors">About us</Link></li>
                            <li><Link href="#" className="text-gray-500 hover:text-[#1e40af] text-sm transition-colors">Pricing</Link></li>
                            <li><Link href="#" className="text-gray-500 hover:text-[#1e40af] text-sm transition-colors">Careers</Link></li>
                            <li><Link href="#" className="text-gray-500 hover:text-[#1e40af] text-sm transition-colors">Copyright infringement</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Use Cases */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-6 text-sm">Use Cases</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-gray-500 hover:text-[#1e40af] text-sm transition-colors">Digital Production</Link></li>
                            <li><Link href="#" className="text-gray-500 hover:text-[#1e40af] text-sm transition-colors">Quality Control</Link></li>
                            <li><Link href="#" className="text-gray-500 hover:text-[#1e40af] text-sm transition-colors">Maintenance</Link></li>
                            <li><Link href="#" className="text-gray-500 hover:text-[#1e40af] text-sm transition-colors">Inventory Management</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Product */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-6 text-sm">Product</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-gray-500 hover:text-[#1e40af] text-sm transition-colors">Features</Link></li>
                            <li><Link href="#" className="text-gray-500 hover:text-[#1e40af] text-sm transition-colors">Integrations</Link></li>
                            <li><Link href="#" className="text-gray-500 hover:text-[#1e40af] text-sm transition-colors">Security</Link></li>
                            <li><Link href="#" className="text-gray-500 hover:text-[#1e40af] text-sm transition-colors">Enterprise</Link></li>
                            <li><Link href="#" className="text-gray-500 hover:text-[#1e40af] text-sm transition-colors">Changelog</Link></li>
                        </ul>
                    </div>

                    {/* Column 5: Right Side Info (Location) */}
                    <div className="flex flex-col items-start lg:items-end">
                        <span className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-1">
                            LISBOA | ESPANHA
                        </span>
                    </div>

                </div>
            </div>
        </footer>
    );
}
