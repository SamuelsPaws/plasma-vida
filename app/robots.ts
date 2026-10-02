import { MetadataRoute } from 'next'
import { organization } from '@/data/organization'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: organization.urlFor('/sitemap.xml'),
  }
}
