import { contentful } from './contentful';
import { mapProduct, mapNursingService } from './contentful-mappers';
import { ProductSkeleton, NursingServiceSkeleton } from './contentful-types';

export async function getProducts() {
  const entries = await contentful.getEntries<ProductSkeleton>({
    content_type: 'product'
  });
  return entries.items.map(mapProduct);
}

export async function getProductBySlug(slug: string) {
  const entries = await contentful.getEntries<ProductSkeleton>({
    content_type: 'product',
    'fields.slug': slug
  });
  return entries.items.map(mapProduct)[0];
}

export async function getNursingServices() {
  const entries = await contentful.getEntries<NursingServiceSkeleton>({
    content_type: 'nursingService'
  });
  return entries.items.map(mapNursingService);
}

export async function getNursingServiceBySlug(slug: string) {
  const entries = await contentful.getEntries<NursingServiceSkeleton>({
    content_type: 'nursingService',
    'fields.slug': slug
  });
  return entries.items.map(mapNursingService)[0];
}