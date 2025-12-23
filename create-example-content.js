// Script to create example content in Sanity
// Run this with: node create-example-content.js

const { createClient } = require('@sanity/client')

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    useCdn: false,
    apiVersion: '2024-01-01',
    token: process.env.SANITY_API_TOKEN, // You'll need to set this
})

async function createExampleContent() {
    try {
        // Create Hero Section
        const hero = await client.create({
            _type: 'hero',
            title: 'See. Control. Optimize All in one platform',
            highlightedWords: ['Optimize', 'platform'],
            description: 'Railes MES allows you to monitor your production in real time, manage processes, optimize operations with AI, and automate the entire manufacturing workflow.',
        })
        console.log('✅ Created Hero Section:', hero._id)

        // Create Feature Block
        const feature = await client.create({
            _type: 'feature',
            title: 'Made to simplify production and increase performance',
            description: 'It is a Manufacturing Execution System (MES) created to integrate and automate activities in production environments, from the factory floor to decision-making managers.',
            backgroundColor: '#1e3a8a',
            order: 1,
        })
        console.log('✅ Created Feature Block:', feature._id)

        // Create Site Settings
        const settings = await client.create({
            _type: 'siteSettings',
            siteTitle: 'RAILES',
            siteDescription: 'Manufacturing Execution System',
            navigationItems: [
                { label: 'Product', url: '#' },
                { label: 'Industries', url: '#' },
                { label: 'Partners', url: '#' },
                { label: 'Resources', url: '#' },
                { label: 'About us', url: '#' },
            ],
            footerText: '© 2024 Railes. All rights reserved.',
        })
        console.log('✅ Created Site Settings:', settings._id)

        // Create Example Post
        const post = await client.create({
            _type: 'post',
            title: 'Welcome to Railes',
            slug: { current: 'welcome-to-railes' },
            body: [
                {
                    _type: 'block',
                    children: [
                        {
                            _type: 'span',
                            text: 'This is the first post on our new website! Railes MES is here to revolutionize your manufacturing processes.',
                        },
                    ],
                },
            ],
        })
        console.log('✅ Created Post:', post._id)

        console.log('\n🎉 All example content created successfully!')
        console.log('\nYou can now:')
        console.log('1. Go to http://localhost:3000/studio to see all documents')
        console.log('2. Edit them and add images')
        console.log('3. Publish them to see changes on the website')
    } catch (error) {
        console.error('❌ Error creating content:', error)
    }
}

createExampleContent()
