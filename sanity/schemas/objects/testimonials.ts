import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'testimonialsSection',
    title: 'Testimonials Section',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Section Title',
            type: 'string',
            initialValue: 'Words of praise from others',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 2,
            initialValue: 'Railes MES allows you to monitor your production in real time, manage processes, optimize operations',
        }),
        defineField({
            name: 'testimonials',
            title: 'Testimonials List',
            type: 'array',
            of: [
                {
                    type: 'object',
                    title: 'Testimonial',
                    fields: [
                        { name: 'text', type: 'text', title: 'Quote Text', rows: 3 },
                        { name: 'name', type: 'string', title: 'Author Name' },
                        { name: 'role', type: 'string', title: 'Author Role' },
                        {
                            name: 'image',
                            type: 'image',
                            title: 'Author Image',
                            options: { hotspot: true },
                            fields: [{ name: 'alt', type: 'string', title: 'Alt Text' }]
                        },
                    ]
                }
            ],
        }),
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare({ title }) {
            return {
                title: title || 'Testimonials',
                subtitle: 'Section',
            }
        },
    },
})
