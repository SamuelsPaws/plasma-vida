import type { EntryFieldTypes, EntrySkeletonType } from 'contentful';

export interface CatalogItemFields {
  title: EntryFieldTypes.Text;
  description: EntryFieldTypes.Text;
  price: EntryFieldTypes.Number;
  images: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
}

export type CatalogItemFieldsSkeleton = EntrySkeletonType<CatalogItemFields, 'catalogItem'>
