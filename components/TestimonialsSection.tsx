import { Quote } from 'lucide-react';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';

interface TestimonialsSectionProps {
    data?: {
        title?: string;
        description?: string;
        testimonials?: Array<{
            text: string;
            name: string;
            role: string;
            image: any;
        }>;
    }
}

export function TestimonialsSection({ data }: TestimonialsSectionProps) {
    const fallback = {
        title: "Words of praise from others",
        description: "Hear what industry leaders are saying about their experience with Railes MES.",
        testimonials: [
            {
                text: "Railes MES allows you to monitor your production in real time, manage processes, optimize operations",
                name: "Inês Almeida",
                role: "CEO and Co-founder of Muvu",
                image: "/images/avatar-ines.png" // Placeholder
            },
        ]
    };

    const content = { ...fallback, ...data };
    const testimonials = content.testimonials || fallback.testimonials;

    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        {content.title}
                    </h2>
                    <p className="text-gray-600 text-lg">
                        {content.description}
                    </p>
                </div>

                {/* Carousel / Cards */}
                <div className="relative">
                    {/* Gradient Masks for Carousel Effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

                    <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 px-4 md:px-0 -mx-4 md:mx-0 scrollbar-hide justify-center">

                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="flex-none w-[85vw] md:w-[400px] snap-center bg-white rounded-[32px] p-8 md:p-10 shadow-sm border border-gray-100 flex flex-col h-[320px]"
                            >
                                <Quote className="w-12 h-12 text-[#1e40af] mb-6 fill-[#1e40af]" />

                                <p className="text-gray-900 font-medium text-lg mb-8 leading-relaxed line-clamp-4">
                                    {testimonial.text}
                                </p>

                                <div className="mt-auto flex items-center gap-4">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100 shrink-0">
                                        {/* Placeholder for Avatar */}
                                        {testimonial.image && (
                                            <Image
                                                src={typeof testimonial.image === 'string' ? testimonial.image : urlForImage(testimonial.image).url()}
                                                alt={testimonial.name}
                                                fill
                                                className="object-cover"
                                            />
                                        )}
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">{testimonial.name}</div>
                                        <div className="text-sm text-gray-500">{testimonial.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
