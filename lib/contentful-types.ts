import type { EntryFieldTypes, EntrySkeletonType } from 'contentful';
import type { CatalogItemCategory } from '@/types/types';

interface ItemComponentsCategoryFields {
  title: EntryFieldTypes.Text;
  components: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
}

export type ItemComponentsCategorySkeleton = EntrySkeletonType<ItemComponentsCategoryFields, 'componentCategory'>

export interface CatalogItemFields {
  title: EntryFieldTypes.Text;
  tags: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  description: EntryFieldTypes.Text;
  longDescription: EntryFieldTypes.Text;
  descriptionList: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  componentsRefs: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<ItemComponentsCategorySkeleton>>;
  price: EntryFieldTypes.Number;
  noPromotionPrice?: EntryFieldTypes.Number;
  images: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
  slug: EntryFieldTypes.Text;
  category: EntryFieldTypes.Symbol<CatalogItemCategory>;
}

export interface CustomSerumFields {
  name: EntryFieldTypes.Text;
  description: EntryFieldTypes.Text;
  images: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
  price: EntryFieldTypes.Number;
  slug: EntryFieldTypes.Text;
  benefitsList: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
}

export interface PromotionFields {
  title: EntryFieldTypes.Text;
  prevPrice: EntryFieldTypes.Number;
  currPrice: EntryFieldTypes.Number;
  images: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
}

export interface NursingServiceFields {
  title: EntryFieldTypes.Text;
  description: EntryFieldTypes.Text;
  benefitsList: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  slug: EntryFieldTypes.Text;
}

export type CatalogItemFieldsSkeleton = EntrySkeletonType<CatalogItemFields, 'item'>
export type CustomHomeoSerumSkeleton = EntrySkeletonType<CustomSerumFields, 'homeoSerum'>
export type CustomVitaSerumSkeleton = EntrySkeletonType<CustomSerumFields, 'vitaSerum'>
export type PromotionSkeleton = EntrySkeletonType<PromotionFields, 'promotions'>
export type NursingServiceSkeleton = EntrySkeletonType<NursingServiceFields, 'nursingService'>
