import type { Entry, Asset, UnresolvedLink } from 'contentful';
import type { CatalogItemFieldsSkeleton } from './contentful-types';
import type { CatalogItem } from './models/catalogItem';

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
    price: entry.fields.price,
    imageUrls: entry.fields.images.filter(isAsset).filter(hasFileUrl).map(img => img.fields.file.url),
  };

}
