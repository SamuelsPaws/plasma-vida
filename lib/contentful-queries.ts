import { contentful } from './contentful';
import { mapCatalogItem } from './contentful-mappers';
import { CatalogItemFieldsSkeleton } from './contentful-types';

export async function getCatalogItemEntry(id: string) {
  const entry = await contentful.getEntry<CatalogItemFieldsSkeleton>(id);
  return entry;
}

export async function getCatalogItems() {
  const entries = await contentful.getEntries<CatalogItemFieldsSkeleton>();
  return entries.items.map(mapCatalogItem);
}