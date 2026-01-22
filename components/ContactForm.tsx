'use submit'
'use client'

import { useActionState } from 'react';
import { submitForm } from '@/app/actions';
import { useState, useEffect } from 'react';

const initialState = {
    success: false,
    message: '',
};

export function ContactForm() {
    // @ts-ignore
    const [state, formAction] = useActionState(submitForm, initialState);
    const [pending, setPending] = useState(false);

    useEffect(() => {
        if (state.success) {
            // Reset form logic if needed, or show success message
        }
    }, [state.success]);

    return (
        <form action={formAction} onSubmit={() => setPending(true)} className="space-y-6">
            <input type="hidden" name="formType" value="contact" />

            {state.success ? (
                <div className="p-6 bg-green-50 border border-green-200 rounded-xl text-green-700 text-center">
                    <p className="font-bold text-xl mb-2">Message Sent!</p>
                    <p>Thank you for reaching out. We will get back to you shortly.</p>
                </div>
            ) : (
                <>
                    {/* Name */}
                    <div>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Name"
                            className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Email"
                            className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <textarea
                            name="message"
                            required
                            placeholder="Message"
                            rows={4}
                            className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none font-medium"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            disabled={pending}
                            className="w-full bg-[#0066eb] hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-blue-500/30 text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {pending ? 'Sending...' : 'Send message'}
                        </button>
                    </div>
                </>
            )}
        </form>
    );
}
