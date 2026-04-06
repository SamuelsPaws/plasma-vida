import { CatalogItemCategory } from "@/types/types";

export interface CatalogItem {
  title: string;
  description: string;
  descriptionList: string[];
  price: number;
  noPromotionPrice: number | undefined;
  imageUrls: string[];
  slug: string;
  category: CatalogItemCategory;
}