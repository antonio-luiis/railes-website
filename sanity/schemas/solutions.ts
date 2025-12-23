import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'solutions',
    title: 'Solutions Section',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Section Title',
            type: 'string',
            initialValue: 'Your Industry solutions',
        }),
        defineField({
            name: 'industries',
            title: 'Industry Tags',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'List of industries to display as pills (e.g., Pharmaceuticals, Automotive)',
        }),
        defineField({
            name: 'cards',
            title: 'Solution Cards',
            type: 'array',
            of: [{ type: 'solutionCard' }],
        }),
    ],
})
