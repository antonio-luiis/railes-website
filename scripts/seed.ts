import { createClient } from 'next-sanity'

const client = createClient({
    projectId: 'iqg6bnjr',
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: false,
    token: process.env.SANITY_SESSION_TOKEN // This will be injected by 'sanity exec'
})

const homepageData = {
    _id: 'homepage',
    _type: 'homepage',
    title: 'Home',
    hero: {
        title: 'The Manufacturing Engineering Platform',
        highlightedWords: ['Manufacturing', 'Engineering', 'Platform'],
        description: 'Plan, track, and optimize your manufacturing operations with Railes.',
    },
    featureBlocks: [
        {
            _key: 'fb1',
            title: 'Production Planning',
            description: 'Optimize your production schedules and resource allocation.',
            backgroundColor: '#1e3a8a',
        },
        {
            _key: 'fb2',
            title: 'Quality Control',
            description: 'Ensure product quality with real-time monitoring and alerts.',
            backgroundColor: '#1e3a8a',
        }
    ],
    featuresGrid: [
        {
            _key: 'fg1',
            title: 'Compliance',
            subtitle: 'and Traceability',
            description: 'Ensure adherence to regulations and transparent tracking of production processes, safeguarding quality and enabling swift issue resolution.',
            highlightedText: 'transparent tracking',
        },
        {
            _key: 'fg2',
            title: 'Quality Management',
            subtitle: 'and Control',
            description: 'Prioritizes quality throughout the manufacturing process, facilitating quality standards enforcement, inspections, and real-time quality tracking.',
            highlightedText: 'quality throughout the manufacturing process',
        },
        {
            _key: 'fg3',
            title: 'Customization',
            subtitle: 'and Flexibility',
            description: 'Customization options, ensuring seamless integration with existing systems and adaptation to diverse manufacturing processes.',
            highlightedText: 'seamless integration',
        },
        {
            _key: 'fg4',
            title: 'Advanced Data Analytics',
            subtitle: 'and Artificial Intelligence',
            description: 'Leveraging advanced data analytics and AI for learning and well-informed decision-making.',
            badge: '⭐ Advanced data analytics and AI',
        }
    ]
}

async function seed() {
    console.log('🌱 Seeding Homepage content...')
    try {
        await client.createOrReplace(homepageData)
        console.log('✅ Homepage content created successfully!')
    } catch (err) {
        console.error('❌ Error seeding data:', err.message)
    }
}

seed()
