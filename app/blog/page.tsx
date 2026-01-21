
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Clock, ChevronRight } from 'lucide-react';
import { blogPosts } from '@/lib/blog-data';

export const metadata: Metadata = {
    title: 'Railes Blog | Insights on Manufacturing & Technology',
    description: 'Explore the latest trends in MES, Industry 4.0, and manufacturing technology. Expert insights to help you optimize production.',
    openGraph: {
        title: 'Railes Blog | Insights on Manufacturing & Technology',
        description: 'Explore the latest trends in MES, Industry 4.0, and manufacturing technology. Expert insights to help you optimize production.',
        type: 'website',
    }
};

export default function BlogPage() {
    const featuredPost = blogPosts[0];
    const regularPosts = blogPosts.slice(1);

    return (
        <main className="min-h-screen bg-white">

            {/* Header / Hero */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 bg-gray-50 border-b border-gray-100">
                <div className="container mx-auto max-w-6xl">
                    <div className="max-w-2xl">
                        <span className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-3 block">
                            RAILES MES Insights
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            Thinking about the future of manufacturing.
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Expert perspectives on MES, digital transformation, and the technologies shaping the factory floor.
                        </p>
                    </div>
                </div>
            </section>

            <div className="container mx-auto max-w-6xl px-4 py-16 md:py-24">

                {/* Featured Post */}
                <div className="mb-20">
                    <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-8 border-b border-gray-100 pb-2">
                        Featured Article
                    </h2>
                    <Link href={`/blog/${featuredPost.slug}`} className="group grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300">
                            <Image
                                src={featuredPost.image}
                                alt={featuredPost.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="space-y-4 md:pr-8">
                            <div className="flex items-center gap-4 text-sm font-medium">
                                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
                                    {featuredPost.category}
                                </span>
                                <span className="text-gray-500 flex items-center gap-1">
                                    <Calendar className="w-4 h-4" /> {featuredPost.date}
                                </span>
                                <span className="text-gray-500 flex items-center gap-1">
                                    <Clock className="w-4 h-4" /> {featuredPost.readTime}
                                </span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                                {featuredPost.title}
                            </h2>
                            <p className="text-gray-600 text-lg line-clamp-3 leading-relaxed">
                                {featuredPost.excerpt}
                            </p>
                            <div className="pt-4 flex items-center text-blue-600 font-bold group-hover:gap-2 transition-all">
                                Read Article <ArrowRight className="w-5 h-5 ml-2" />
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Regular Posts Grid */}
                <div>
                    <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-8 border-b border-gray-100 pb-2">
                        Latest Articles
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        {blogPosts.map((post) => ( // Showing all for demo purposes, usually we slice
                            <Link href={`/blog/${post.slug}`} key={post.slug} className="group flex flex-col h-full">
                                <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-6 bg-gray-100 shadow-sm group-hover:shadow-md transition-all">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-900">
                                        {post.category}
                                    </div>
                                </div>

                                <div className="flex-1 flex flex-col">
                                    <div className="flex items-center gap-3 text-xs text-gray-500 font-medium mb-3">
                                        <span>{post.date}</span>
                                        <span>•</span>
                                        <span>{post.readTime}</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                                        {post.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1">
                                        {post.excerpt}
                                    </p>

                                    <span className="inline-flex items-center text-sm font-bold text-blue-600 mt-auto">
                                        Read more <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>

        </main>
    );
}
