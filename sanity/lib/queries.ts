import { groq } from 'next-sanity'

// Query for Homepage
export const homepageQuery = groq`*[_type == "homepage"][0] {
  title,
  hero {
    title,
    highlightedWords,
    description,
    heroImage {
      asset->{
        _id,
        url
      },
      alt
    },
    videoUrl
  },
  featureBlocks[] {
    title,
    description,
    backgroundColor,
    mockupImage {
      asset->{
        _id,
        url
      },
      alt
    }
  },
  featuresGrid[] {
    title,
    subtitle,
    description,
    highlightedText,
    mockupImage {
      asset->{
        _id,
        url
      },
      alt
    },
    badge,
    bottomText
  },
  complianceSection {
    complianceTitle,
    complianceDescription,
    complianceImage {
      asset->{
        _id,
        url
      },
      alt
    },
    qualityTitle,
    qualityDescription,
    qualityImage {
      asset->{
        _id,
        url
      },
      alt
    }
  },
  customizationSection {
    customizationTitle,
    customizationDescription,
    customizationImage {
      asset->{
        _id,
        url
      },
      alt
    },
    aiLabel,
    aiTitle,
    aiDescription,
    aiImage {
      asset->{
        _id,
        url
      },
      alt
    }
  },
  industrySection {
    title,
    industries,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    visibilityTitle,
    visibilityDescription,
    executionTitle,
    executionDescription,
    executionImage {
      asset->{
        _id,
        url
      },
      alt
    },
    qualityTitle,
    qualityDescription,
    improvementTitle,
    improvementDescription
  },
  proofSection {
    title,
    description,
    roiText,
    stats[] {
      value,
      label
    }
  },
  testimonialsSection {
    title,
    description,
    testimonials[] {
      text,
      name,
      role,
      image {
        asset->{
          _id,
          url
        },
        alt
      }
    }
  },
  ctaSection {
    badgeText,
    title,
    highlightedTitle,
    titleSuffix,
    description,
    primaryButtonText,
    primaryButtonLink,
    secondaryButtonText,
    secondaryButtonLink
  },
  newsletterSection {
    title,
    description,
    placeholder,
    buttonText,
    footerText
  },
  solutions {
    title,
    industries,
    cards[] {
      title,
      description,
      type,
      listItems,
      image {
        asset->{
          _id,
          url
        },
        alt
      }
    }
  }
}`

// Query for Site Settings
export const siteSettingsQuery = groq`*[_type == "siteSettings"][0] {
  _id,
  siteTitle,
  siteDescription,
  logo {
    asset->{
      _id,
      url
    }
  },
  navigationItems[] {
    label,
    url
  },
  footerText,
  socialLinks
}`
