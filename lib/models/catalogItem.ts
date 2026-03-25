import { CatalogItemCategory } from "@/types/types";

export interface CatalogItem {
  title: string;
  descriptionList: string[];
  price: number;
  imageUrls: string[];
  slug: string;
  category: CatalogItemCategory;
}