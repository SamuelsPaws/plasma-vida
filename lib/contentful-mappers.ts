import type { Entry, Asset, UnresolvedLink } from 'contentful';
import type { ProductSkeleton, ItemComponentsCategorySkeleton, NursingServiceSkeleton } from './contentful-types';
import type { Product } from './models/product';
import { NursingService } from './models/nursingService';
import productCategoryMapper from '@/app/utils/productCategoryMapper';

function isAsset(
  item: UnresolvedLink<'Asset'> | Asset<undefined, 'en-US'>
): item is Asset<undefined, 'en-US'> {
  return item.sys.type === 'Asset';
}

function isEntry(
  item: UnresolvedLink<'Entry'> | Entry<ItemComponentsCategorySkeleton, undefined, "en-US">
): item is Entry<ItemComponentsCategorySkeleton, undefined, "en-US"> {
  return item.sys.type === 'Entry';
}

function hasFileUrl(
  asset: Asset<undefined, 'en-US'>
): asset is Asset<undefined, 'en-US'> & {
  fields: {
    file: {
      url: string;
    };
  };
} {
  return typeof asset.fields.file?.url === 'string';
}

export function mapProduct(
  entry: Entry<ProductSkeleton, undefined, 'en-US'>
): Product {
  return {
    title: entry.fields.title,
    tags: entry.fields.tags,
    description: entry.fields.description,
    longDescription: entry.fields.longDescription,
    componentsRefs: entry.fields.componentsRefs.filter(isEntry).map(ref => ref.fields),
    descriptionList: entry.fields.descriptionList,
    idealFor: entry.fields.idealFor,
    price: entry.fields.price,
    noPromotionPrice: entry.fields.noPromotionPrice,
    imageUrls: entry.fields.images.filter(isAsset).filter(hasFileUrl).map(img => `https:${img.fields.file.url}`),
    slug: entry.fields.slug,
    category: productCategoryMapper(entry.fields.category)
  };

}

export function mapNursingService(
  entry: Entry<NursingServiceSkeleton, undefined, 'en-US'>
): NursingService {

  return {
    title: entry.fields.title,
    description: entry.fields.description,
    benefitsList: entry.fields.benefitsList,
    slug: entry.fields.slug,
  };

}