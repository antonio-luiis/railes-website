"use client";

import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, MapPin, Clock, Briefcase, Send } from 'lucide-react';
import { useState } from 'react';

interface Job {
    slug: string;
    title: string;
    category: string;
    location: string;
    type: string;
    description: string;
    responsibilities: string[];
    requirements: string[];
}

const jobsData: Job[] = [
    {
        slug: 'senior-full-stack-engineer',
        title: 'Senior Full Stack Engineer',
        category: 'Engineering',
        location: 'Remote (EU)',
        type: 'Full-time',
        description: 'We are looking for a Senior Full Stack Engineer to join our team and help build the next generation of manufacturing execution systems. You will work on challenging problems at the intersection of industrial operations and modern software development.',
        responsibilities: [
            'Design and implement scalable features for our MES platform',
            'Collaborate with product managers and designers to deliver high-quality solutions',
            'Write clean, maintainable code with comprehensive tests',
            'Mentor junior engineers and contribute to technical decisions',
            'Participate in code reviews and help maintain engineering standards'
        ],
        requirements: [
            '5+ years of experience in full-stack development',
            'Strong proficiency in React, Node.js, and TypeScript',
            'Experience with relational databases (PostgreSQL preferred)',
            'Familiarity with cloud platforms (AWS, Azure, or GCP)',
            'Excellent communication skills and ability to work in a team',
            'Experience with manufacturing or industrial software is a plus'
        ]
    },
    {
        slug: 'product-designer-ui-ux',
        title: 'Product Designer (UI/UX)',
        category: 'Design',
        location: 'Lisbon, PT',
        type: 'Full-time',
        description: 'Join our design team to create intuitive and powerful interfaces for manufacturing professionals. You will shape the user experience of software used in factories worldwide.',
        responsibilities: [
            'Design user interfaces for complex industrial workflows',
            'Conduct user research and usability testing',
            'Create wireframes, prototypes, and high-fidelity designs',
            'Collaborate closely with engineers and product managers',
            'Maintain and evolve our design system'
        ],
        requirements: [
            '3+ years of experience in product design',
            'Strong portfolio demonstrating UX/UI skills',
            'Proficiency in Figma or similar design tools',
            'Understanding of front-end development constraints',
            'Excellent communication and presentation skills',
            'Experience with B2B or enterprise software is a plus'
        ]
    },
    {
        slug: 'enterprise-sales-executive',
        title: 'Enterprise Sales Executive',
        category: 'Sales',
        location: 'London, UK',
        type: 'Full-time',
        description: 'Drive growth by bringing RAILES MES solutions to manufacturing companies across Europe. You will manage the full sales cycle for enterprise clients.',
        responsibilities: [
            'Identify and qualify new business opportunities',
            'Manage complex sales cycles with multiple stakeholders',
            'Deliver compelling product demonstrations',
            'Negotiate contracts and close deals',
            'Build long-term relationships with key accounts'
        ],
        requirements: [
            '5+ years of B2B enterprise sales experience',
            'Proven track record of meeting or exceeding quotas',
            'Experience selling software to manufacturing or industrial companies',
            'Strong presentation and negotiation skills',
            'Ability to understand technical products',
            'Willingness to travel within Europe'
        ]
    }
];

export default function JobDetailPage() {
    const params = useParams();
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        linkedin: '',
        cv: null as File | null
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const job = jobsData.find(j => j.slug === params.slug);

    if (!job) {
        return (
            <main className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-slate-900 mb-4">Job Not Found</h1>
                    <button
                        onClick={() => router.push('/careers')}
                        className="text-blue-600 hover:underline"
                    >
                        Back to Careers
                    </button>
                </div>
            </main>
        );
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            // Check file size (max 5MB)
            if (file.size > 5 * 1024 * 1024) {
                alert('File size must be less than 5MB');
                return;
            }
            // Check file type
            const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
            if (!allowedTypes.includes(file.type)) {
                alert('Please upload a PDF or Word document');
                return;
            }
            setFormData({ ...formData, cv: file });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.cv) {
            alert('Please upload your CV');
            return;
        }

        setIsSubmitting(true);

        try {
            const data = new FormData();
            data.append('name', formData.name);
            data.append('email', formData.email);
            data.append('phone', formData.phone);
            data.append('linkedin', formData.linkedin);
            data.append('jobTitle', job.title);
            data.append('cv', formData.cv);

            const { submitApplication } = await import('@/app/actions');
            const result = await submitApplication(data);

            if (result.success) {
                setSubmitSuccess(true);
                setFormData({ name: '', email: '', phone: '', linkedin: '', cv: null });
            }
        } catch (error) {
            console.error('Error submitting application:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-white">
            {/* Header */}
            <section className="bg-slate-50 border-b border-slate-200 py-12">
                <div className="container mx-auto px-4">
                    <button
                        onClick={() => router.push('/careers')}
                        className="flex items-center gap-2 text-slate-600 hover:text-blue-600 mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Careers
                    </button>

                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{job.title}</h1>

                    <div className="flex flex-wrap gap-4 text-slate-600">
                        <span className="flex items-center gap-2">
                            <Briefcase className="w-5 h-5" />
                            {job.category}
                        </span>
                        <span className="flex items-center gap-2">
                            <MapPin className="w-5 h-5" />
                            {job.location}
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            {job.type}
                        </span>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-slate max-w-none mb-16">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">About the Role</h2>
                        <p className="text-slate-600 leading-relaxed mb-8">{job.description}</p>

                        <h3 className="text-xl font-bold text-slate-900 mb-4">Responsibilities</h3>
                        <ul className="space-y-2 mb-8">
                            {job.responsibilities.map((item, idx) => (
                                <li key={idx} className="text-slate-600">{item}</li>
                            ))}
                        </ul>

                        <h3 className="text-xl font-bold text-slate-900 mb-4">Requirements</h3>
                        <ul className="space-y-2">
                            {job.requirements.map((item, idx) => (
                                <li key={idx} className="text-slate-600">{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Application Form */}
                    <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                                <Send className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900">Apply for this Position</h2>
                        </div>

                        {submitSuccess ? (
                            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                                <p className="text-green-800 font-semibold mb-2">Application Submitted!</p>
                                <p className="text-green-700">Thank you for your interest. We'll review your application and get back to you soon.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                                        placeholder="+351 123 456 789"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">LinkedIn Profile</label>
                                    <input
                                        type="url"
                                        value={formData.linkedin}
                                        onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                                        placeholder="https://linkedin.com/in/..."
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Upload CV *</label>
                                    <div className="relative">
                                        <input
                                            type="file"
                                            required
                                            accept=".pdf,.doc,.docx"
                                            onChange={handleFileChange}
                                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                        />
                                        <p className="text-xs text-slate-500 mt-2">PDF or Word document, max 5MB</p>
                                        {formData.cv && (
                                            <p className="text-sm text-green-600 mt-2">✓ {formData.cv.name} ({(formData.cv.size / 1024).toFixed(2)} KB)</p>
                                        )}
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}
