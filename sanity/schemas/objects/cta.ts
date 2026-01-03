import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'ctaSection',
    title: 'Call to Action Section',
    type: 'object',
    fields: [
        defineField({
            name: 'badgeText',
            title: 'Badge Text',
            type: 'string',
            initialValue: 'Ready to transform your factory?',
        }),
        defineField({
            name: 'title',
            title: 'Main Title',
            type: 'string',
            initialValue: 'Railes MES can enhance efficiency',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'highlightedTitle',
            title: 'Highlighted Title Part',
            type: 'string',
            description: 'The part of the title with gradient color',
            initialValue: 'and productivity',
        }),
        defineField({
            name: 'titleSuffix',
            title: 'Title Suffix',
            type: 'string',
            initialValue: 'within your production',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3,
            initialValue: 'Railes MES allows you to monitor your production in real time, manage processes, optimize operations, and gain the competitive edge you need.',
        }),
        defineField({
            name: 'primaryButtonText',
            title: 'Primary Button Text',
            type: 'string',
            initialValue: 'Book a demo',
        }),
        defineField({
            name: 'primaryButtonLink',
            title: 'Primary Button Link',
            type: 'string',
            initialValue: '/demo',
        }),
        defineField({
            name: 'secondaryButtonText',
            title: 'Secondary Button Text',
            type: 'string',
            initialValue: 'Contact Sales',
        }),
        defineField({
            name: 'secondaryButtonLink',
            title: 'Secondary Button Link',
            type: 'string',
            initialValue: '/contact',
        }),
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare({ title }) {
            return {
                title: title || 'Call to Action',
                subtitle: 'Section',
            }
        },
    },
})
