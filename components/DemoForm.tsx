'use submit'
'use client'

import { useActionState } from 'react';
import { submitForm } from '@/app/actions';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const initialState = {
    success: false,
    message: '',
};

export function DemoForm() {
    // @ts-ignore
    const [state, formAction, isPending] = useActionState(submitForm, initialState);

    useEffect(() => {
        if (state.success) {
            // Reset form or show success
        }
    }, [state.success]);

    if (state.success) {
        return (
            <div className="bg-white rounded-[28px] p-8 md:p-10 min-h-[400px] flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Received!</h3>
                <p className="text-gray-500">
                    Thank you for your interest. Our team will contact you shortly to schedule your personalized demo.
                </p>
            </div>
        );
    }

    return (
        <form action={formAction} className="flex flex-col gap-5">
            <input type="hidden" name="formType" value="demo" />

            {/* Name Field */}
            <div>
                <input
                    type="text"
                    name="name"
                    required
                    placeholder="Name"
                    className="w-full px-5 py-4 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-light"
                />
            </div>

            {/* Phone Field */}
            <div>
                <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Phone Number (+ ) xxx-xxx-xxxx"
                    className="w-full px-5 py-4 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-light"
                />
            </div>

            {/* Email Field */}
            <div>
                <input
                    type="email"
                    name="email"
                    required
                    placeholder="Business Email"
                    className="w-full px-5 py-4 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-light"
                />
            </div>

            {/* Industry Field */}
            <div>
                <input
                    type="text"
                    name="industry"
                    placeholder="Industry (optional)"
                    className="w-full px-5 py-4 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-light"
                />
            </div>

            <p className="text-[11px] text-gray-400 leading-tight mt-2 text-center px-2">
                By submitting this form, you agree to receive product and marketing-related communications from Railes
                in accordance with our <Link href="#" className="underline">Privacy Policy</Link>. You may unsubscribe from these communications at any time.
            </p>

            <button
                type="submit"
                disabled={isPending}
                className="mt-4 w-full bg-gradient-to-r from-[#0099ff] to-[#ff5ac8] text-white text-xl font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:opacity-95 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {isPending ? 'Submitting...' : 'Submit'}
            </button>

        </form>
    );
}
