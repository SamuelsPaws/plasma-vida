import type { Entry, Asset, UnresolvedLink } from 'contentful';
import type { CatalogItemFieldsSkeleton, CustomHomeoSerumSkeleton, CustomVitaSerumSkeleton, NursingServiceSkeleton, PromotionSkeleton } from './contentful-types';
import type { CatalogItem } from './models/catalogItem';
import type { CustomSerum } from './models/customSerum';
import { Promotion } from './models/promotion';
import { NursingService } from './models/nursingService';

function isAsset(
  item: UnresolvedLink<'Asset'> | Asset<undefined, 'en-US'>
): item is Asset<undefined, 'en-US'> {
  return item.sys.type === 'Asset';
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

export function mapCatalogItem(
  entry: Entry<CatalogItemFieldsSkeleton, undefined, 'en-US'>
): CatalogItem {
  return {
    title: entry.fields.title,
    description: entry.fields.description,
    descriptionList: entry.fields.descriptionList,
    price: entry.fields.price,
    noPromotionPrice: entry.fields.noPromotionPrice,
    imageUrls: entry.fields.images.filter(isAsset).filter(hasFileUrl).map(img => img.fields.file.url),
    slug: entry.fields.slug,
    category: entry.fields.category
  };

}

export function mapCustomHomeoSerum(
  entry: Entry<CustomHomeoSerumSkeleton, undefined, 'en-US'>
): CustomSerum {

  return {
    name: entry.fields.name,
    description: entry.fields.description,
    price: entry.fields.price,
    slug: entry.fields.slug,
    benefitsList: entry.fields.benefitsList,
  };

}

export function mapCustomVitaSerum(
  entry: Entry<CustomVitaSerumSkeleton, undefined, 'en-US'>
): CustomSerum {

  return {
    name: entry.fields.name,
    description: entry.fields.description,
    price: entry.fields.price,
    slug: entry.fields.slug,
    benefitsList: entry.fields.benefitsList,
  };

}

export function mapPromotions(
  entry: Entry<PromotionSkeleton, undefined, 'en-US'>
): Promotion {

  return {
    title: entry.fields.title,
    prevPrice: entry.fields.prevPrice,
    currPrice: entry.fields.currPrice,
    imageUrls: entry.fields.images.filter(isAsset).filter(hasFileUrl).map(img => img.fields.file.url),
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