
export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    author: {
        name: string;
        role: string;
        image?: string;
    };
    image: string;
    content: string; // HTML or Markdown content for now
}

export const blogPosts: BlogPost[] = [
    {
        slug: "importance-of-usability-in-mes",
        title: "The Importance of Usability in Manufacturing Execution Systems",
        excerpt: "In the complex world of industrial manufacturing, user experience is often overlooked. Discover why intuitive design is the key to unlocking true shop floor productivity.",
        date: "March 5, 2025",
        readTime: "5 min read",
        category: "Usability",
        author: {
            name: "Sarah Jenkins",
            role: "Product Designer"
        },
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070",
        content: `
            <h2>Why UX Matters in Manufacturing</h2>
            <p>For decades, manufacturing software has been designed with a "function-first" mentality, often resulting in complex, clunky interfaces that require weeks of training to master. Operators, already under pressure to meet quotas, are forced to navigate through endless menus and cryptic error messages.</p>
            <p>This approach is no longer sustainable. As the workforce shifts and digital natives enter the factory floor, the expectation for software usability has changed. Workers expect the tools they use at work to be as intuitive as the apps they use in their personal lives.</p>
            
            <h3>The Hidden Cost of Bad Design</h3>
            <p>Poor usability isn't just an annoyance; it has real financial costs:</p>
            <ul>
                <li><strong>Increased Training Time:</strong> distinct interfaces require longer onboarding periods.</li>
                <li><strong>Higher Error Rates:</strong> Confusing workflows lead to data entry errors and production mistakes.</li>
                <li><strong>Lower Adoption:</strong> If a system is hard to use, workers will find workarounds, bypassing the system entirely.</li>
            </ul>

            <blockquote>
                "The best MES is the one that operators actually want to use. Compliance follows convenience."
            </blockquote>

            <h2>Railes' Approach to Design</h2>
            <p>At Railes, we believe that powerful functionality doesn't have to come at the cost of simplicity. Our interface is designed to surface the right information at the right time, reducing cognitive load and allowing operators to focus on what they do best: making great products.</p>
        `
    },
    {
        slug: "optimizing-production-with-ai",
        title: "Optimizing Production with Artificial Intelligence",
        excerpt: "Machine learning isn't just a buzzword. It's a practical tool for predicting maintenance needs, reducing downtime, and optimizing resource allocation in real-time.",
        date: "March 12, 2025",
        readTime: "8 min read",
        category: "Technology",
        author: {
            name: "David Chen",
            role: "CTO"
        },
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=2095",
        content: `
            <h2>Beyond the Hype</h2>
            <p>Artificial Intelligence (AI) has permeated every industry, and manufacturing is no exception. However, amidst the hype, it's crucial to identify the practical applications that drive real ROI.</p>
            
            <h3>Predictive Maintenance</h3>
            <p>One of the most immediate benefits of AI in manufacturing is predictive maintenance. By analyzing vibration data, temperature readings, and historical performance, AI models can predict when a machine is likely to fail <em>before</em> it happens.</p>
            
            <p>This shift from reactive to proactive maintenance can save manufacturers millions in unplanned downtime.</p>

            <h3>Quality Control</h3>
            <p>Computer vision systems powered by AI can detect microscopic defects on production lines at speeds no human inspector could match. This ensures that only perfect products leave the factory, protecting your brand reputation and reducing waste.</p>
        `
    },
    {
        slug: "future-of-manufacturing-2025",
        title: "The Future of Manufacturing: 2025 and Beyond",
        excerpt: "From lights-out factories to human-centric automation, we explore the trends that will define the next era of industrial production.",
        date: "March 20, 2025",
        readTime: "6 min read",
        category: "Industry 4.0",
        author: {
            name: "Alex Rivera",
            role: "Industry Analyst"
        },
        image: "https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?auto=format&fit=crop&q=80&w=2070",
        content: `
            <h2>The Human-Centric Factory</h2>
            <p>While automation continues to advance, the narrative is shifting from "replacing humans" to "augmenting humans". Industry 5.0 focuses on the collaboration between people and smart systems.</p>
            
            <p>Wearable technology, AR-guided assembly instructions, and cobots (collaborative robots) are empowering workers to perform complex tasks with greater precision and safety.</p>

            <h2>Sustainability as a Core KPI</h2>
            <p>Sustainability is no longer just a corporate social responsibility initiative; it's a core operational metric. Modern MES platforms like Railes track energy consumption and waste in real-time, allowing manufacturers to optimize their carbon footprint alongside their production output.</p>
        `
    }
];
