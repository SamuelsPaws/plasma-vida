import { contentful } from './contentful';
import { mapCatalogItem, mapCustomHomeoSerum, mapCustomVitaSerum, mapNursingService, mapPromotions } from './contentful-mappers';
import { CatalogItemFieldsSkeleton, CustomHomeoSerumSkeleton, CustomVitaSerumSkeleton, NursingServiceSkeleton, PromotionSkeleton } from './contentful-types';

export async function getCatalogItemEntry(id: string) {
  const entry = await contentful.getEntry<CatalogItemFieldsSkeleton>(id);
  return entry;
}

export async function getCatalogItemBySlug(slug: string) {
  const entries = await contentful.getEntries<CatalogItemFieldsSkeleton>({
    content_type: 'item',
    'fields.slug': slug
  });
  return entries.items.map(mapCatalogItem)[0];
}

export async function getCustomHomeoSerumFromSlug(slug: string) {
  const entries = await contentful.getEntries<CustomHomeoSerumSkeleton>({
    content_type: 'homeoSerum',
    'fields.slug': slug
  });
  return entries.items.map(mapCustomHomeoSerum)[0];
}

export async function getCustomVitaSerumFromSlug(slug: string) {
  const entries = await contentful.getEntries<CustomVitaSerumSkeleton>({
    content_type: 'vitaSerum',
    'fields.slug': slug
  });
  return entries.items.map(mapCustomVitaSerum)[0];
}

export async function getCatalogItems() {
  const entries = await contentful.getEntries<CatalogItemFieldsSkeleton>({
    content_type: 'item'
  });
  return entries.items.map(mapCatalogItem);
}

export async function getCustomHomeoSerums() {
  const entries = await contentful.getEntries<CustomHomeoSerumSkeleton>({
    content_type: 'homeoSerum'
  });
  return entries.items.map(mapCustomHomeoSerum);
}

export async function getCustomVitaSerums() {
  const entries = await contentful.getEntries<CustomVitaSerumSkeleton>({
    content_type: 'vitaSerum'
  });
  return entries.items.map(mapCustomVitaSerum);
}

export async function getPromotions() {
  const entries = await contentful.getEntries<PromotionSkeleton>({
    content_type: 'promotions'
  });
  return entries.items.map(mapPromotions);
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