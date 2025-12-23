import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    // Singleton - only one document allowed
    fields: [
        defineField({
            name: 'siteTitle',
            title: 'Site Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'siteDescription',
            title: 'Site Description',
            type: 'text',
            rows: 3,
            description: 'Used for SEO meta description',
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'navigationItems',
            title: 'Navigation Menu Items',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'label',
                            title: 'Label',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: 'url',
                            title: 'URL',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        },
                    ],
                    preview: {
                        select: {
                            title: 'label',
                            subtitle: 'url',
                        },
                    },
                },
            ],
        }),
        defineField({
            name: 'footerText',
            title: 'Footer Text',
            type: 'text',
            rows: 2,
        }),
        defineField({
            name: 'socialLinks',
            title: 'Social Media Links',
            type: 'object',
            fields: [
                {
                    name: 'linkedin',
                    title: 'LinkedIn',
                    type: 'url',
                },
                {
                    name: 'twitter',
                    title: 'Twitter',
                    type: 'url',
                },
                {
                    name: 'facebook',
                    title: 'Facebook',
                    type: 'url',
                },
                {
                    name: 'instagram',
                    title: 'Instagram',
                    type: 'url',
                },
            ],
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'Site Settings',
            }
        },
    },
})
