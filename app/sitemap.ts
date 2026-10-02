import { getNursingServices, getProducts } from '@/lib/contentful-queries'
import { NursingService } from '@/lib/models/nursingService'
import { Product } from '@/lib/models/product'
import { MetadataRoute } from 'next'
import { organization } from '@/data/organization'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = [
    '',
    '/catalogo',
    '/servicios-de-enfermeria',
    '/quienes-somos',
  ].map(path => ({
    url: organization.urlFor(path),
    lastModified: new Date(),
  }))

    const products = await getProducts()
    const nursingServices = await getNursingServices()

    const dynamicProductPages = products.map((el: Product) => {
        const isCatalog = el.category === 'plasmaCatalogo' || el.category === 'sueroCatalogo'
        const subUrl = isCatalog ? 'catalogo' : 'sueros-personalizados/homeopaticos'

        return {
            url: organization.urlFor(`/${subUrl}/${el.slug}`),
            lastModified: new Date(),
        }
    })

    const dynamicNursingPages = nursingServices.map((el: NursingService) => (
        {
            url: organization.urlFor(`/servicios-de-enfermeria/${el.slug}`),
            lastModified: new Date()
        }
    ))

  return [...staticPages, ...dynamicProductPages, ...dynamicNursingPages]
}
