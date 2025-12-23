import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'homepage',
    title: 'Homepage',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Page Title',
            type: 'string',
            description: 'Internal title for this page (e.g. "Home")',
            initialValue: 'Home',
            readOnly: true,
        }),
        defineField({
            name: 'hero',
            title: 'Hero Section',
            type: 'hero',
            description: 'The main hero section at the top of the page',
            options: {
                collapsible: true,
                collapsed: false,
            }
        }),
        defineField({
            name: 'featureBlocks',
            title: 'Feature Blocks',
            type: 'array',
            description: 'List of feature blocks (blue cards)',
            of: [{ type: 'featureBlock' }],
        }),
        defineField({
            name: 'featuresGrid',
            title: 'Features Grid',
            type: 'array',
            description: 'Grid of 4 feature cards',
            of: [{ type: 'featureCard' }],
            validation: (Rule) => Rule.max(4).warning('Best design supports up to 4 cards'),
        }),
        defineField({
            name: 'solutions',
            title: 'Solutions Section',
            type: 'solutions',
            options: {
                collapsible: true,
                collapsed: true,
            }
        }),
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare() {
            return {
                title: 'Homepage',
                subtitle: 'Main Website Page',
            }
        },
    },
})
