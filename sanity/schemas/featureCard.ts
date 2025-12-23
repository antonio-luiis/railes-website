import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'featureCard',
    title: 'Feature Card',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'Main title of the feature card',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
            description: 'Subtitle text (appears below title)',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Feature description',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'highlightedText',
            title: 'Highlighted Text',
            type: 'string',
            description: 'Text to highlight in bold within the description (optional)',
        }),
        defineField({
            name: 'mockupImage',
            title: 'Mockup/Illustration Image',
            type: 'image',
            description: 'Image for the feature card mockup/illustration',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                    description: 'Important for SEO and accessibility',
                },
            ],
        }),
        defineField({
            name: 'badge',
            title: 'Badge Text',
            type: 'string',
            description: 'Optional badge text (e.g., "⭐ Advanced data analytics and AI")',
        }),
        defineField({
            name: 'bottomText',
            title: 'Bottom Text',
            type: 'string',
            description: 'Optional text to display at the bottom of the card',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'subtitle',
            media: 'mockupImage',
        },
        prepare(selection) {
            const { title, subtitle } = selection
            return {
                title: title,
                subtitle: subtitle,
            }
        },
    },
})
