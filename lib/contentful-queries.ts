import { contentful } from './contentful';
import { mapCatalogItem, mapCustomHomeoSerum, mapCustomVitaSerum } from './contentful-mappers';
import { CatalogItemFieldsSkeleton, CustomHomeoSerumSkeleton, CustomVitaSerumSkeleton } from './contentful-types';

export async function getCatalogItemEntry(id: string) {
  const entry = await contentful.getEntry<CatalogItemFieldsSkeleton>(id);
  return entry;
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