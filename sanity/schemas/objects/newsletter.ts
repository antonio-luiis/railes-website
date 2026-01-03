import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'newsletterSection',
    title: 'Newsletter Section',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            initialValue: 'Stay ahead in manufacturing',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3,
            initialValue: 'Join 2,000+ industry leaders. Get the latest trends, insights, and updates delivered to your inbox.',
        }),
        defineField({
            name: 'placeholder',
            title: 'Input Placeholder',
            type: 'string',
            initialValue: 'Enter your work email',
        }),
        defineField({
            name: 'buttonText',
            title: 'Button Text',
            type: 'string',
            initialValue: 'Subscribe',
        }),
        defineField({
            name: 'footerText',
            title: 'Footer Text',
            type: 'string',
            description: 'Small text below form (e.g. Privacy Policy)',
            initialValue: 'We care about your data in our privacy policy.',
        }),
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare({ title }) {
            return {
                title: title || 'Newsletter',
                subtitle: 'Section',
            }
        },
    },
})
