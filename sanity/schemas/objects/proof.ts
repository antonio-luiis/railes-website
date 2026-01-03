import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'proofSection',
    title: 'Proof Results Section',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Main Title',
            type: 'string',
            initialValue: 'Proof is in the results',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3,
            initialValue: "The numbers don't lie. We tackle inefficiency, enhance quality, and deliver solutions tailored to your operations all backed by guaranteed ROI.",
        }),
        defineField({
            name: 'roiText',
            title: 'ROI Text',
            type: 'string',
            initialValue: "The numbers don't lie. We tackle to your operations all backed,",
        }),
        defineField({
            name: 'stats',
            title: 'Statistics Cards',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'value', type: 'string', title: 'Value (e.g. 45%)' },
                        { name: 'label', type: 'text', title: 'Label', rows: 2 },
                    ]
                }
            ],
            validation: (Rule) => Rule.max(3),
        }),
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare({ title }) {
            return {
                title: title || 'Proof Results',
                subtitle: 'Section',
            }
        },
    },
})
