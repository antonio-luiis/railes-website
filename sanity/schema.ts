import { type SchemaTypeDefinition } from 'sanity'

import post from './schemas/post'
import hero from './schemas/hero'
import feature from './schemas/feature'
import siteSettings from './schemas/siteSettings'
import featureCard from './schemas/featureCard'
import homepage from './schemas/homepage'
import solutions from './schemas/solutions'
import solutionCard from './schemas/solutionCard'

import compliance from './schemas/objects/compliance'
import customization from './schemas/objects/customization'
import industry from './schemas/objects/industry'
import proof from './schemas/objects/proof'
import testimonials from './schemas/objects/testimonials'
import cta from './schemas/objects/cta'
import newsletter from './schemas/objects/newsletter'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        post,
        hero,
        feature,
        siteSettings,
        featureCard,
        homepage,
        solutions,
        solutionCard,
        compliance,
        customization,
        industry,
        proof,
        testimonials,
        cta,
        newsletter
    ],
}
