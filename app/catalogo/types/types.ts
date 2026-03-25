export type CategoryParam = string | string[] | undefined | null;

export interface Filters {
    category: CategoryParam;
    price: [number, number];
    ascendingPrice: boolean | null;
}