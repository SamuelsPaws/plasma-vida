import { CatalogItemCategory } from "@/types/types";

export interface CatalogItem {
  title: string;
  tags: string[];
  description: string;
  longDescription: string;
  components: string[];
  descriptionList: string[];
  price: number;
  noPromotionPrice: number | undefined;
  imageUrls: string[];
  slug: string;
  category: CatalogItemCategory;
}