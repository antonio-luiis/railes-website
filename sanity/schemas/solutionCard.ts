import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'solutionCard',
    title: 'Solution Card',
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
            rows: 3,
        }),
        defineField({
            name: 'type',
            title: 'Content Type',
            type: 'string',
            options: {
                list: [
                    { title: 'List of Items', value: 'list' },
                    { title: 'Image/Diagram', value: 'image' },
                ],
                layout: 'radio',
            },
            initialValue: 'list',
        }),
        defineField({
            name: 'listItems',
            title: 'List Items',
            type: 'array',
            of: [{ type: 'string' }],
            hidden: ({ parent }) => parent?.type === 'image',
            description: 'Items to display in the grid (e.g., Work Orders, Operators)',
        }),
        defineField({
            name: 'image',
            title: 'Image/Diagram',
            type: 'image',
            options: { hotspot: true },
            hidden: ({ parent }) => parent?.type === 'list',
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                }
            ]
        }),
    ],
})
