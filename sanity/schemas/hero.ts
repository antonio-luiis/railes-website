import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'hero', // Keeping name as it's a named type, even if it's an object type
    title: 'Hero Section',
    type: 'object', // Changed from 'document' to 'object'
    fields: [
        defineField({
            name: 'title',
            title: 'Main Title',
            type: 'string',
            description: 'The main headline of the hero section', // Updated description
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'highlightedWords',
            title: 'Highlighted Words',
            type: 'array',
            description: 'Words in the title that should have the gradient effect', // Updated description
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'The subheadline or description text', // Added description and removed rows
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'heroImage',
            title: 'Hero Image',
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
        defineField({
            name: 'videoUrl',
            title: 'Video URL', // Updated title
            type: 'url',
            description: 'Optional video URL to display instead of the image', // Updated description
        }),
    ],
})
