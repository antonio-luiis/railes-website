import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'complianceSection',
    title: 'Compliance & Quality Section',
    type: 'object',
    fields: [
        defineField({
            name: 'complianceTitle',
            title: 'Compliance Title',
            type: 'string',
            initialValue: 'Compliance and Traceability',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'complianceDescription',
            title: 'Compliance Description',
            type: 'text',
            rows: 3,
            initialValue: 'Ensure adherence to regulations and transparent tracking of production processes, safeguarding quality and enabling swift issue resolution.',
        }),
        defineField({
            name: 'complianceImage',
            title: 'Compliance Flowchart Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                },
            ],
        }),
        defineField({
            name: 'qualityTitle',
            title: 'Quality Title',
            type: 'string',
            initialValue: 'Quality Management and Control',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'qualityDescription',
            title: 'Quality Description',
            type: 'text',
            rows: 3,
            initialValue: 'Prioritizes quality throughout the manufacturing process, facilitating quality standards enforcement, inspections, and real-time quality tracking.',
        }),
        defineField({
            name: 'qualityImage',
            title: 'Quality Dashboard Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                },
            ],
        }),
    ],
    preview: {
        select: {
            title: 'complianceTitle',
        },
        prepare({ title }) {
            return {
                title: title || 'Compliance & Quality',
                subtitle: 'Section',
            }
        },
    },
})
