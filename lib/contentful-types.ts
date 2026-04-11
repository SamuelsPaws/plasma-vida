import type { EntryFieldTypes, EntrySkeletonType } from 'contentful';
import type { ProductCategory } from '@/types/types';

interface ItemComponentsCategoryFields {
  title: EntryFieldTypes.Text;
  components: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
}

export type ItemComponentsCategorySkeleton = EntrySkeletonType<ItemComponentsCategoryFields, 'componentCategory'>

export interface ProductFields {
  title: EntryFieldTypes.Text;
  tags: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  description: EntryFieldTypes.Text;
  longDescription: EntryFieldTypes.Text;
  descriptionList: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  idealFor: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  componentsRefs: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<ItemComponentsCategorySkeleton>>;
  price: EntryFieldTypes.Number;
  noPromotionPrice?: EntryFieldTypes.Number;
  images: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
  slug: EntryFieldTypes.Text;
  category: EntryFieldTypes.Symbol<ProductCategory>;
}

export interface NursingServiceFields {
  title: EntryFieldTypes.Text;
  description: EntryFieldTypes.Text;
  benefitsList: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  slug: EntryFieldTypes.Text;
}

export type ProductSkeleton = EntrySkeletonType<ProductFields, 'product'>
export type NursingServiceSkeleton = EntrySkeletonType<NursingServiceFields, 'nursingService'>
