import { StructureBuilder } from 'sanity/structure'

// Helper to define the structure
export const myStructure = (S: StructureBuilder) =>
    S.list()
        .title('Content')
        .items([
            // Singleton: Homepage
            S.listItem()
                .title('Homepage')
                .child(
                    S.document()
                        .schemaType('homepage')
                        .documentId('homepage')
                        .title('Homepage')
                ),

            // Singleton: Site Settings
            S.listItem()
                .title('Site Settings')
                .child(
                    S.document()
                        .schemaType('siteSettings')
                        .documentId('siteSettings')
                        .title('Site Settings')
                ),

            S.divider(),

            // Regular Document: Blog Posts
            S.documentTypeListItem('post').title('Blog Posts'),

            // Filter out the singletons and object types from the list of other documents
            ...S.documentTypeListItems().filter(
                (listItem) =>
                    !['homepage', 'siteSettings', 'post', 'hero', 'featureBlock', 'featureCard', 'media.tag'].includes(listItem.getId() || '')
            ),
        ])
