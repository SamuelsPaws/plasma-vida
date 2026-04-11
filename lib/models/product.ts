import { ProductCategory } from "@/types/types";

interface ItemComponentsCategory {
  title: string;
  components: string[];
}

export interface Product {
  title: string;
  tags: string[];
  description: string;
  longDescription: string;
  componentsRefs: ItemComponentsCategory[];
  descriptionList: string[];
  idealFor: string[];
  price: number;
  noPromotionPrice: number | undefined;
  imageUrls: string[];
  slug: string;
  category: ProductCategory;
}