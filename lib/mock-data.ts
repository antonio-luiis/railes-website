
export const siteSettings = {
    siteTitle: "RAILES",
    logo: {
        asset: {
            url: "/railes_logo.svg"
        }
    },
    siteDescription: "Manufacturing Execution System - See. Control. Optimize.",
    navigationItems: [
        { label: "Product", url: "#" },
        { label: "Industries", url: "#" },
        { label: "Partners", url: "#" },
        { label: "Resources", url: "#" },
        { label: "About us", url: "#" }
    ],
    footerText: "© 2026 Railes. All Rights Reserved."
};

export const heroData = {
    title: "See. Control. Optimize All in one platform",
    highlightedWords: ["Optimize", "platform"],
    description: "Railes MES allows you to monitor your production in real time, manage processes, optimize operations with AI, and automate the entire manufacturing workflow.",
    heroImage: {
        asset: {
            _id: "hero-img",
            url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80"
        },
        alt: "Factory Automation"
    },
    videoUrl: "https://www.youtube.com/embed/PaO7YiBeNFE"
};

export const featureBlocks = [
    {
        _id: "block1",
        title: "Made to simplify production and increase performance",
        description: "It is a Manufacturing Execution System (MES) created to integrate and automate activities in production environments, from the factory floor to decision-making managers.",
        backgroundColor: "#1e3a8a",
    }
];

export const featuresGrid = [
    {
        _id: "1",
        title: "Compliance",
        subtitle: "and Traceability",
        description: "Ensure adherence to regulations and transparent tracking of production processes, safeguarding quality and enabling swift issue resolution.",
        highlightedText: "transparent tracking",
        order: 1,
    },
    {
        _id: "2",
        title: "Quality Management",
        subtitle: "and Control",
        description: "Prioritizes quality throughout the manufacturing process, facilitating quality standards enforcement, inspections, and real-time quality tracking.",
        highlightedText: "quality throughout the manufacturing process",
        order: 2,
    },
    {
        _id: "3",
        title: "Customization",
        subtitle: "and Flexibility",
        description: "Customization options, ensuring seamless integration with existing systems and adaptation to diverse manufacturing processes.",
        highlightedText: "seamless integration",
        order: 3,
    },
    {
        _id: "4",
        title: "Advanced Data Analytics",
        subtitle: "and Artificial Intelligence",
        description: "Advanced data analytics and AI for real-time insights to optimize planning and well-informed decision-making.",
        badge: "⭐ Advanced data analytics and AI",
        order: 4,
    }
];

export const complianceSection = {
    complianceTitle: "Compliance and Traceability",
    complianceDescription: "Ensure adherence to regulations and transparent tracking of production processes, safeguarding quality and enabling swift issue resolution.",
    complianceImage: {
        asset: { url: "/images/Compliance_Traceability_Railes.png" },
        alt: "Compliance"
    },
    qualityTitle: "Quality Management and Control",
    qualityDescription: "Prioritizes quality throughout the manufacturing process, facilitating quality standards enforcement, inspections, and real-time quality tracking.",
    qualityImage: {
        asset: { url: "/images/Quality_Management_Control_Railes.png" },
        alt: "Quality"
    },
    qualityImageOverlay: {
        asset: { url: "/images/Grafico_5.1.png" },
        alt: "Quality Metrics"
    }
};

export const customizationSection = {
    customizationTitle: "Customization and Flexibility",
    customizationDescription: "Customization options, ensuring seamless integration with existing systems and adaptation to diverse manufacturing processes.",
    customizationImage: {
        asset: { url: "/images/Customization_Flexibility_Railes.png" },
        alt: "Customization"
    },
    aiLabel: "Advanced data analytics and AI",
    aiTitle: "Advanced Data Analytics and Artificial Intelligence",
    aiDescription: "Advanced data analytics and AI for real-time insights to optimize planning and well-informed decision-making.",
    aiImage: {
        asset: { url: "/images/Grafico_AI.png" },
        alt: "AI"
    }
};

export const industrySection = {
    title: "Your Industry solutions",
    industries: [
        "Pharmaceuticals Manufacturing",
        "Automotive Manufacturing",
        "Packaging Manufacturing",
        "Aerospace & Defense Manufacturing"
    ],
    mainImage: {
        asset: { url: "/images/Extra_1.png" },
        alt: "Industry Professional"
    },
    executionImage: {
        asset: { url: "/images/Grafico_9.png" }, // Altera para o nome real do ficheiro
        alt: "Execution Workflow"
    },
};

export const proofSection = {
    title: "Proven Teste",
    stats: [
        { label: "Efficiency Increase", value: "25%" },
        { label: "Error Reduction", value: "40%" },
        { label: "Implementation Time", value: "3 Months" }
    ]
};

export const testimonialsSection = {
    title: "Trusted by Manufacturers",
    description: "See what our clients say about their experience with Railes.",
    testimonials: [
        {
            name: "John Doe",
            role: "Production Manager",
            company: "Tech Corp",
            text: "Railes has completely transformed how we view our shop floor data. The real-time insights are invaluable.",
            image: {
                asset: { url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200" }
            }
        }
    ]
};

export const ctaSection = {
    title: "Explore how Railes MES can enhance efficiency and productivity within your production",
    buttonText: "Schedule a Demo",
    buttonUrl: "/demo"
};

export const newsletterSection = {
    title: "Stay updated",
    description: "Join our community of industry enthusiasts by subscribing our newsletter."
};

export const solutions = {
    title: "Our Solutions",
    industries: ["Manufacturing", "Distribution"],
    cards: [
        {
            title: "Digital Production",
            description: "Go paperless and gain real-time visibility.",
            type: 'list' as const,
            listItems: ["Scheduling", "Tracking", "Reporting"]
        },
        {
            title: "Inventory Control",
            description: "Optimize stock levels and reduce waste.",
            type: 'list' as const,
            listItems: ["Stock Management", "Batch Control", "Traceability"]
        }
    ]
};
