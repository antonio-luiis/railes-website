import { Mail, ArrowRight } from 'lucide-react';

interface NewsletterSectionProps {
    data?: {
        title?: string;
        description?: string;
        placeholder?: string;
        buttonText?: string;
        footerText?: string;
    }
}

export function NewsletterSection({ data }: NewsletterSectionProps) {
    if (!data) return null;

    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4">
                <div className="bg-[#1e40af] rounded-[32px] p-8 md:p-16 relative overflow-hidden">

                    {/* Background Decorations */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">

                        {/* Text Content */}
                        <div className="lg:w-1/2 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-blue-100 text-sm font-medium mb-6">
                                <Mail className="w-4 h-4" />
                                <span>Newsletter</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                {data.title || "Stay ahead in manufacturing"}
                            </h2>
                            <p className="text-blue-100 text-lg max-w-md mx-auto lg:mx-0">
                                {data.description}
                            </p>
                        </div>

                        {/* Form */}
                        <div className="lg:w-1/2 w-full max-w-md">
                            <form className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    placeholder={data.placeholder || "Enter your work email"}
                                    className="flex-1 bg-white/10 border border-white/20 text-white placeholder-blue-200/70 rounded-xl px-5 py-4 outline-none focus:bg-white/20 focus:border-white/40 transition-all backdrop-blur-sm"
                                    required
                                />
                                <button type="button" className="bg-white text-blue-900 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 group whitespace-nowrap shadow-lg">
                                    {data.buttonText || "Subscribe"}
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                            <p className="text-blue-200/60 text-xs mt-4 text-center lg:text-left pl-2">
                                {data.footerText}
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
