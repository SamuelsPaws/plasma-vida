'use client'
import { CatalogItem } from "@/lib/models/catalogItem";
import { ChangeEvent, SetStateAction, useEffect, useMemo, useState } from "react";
import CatalogItemCard from "./CatalogItemCard";
import TableCategoryFilter from "./TableCategoryFilter";
import { CategoryParam, Filters } from "../types/types";
import TablePriceSortFilter from "./TablePriceSortFilter";

type SortingFn = (a: CatalogItem, b: CatalogItem) => number;

interface CatalogItemsContainerProps {
    items: CatalogItem[];
    categoryParam: CategoryParam;
}

const sortingFns = {
    ascendingPriceFn: (a: CatalogItem, b: CatalogItem) => {
        return a.price - b.price;
    },
    descendingPriceFn: (a: CatalogItem, b: CatalogItem) => {
        return b.price - a.price;
    },
    noSortingFn: (a: CatalogItem, b:CatalogItem) => {
        return 1;
    }
} as const;

type SortingFnsKey = keyof typeof sortingFns;

const PRICE_CAP = 99999999;

const CatalogContainer = ({ items, categoryParam }: CatalogItemsContainerProps) => {
    const [filters, setFilters] = useState<Filters>({
        category: categoryParam,
        price: [0, PRICE_CAP],
        ascendingPrice: null
    });
    const [fromPriceValue, setFromPriceValue] = useState<string>('');
    const [toPriceValue, setToPriceValue] = useState<string>('');
    const [sortingKey, setSortingKey] = useState<SortingFnsKey>('ascendingPriceFn');

    const checkFilters = (el: CatalogItem, fil: Filters): boolean => {
        const conditions = [
            fil.category ? el.category === fil.category : true,
            el.price >= Math.min(...fil.price) && el.price <= Math.max(...fil.price)
        ];

        return conditions.every(el => el === true);
    }

    const filteredItems = useMemo(() => {
        return items.filter(el => checkFilters(el, filters));
    }, [items, filters]);

    const handlePriceOnChange = (
        e: ChangeEvent<HTMLInputElement>,
        setter: React.Dispatch<SetStateAction<string>>
    ) => {
        const strippedComma = e.target.value.split(',')[0];
        const strippedDot = e.target.value.split('.')[0]

        setter(strippedDot);
    }

    const handleApplyPriceClick = () => {
        const translatedFromValue = Number(fromPriceValue + '00');
        const translatedToValue = Number(toPriceValue + '00');

        if (translatedFromValue && translatedToValue) {
            setFilters({ ...filters, price: [translatedFromValue, translatedToValue] });
        }
    }

    useEffect(() => {
        if (filters.ascendingPrice === true) {
            setSortingKey('ascendingPriceFn');
        } else if (filters.ascendingPrice === false) {
            setSortingKey('descendingPriceFn');
        } else {
            setSortingKey('noSortingFn');
        }
    }, [filters.ascendingPrice]);

  return (
    <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Left div with items */}
        <div className="
            w-full lg:w-[75%] lg:min-w-[1000px] lg:pr-4
            flex flex-col lg:grid grid-cols-3 gap-6 lg:gap-8"
        >
            {filteredItems.sort(sortingFns[sortingKey]).map((item, index) =>
                <CatalogItemCard
                    key={index}
                    title={item.title}
                    descriptionList={item.descriptionList}
                    price={item.price}
                    imgUrl={item.imageUrls[0]}
                    slug={item.slug}
                />
            )}
        </div>
        {/* Right div with table */}
        <div className="
            flex-1 lg:min-w-[260px] px-6 py-3 relative
            hidden lg:block
            bg-white-1 rounded-2xl"
        >
            {/* Stiky table content container */}
            <div className="
                w-full py-3
                sticky top-mob-header-height lg:top-header-height
                flex flex-col items-start gap-2"
            >
                <p className="mb-2 font-bold text-2xl">Filtros</p>
                <TableCategoryFilter
                    filters={filters}
                    setFilters={setFilters}
                    text="Sueros"
                    category="suero"
                />
                <TableCategoryFilter
                    filters={filters}
                    setFilters={setFilters}
                    text="Plasmas"
                    category="plasma"
                />
                <p className="mt-8 mb-2 text-lg text-gray-600">Filtrar por precio</p>
                {/* Price input container */}
                <div className="grid grid-cols-[80px_1fr] gap-y-2 text-teal-600 text-md">
                    <div className="grid items-center">Desde:</div>
                    <div>
                        <span>$</span>
                        <input
                            onChange={e => handlePriceOnChange(e, setFromPriceValue)}
                            type="number"
                            className="w-24 ml-1 px-2 py-1 border border-teal-600 rounded-md focus:outline-none"
                        />
                    </div>
                    <div className="grid items-center">Hasta:</div>
                    <div>
                        <span>$</span>
                        <input
                            onChange={e => handlePriceOnChange(e, setToPriceValue)}
                            type="number"
                            className="w-24 ml-1 px-2 py-1 border border-teal-600 rounded-md focus:outline-none"
                        />
                    </div>
                </div>
                <button
                    onClick={handleApplyPriceClick}
                    className="
                        mt-2 mb-4 px-3 py-1
                        text-md text-white-1
                        bg-teal-600 rounded-md"
                >
                    Aplicar
                </button>
                <TablePriceSortFilter
                    filters={filters}
                    setFilters={setFilters}
                    text="Precio más bajo primero"
                    ascendingPriceValue={true}
                />
                <TablePriceSortFilter
                    filters={filters}
                    setFilters={setFilters}
                    text="Precio más alto primero"
                    ascendingPriceValue={false}
                />
            </div>
        </div>
    </div>
  )
}

export default CatalogContainer