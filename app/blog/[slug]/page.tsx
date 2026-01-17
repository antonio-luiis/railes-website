
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { blogPosts } from '@/lib/blog-data';

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: `${post.title} | Railes Blog`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.date, // Note: In real app, convert to ISO 8601
            authors: [post.author.name],
            images: [
                {
                    url: post.image,
                },
            ],
        },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    // JSON-LD for Google
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        image: post.image,
        datePublished: post.date, // Format should ideally be ISO
        author: {
            '@type': 'Person',
            name: post.author.name,
        },
        description: post.excerpt,
    };

    return (
        <main className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Progress Bar (Simulated for now, could be client component) */}
            <div className="fixed top-0 left-0 h-1 bg-blue-600 z-50 w-full origin-left transform scale-x-0 animate-scroll-progress" style={{ animationTimeline: 'scroll()' } as any}></div>

            <article className="pb-24">

                {/* Hero Section */}
                <div className="pt-32 pb-12 md:pt-40 md:pb-16 bg-gray-50 border-b border-gray-100">
                    <div className="container mx-auto max-w-4xl px-4 text-center">
                        <div className="flex items-center justify-center gap-4 text-sm font-medium mb-6 text-gray-500">
                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                {post.category}
                            </span>
                            <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" /> {post.date}
                            </span>
                            <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" /> {post.readTime}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
                            {post.title}
                        </h1>

                        <div className="flex items-center justify-center gap-4">
                            {/* Author Avatar */}
                            <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden relative">
                                {/* Placeholder avatar if no image */}
                                <div className="absolute inset-0 flex items-center justify-center bg-blue-900 text-white font-bold text-lg">
                                    {post.author.name.charAt(0)}
                                </div>
                            </div>
                            <div className="text-left">
                                <div className="text-gray-900 font-bold">{post.author.name}</div>
                                <div className="text-gray-500 text-sm">{post.author.role}</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="container mx-auto max-w-7xl px-4 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* Sidebar (Left) - Share & Navigation */}
                        <div className="hidden lg:block lg:col-span-2 h-full">
                            <div className="sticky top-32 space-y-8">
                                <Link href="/blog" className="flex items-center text-gray-500 hover:text-blue-600 font-medium transition-colors mb-8">
                                    <ArrowLeft className="w-4 h-4 mr-2" /> Back
                                </Link>

                                <div className="space-y-4">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Share</p>
                                    <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                                        <Linkedin className="w-4 h-4" />
                                    </button>
                                    <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                                        <Twitter className="w-4 h-4" />
                                    </button>
                                    <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                                        <Facebook className="w-4 h-4" />
                                    </button>
                                    <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                                        <Share2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Article Content (Center) */}
                        <div className="lg:col-span-8">
                            {/* Featured Image */}
                            <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-12 shadow-lg">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Prose Content */}
                            <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-8 prose-p:mb-6 prose-a:text-blue-600 prose-img:rounded-xl">
                                <div dangerouslySetInnerHTML={{ __html: post.content }} />
                            </div>

                            {/* Tags / Footer of Article */}
                            <div className="mt-16 pt-8 border-t border-gray-100">
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-md text-sm font-medium">Manufacturing</span>
                                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-md text-sm font-medium">Technology</span>
                                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-md text-sm font-medium">Innovation</span>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar (Right) - Table of Contents (Simplified for now) */}
                        <div className="hidden lg:block lg:col-span-2">
                            {/* Can implement dynamic ToC here later */}
                        </div>

                    </div>
                </div>
            </article>

            {/* Read Next Section */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto max-w-6xl px-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">Read Next</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {blogPosts.filter(p => p.slug !== post.slug).slice(0, 3).map((relatedPost) => (
                            <Link href={`/blog/${relatedPost.slug}`} key={relatedPost.slug} className="group cursor-pointer">
                                <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4 bg-gray-200">
                                    <Image
                                        src={relatedPost.image}
                                        alt={relatedPost.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                                    {relatedPost.title}
                                </h4>
                                <div className="text-xs text-gray-500">{relatedPost.date}</div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

        </main>
    );
}
