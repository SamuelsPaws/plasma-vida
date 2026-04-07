import { CatalogItemCategory } from "@/types/types";

interface ItemComponentsCategory {
  title: string;
  components: string[];
}

export interface CatalogItem {
  title: string;
  tags: string[];
  description: string;
  longDescription: string;
  componentsRefs: ItemComponentsCategory[];
  descriptionList: string[];
  price: number;
  noPromotionPrice: number | undefined;
  imageUrls: string[];
  slug: string;
  category: CatalogItemCategory;
}