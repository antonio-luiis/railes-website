import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'industrySection',
    title: 'Industry Solutions Section',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Section Title',
            type: 'string',
            initialValue: 'Your Industry solutions',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'industries',
            title: 'Industries List',
            type: 'array',
            description: 'List of industries (pills)',
            of: [{ type: 'string' }],
            initialValue: [
                "Pharmaceuticals Manufacturing",
                "Automotive Manufacturing",
                "Packaging Manufacturing",
                "Aerospace & Defense Manufacturing"
            ],
        }),
        defineField({
            name: 'mainImage',
            title: 'Main Person Image',
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
        // Visibility Tab
        defineField({
            name: 'visibilityTitle',
            title: 'Visibility Title',
            type: 'string',
            initialValue: 'Visibility',
            fieldset: 'visibility',
        }),
        defineField({
            name: 'visibilityDescription',
            title: 'Visibility Description',
            type: 'text',
            rows: 3,
            initialValue: 'See everything happening on the shop floor in real time, from work orders, machines, operators, downtimes, and performance. A live control panel for your entire operation.',
            fieldset: 'visibility',
        }),
        // Execution Tab
        defineField({
            name: 'executionTitle',
            title: 'Execution Title',
            type: 'string',
            initialValue: 'Execution',
            fieldset: 'execution',
        }),
        defineField({
            name: 'executionDescription',
            title: 'Execution Description',
            type: 'text',
            rows: 3,
            initialValue: 'Digitize production processes. Clear instructions, error-free data entry, full traceability, and standardized operations, all executed directly by the shop floor teams.',
            fieldset: 'execution',
        }),
        defineField({
            name: 'executionImage',
            title: 'Execution Workflow Image',
            type: 'image',
            options: { hotspot: true },
            fieldset: 'execution',
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                },
            ],
        }),
        // Quality Tab
        defineField({
            name: 'qualityTitle',
            title: 'Quality Title',
            type: 'string',
            initialValue: 'Quality',
            fieldset: 'quality',
        }),
        defineField({
            name: 'qualityDescription',
            title: 'Quality Description',
            type: 'text',
            rows: 3,
            initialValue: 'Control and record quality at every step. Inline inspections, nonconformities, and action plans, with complete traceability by lot, operator, and equipment.',
            fieldset: 'quality',
        }),
        // Improvement Tab
        defineField({
            name: 'improvementTitle',
            title: 'Improvement Title',
            type: 'string',
            initialValue: 'Improvement',
            fieldset: 'improvement',
        }),
        defineField({
            name: 'improvementDescription',
            title: 'Improvement Description',
            type: 'text',
            rows: 3,
            initialValue: 'Turn data into decisions. Analyze root causes of downtime, compare shifts, identify losses, with automated reports and dashboards that power continuous improvement.',
            fieldset: 'improvement',
        }),
    ],
    fieldsets: [
        { name: 'visibility', title: 'Visibility Tab' },
        { name: 'execution', title: 'Execution Tab' },
        { name: 'quality', title: 'Quality Tab' },
        { name: 'improvement', title: 'Improvement Tab' },
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare({ title }) {
            return {
                title: title || 'Industry Solutions',
                subtitle: 'Section',
            }
        },
    },
})
