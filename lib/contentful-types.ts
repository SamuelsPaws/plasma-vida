import type { EntryFieldTypes, EntrySkeletonType, Asset } from 'contentful';

export interface CatalogItemFields {
  title: EntryFieldTypes.Text;
  descriptionList: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  price: EntryFieldTypes.Number;
  images: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
}

export interface CustomSerumFields {
  name: EntryFieldTypes.Text;
  description: EntryFieldTypes.Text;
  price: EntryFieldTypes.Number;
}

export interface PromotionFields {
  title: EntryFieldTypes.Text;
  prevPrice: EntryFieldTypes.Number;
  currPrice: EntryFieldTypes.Number;
  images: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
}

export type CatalogItemFieldsSkeleton = EntrySkeletonType<CatalogItemFields, 'item'>
export type CustomHomeoSerumSkeleton = EntrySkeletonType<CustomSerumFields, 'homeoSerum'>
export type CustomVitaSerumSkeleton = EntrySkeletonType<CustomSerumFields, 'vitaSerum'>
export type PromotionSkeleton = EntrySkeletonType<PromotionFields, 'promotions'>
