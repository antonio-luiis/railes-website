import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'customizationSection',
    title: 'Customization & AI Section',
    type: 'object',
    fields: [
        defineField({
            name: 'customizationTitle',
            title: 'Customization Title',
            type: 'string',
            initialValue: 'Customization and Flexibility',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'customizationDescription',
            title: 'Customization Description',
            type: 'text',
            rows: 3,
            initialValue: 'Customization options, ensuring seamless integration with existing systems and adaptation to diverse manufacturing processes.',
        }),
        defineField({
            name: 'customizationImage',
            title: 'Customization Visual Image',
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
            name: 'aiLabel',
            title: 'AI Label',
            type: 'string',
            initialValue: 'Advanced data analytics and AI',
        }),
        defineField({
            name: 'aiTitle',
            title: 'AI Title',
            type: 'string',
            initialValue: 'Advanced Data Analytics and Artificial Intelligence',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'aiDescription',
            title: 'AI Description',
            type: 'text',
            rows: 3,
            initialValue: 'Leveraging advanced data analytics and AI for learning and well-informed decision-making.',
        }),
        defineField({
            name: 'aiImage',
            title: 'AI Interface Image',
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
            title: 'customizationTitle',
        },
        prepare({ title }) {
            return {
                title: title || 'Customization & AI',
                subtitle: 'Section',
            }
        },
    },
})
