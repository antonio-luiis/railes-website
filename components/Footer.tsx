import { Facebook, Instagram, Linkedin, Twitter, Youtube, Github, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { siteSettings } from "@/lib/mock-data";
import { Logo } from "./Logo";

export function Footer() {
    return (
        <footer className="bg-white pt-20 pb-12 font-sans border-t border-gray-100">
            <div className="container mx-auto px-4">

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">

                    {/* Column 1: Brand & Socials */}
                    <div className="col-span-2 lg:col-span-1 flex flex-col justify-between h-full">
                        <div>
                            <Link href="/" className="inline-block mb-6">
                                <Logo className="h-8 md:h-9" color="#1e3a8a" />
                            </Link>

                            <p className="text-gray-500 text-sm mb-6 max-w-xs">
                                Manufacturing Execution System. Built for Smart Factories.
                            </p>

                            <div className="flex items-center gap-3">
                                <Link href="https://pt.linkedin.com/company/muvutechnologies" target="_blank" className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white transition-all">
                                    <Linkedin className="w-4 h-4" />
                                </Link>
                                <Link href="https://www.instagram.com/railes.mes/" target="_blank" className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-pink-600 hover:text-white transition-all">
                                    <Instagram className="w-4 h-4" />
                                </Link>
                                <Link href="https://www.facebook.com/railesmes/" target="_blank" className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-blue-800 hover:text-white transition-all">
                                    <Facebook className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Platform */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-6 text-sm">Platform</h4>
                        <ul className="space-y-3">
                            <li><Link href="/product/digital-record" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">Digital Record</Link></li>
                            <li><Link href="/product/production-management" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">Production Management</Link></li>
                            <li><Link href="/product/quality-management" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">Quality Management</Link></li>
                            <li><Link href="/product/monitoring" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">Monitoring</Link></li>
                            <li><Link href="/product/artificial-intelligence" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">Artificial Intelligence</Link></li>
                            <li><Link href="/product/automation-integration" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">Automation & Integration</Link></li>
                            <li><Link href="/product/digital-twin" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">Digital Twin</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Solutions */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-6 text-sm">Industries</h4>
                        <ul className="space-y-3">
                            <li><Link href="/industries/automotive" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">Automotive</Link></li>
                            <li><Link href="/industries/aerospace-and-defense" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">Aerospace & Defense</Link></li>
                            <li><Link href="/industries/pharmaceuticals" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">Pharmaceuticals</Link></li>
                            <li><Link href="/industries/packaging" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">Packaging</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Company */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-6 text-sm">Company</h4>
                        <ul className="space-y-3">
                            <li><Link href="/blog" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">Blog</Link></li>
                            <li><Link href="/partners" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">Partners</Link></li>
                            <li><Link href="/contact" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Column 5: Resources */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-6 text-sm">Resources</h4>
                        <ul className="space-y-3">
                            <li><Link href="/roi-calculator" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">ROI Calculator</Link></li>
                            <li><Link href="/demo" className="text-gray-500 hover:text-blue-600 text-sm transition-colors font-semibold text-blue-600">Book a Demo</Link></li>
                        </ul>

                        <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col gap-1">
                            <span className="text-gray-400 text-xs uppercase tracking-wider font-bold">
                                Locations
                            </span>
                            <span className="text-gray-500 text-xs">
                                Lisbon, Portugal
                            </span>
                            <span className="text-gray-500 text-xs">
                                Guarda, Portugal
                            </span>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-xs">
                        © {new Date().getFullYear()} Muvu Technologies. All Rights Reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-gray-400 hover:text-gray-600 text-xs transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-gray-400 hover:text-gray-600 text-xs transition-colors">Terms of Service</Link>
                        <Link href="#" className="text-gray-400 hover:text-gray-600 text-xs transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
