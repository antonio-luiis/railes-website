import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'featureBlock',
    title: 'Feature Block',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'backgroundColor',
            title: 'Background Color',
            type: 'string',
            description: 'Hex color code (e.g. #1e3a8a)',
            initialValue: '#1e3a8a',
        }),
        defineField({
            name: 'mockupImage',
            title: 'Mockup/Dashboard Image',
            type: 'image',
            options: {
                hotspot: true,
            },
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
            title: 'title',
            subtitle: 'description',
            media: 'mockupImage',
        },
    },
})
