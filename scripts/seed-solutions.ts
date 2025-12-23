import { createClient } from 'next-sanity'

const client = createClient({
    projectId: 'iqg6bnjr',
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: false,
    token: process.env.SANITY_SESSION_TOKEN
})

const solutionsData = {
    title: 'Your Industry solutions',
    industries: [
        'Pharmaceuticals Manufacturing',
        'Automotive Manufacturing',
        'Packaging Manufacturing',
        'Aerospace & Defense Manufacturing'
    ],
    cards: [
        {
            _key: 'sol1',
            title: 'Visibility',
            description: 'See everything happening on the shop floor in real time, from work orders, machines, operators, downtimes, and performance. A live control panel for your entire operation.',
            type: 'list',
            listItems: ['Work Orders', 'Operators', 'Work Centers', 'Downtimes']
        },
        {
            _key: 'sol2',
            title: 'Execution',
            description: 'Digitize production processes. Clear instructions, error-free data entry, full traceability, and standardized operations, all executed directly by the shop floor teams.',
            type: 'image',
            // We'll skip the actual image asset for now or use a placeholder if needed, 
            // but the structure will be there.
        },
        {
            _key: 'sol3',
            title: 'Quality',
            description: 'Control and record quality at every step. Inline inspections, nonconformities, and action plans, with complete traceability by lot, operator, and equipment.',
            type: 'list',
            listItems: ['Inspections', 'Action Plans', 'Traceability']
        },
        {
            _key: 'sol4',
            title: 'Improvement',
            description: 'Turn data into decisions. Analyze root causes of downtime, compare shifts, identify losses, with automated reports and dashboards that power continuous improvement.',
            type: 'list',
            listItems: ['Suggestions', 'Optimization', 'Prevention']
        }
    ]
}

async function seedSolutions() {
    console.log('🌱 Seeding Solutions content...')
    try {
        // We need to patch the existing homepage document
        await client.patch('homepage')
            .set({ solutions: solutionsData })
            .commit()
        console.log('✅ Solutions content added successfully!')
    } catch (err: any) {
        console.error('❌ Error seeding solutions:', err.message)
    }
}

seedSolutions()
