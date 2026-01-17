import { ArrowRight, Calendar, Clock, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-data';

export function BlogPreviewSection() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2 block">Our latest thoughts</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Read our blog
                        </h2>
                    </div>

                    <Link href="/blog" className="group flex items-center gap-2 text-blue-900 font-bold hover:text-blue-600 transition-colors">
                        View all articles
                        <div className="bg-blue-50 rounded-full p-2 group-hover:bg-blue-100 transition-colors">
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </Link>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogPosts.slice(0, 3).map((post, index) => (
                        <Link href={`/blog/${post.slug}`} key={post.slug} className="group cursor-pointer block h-full">
                            {/* Image Card */}
                            <div className="relative h-[240px] w-full rounded-2xl overflow-hidden mb-6 bg-gray-100">
                                {/* Gradient Overlay for Text contrast if needed, or just hover effect */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10" />

                                {/* Image or Fallback */}
                                {post.image ? (
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className={`w-full h-full bg-gradient-to-br ${index === 0 ? 'from-blue-100 to-indigo-100' : index === 1 ? 'from-purple-100 to-pink-100' : 'from-teal-100 to-emerald-100'}`}></div>
                                )}

                                {/* Badge */}
                                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-900 z-20">
                                    {post.category}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-4 text-xs text-gray-500 font-medium">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        {post.readTime}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">
                                    {post.title}
                                </h3>

                                <p className="text-gray-600 text-sm line-clamp-2">
                                    {post.excerpt}
                                </p>

                                <div className="pt-2 flex items-center gap-2 text-blue-600 font-bold text-sm group-hover:gap-3 transition-all">
                                    Read article <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}
