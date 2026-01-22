"use client";

import { Mail, ArrowRight } from 'lucide-react';
import { useActionState } from 'react';
import { submitForm } from '@/app/actions';
import { useState, useEffect } from 'react';

interface NewsletterSectionProps {
    data?: {
        title?: string;
        description?: string;
        placeholder?: string;
        buttonText?: string;
        footerText?: string;
    }
}

const initialState = {
    success: false,
    message: '',
};

export function NewsletterSection({ data }: NewsletterSectionProps) {
    // @ts-ignore
    const [state, formAction] = useActionState(submitForm, initialState);
    const [pending, setPending] = useState(false);

    const fallback = {
        title: "Stay ahead in manufacturing",
        description: "Join our newsletter to receive the latest insights, news and trends in the manufacturing industry.",
        placeholder: "Enter your work email",
        buttonText: "Subscribe",
        footerText: "We care about your data in our privacy policy."
    };

    const content = { ...fallback, ...data };

    useEffect(() => {
        if (state.success) {
            setPending(false);
        }
    }, [state.success]);

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
                                {content.title}
                            </h2>
                            <p className="text-blue-100 text-lg max-w-md mx-auto lg:mx-0">
                                {content.description}
                            </p>
                        </div>

                        {/* Form */}
                        <div className="lg:w-1/2 w-full max-w-md">
                            {state.success ? (
                                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20">
                                    <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Subscribed!</h3>
                                    <p className="text-blue-100 mt-1">Thank you for joining our newsletter.</p>
                                </div>
                            ) : (
                                <form action={formAction} onSubmit={() => setPending(true)} className="flex flex-col sm:flex-row gap-3">
                                    <input type="hidden" name="formType" value="newsletter" />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder={content.placeholder}
                                        className="flex-1 bg-white/10 border border-white/20 text-white placeholder-blue-200/70 rounded-xl px-5 py-4 outline-none focus:bg-white/20 focus:border-white/40 transition-all backdrop-blur-sm"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        disabled={pending}
                                        className="bg-white text-blue-900 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 group whitespace-nowrap shadow-lg disabled:opacity-80 disabled:cursor-not-allowed"
                                    >
                                        {pending ? '...' : content.buttonText}
                                        {!pending && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                                    </button>
                                </form>
                            )}
                            {!state.success && (
                                <p className="text-blue-200/60 text-xs mt-4 text-center lg:text-left pl-2">
                                    {content.footerText}
                                </p>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
