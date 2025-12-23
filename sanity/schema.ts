import { type SchemaTypeDefinition } from 'sanity'

import post from './schemas/post'
import hero from './schemas/hero'
import feature from './schemas/feature'
import siteSettings from './schemas/siteSettings'
import featureCard from './schemas/featureCard'
import homepage from './schemas/homepage'
import solutions from './schemas/solutions'
import solutionCard from './schemas/solutionCard'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [post, hero, feature, siteSettings, featureCard, homepage, solutions, solutionCard],
}
