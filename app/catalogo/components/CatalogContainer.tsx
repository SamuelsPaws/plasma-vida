'use client'
import { Product } from "@/lib/models/product";
import { ChangeEvent, SetStateAction, useEffect, useMemo, useRef, useState } from "react";
import ProductCard from "./ProductCard";
import TableCategoryFilter from "./TableCategoryFilter";
import { CategoryParam, Filters } from "../types/types";
import TablePriceSortFilter from "./TablePriceSortFilter";
import clsx from "clsx";

interface ProductsContainerProps {
    items: Product[];
    categoryParam: CategoryParam;
}

const sortingFns = {
    ascendingPriceFn: (a: Product, b: Product) => {
        return a.price - b.price;
    },
    descendingPriceFn: (a: Product, b: Product) => {
        return b.price - a.price;
    },
    noSortingFn: (a: Product, b:Product) => {
        return 1;
    }
} as const;

type SortingFnsKey = keyof typeof sortingFns;

const PRICE_CAP = 99999999;

const CatalogContainer = ({ items, categoryParam }: ProductsContainerProps) => {
    const [filters, setFilters] = useState<Filters>({
        category: categoryParam,
        price: [0, PRICE_CAP],
        ascendingPrice: null
    });
    const [fromPriceValue, setFromPriceValue] = useState<string>('');
    const [toPriceValue, setToPriceValue] = useState<string>('');
    const [sortingKey, setSortingKey] = useState<SortingFnsKey>('ascendingPriceFn');
    const [isPriceRangeApplied, setIsPriceRangeApplied] = useState<boolean>(false);
    const fromInputRef = useRef<HTMLInputElement | null>(null);
    const fromInputMobRef = useRef<HTMLInputElement | null>(null);
    const toInputRef = useRef<HTMLInputElement | null>(null);
    const toInputMobRef = useRef<HTMLInputElement | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const modalRef = useRef<HTMLDialogElement | null>(null)

    const checkFilters = (el: Product, fil: Filters): boolean => {
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
        const strippedDot = strippedComma.split('.')[0]

        setter(strippedDot);
    }

    const handleApplyPriceClick = () => {
        const translatedFromValue = fromPriceValue.length ? Number(fromPriceValue + '00') : NaN;
        const translatedToValue = toPriceValue.length ? Number(toPriceValue + '00') : NaN;

        if (!Number.isNaN(translatedFromValue) && !Number.isNaN(translatedToValue)) {
            setFilters({ ...filters, price: [translatedFromValue, translatedToValue] });
            setIsPriceRangeApplied(true);
        }
    }

    const handleClearPriceClick = () => {
        setFilters({ ...filters, price: [0, PRICE_CAP] });

        if (fromInputRef.current && toInputRef.current) {
            fromInputRef.current.value = '';
            toInputRef.current.value = '';
        }
        
        if (fromInputMobRef.current && toInputMobRef.current) {
            fromInputMobRef.current.value = '';
            toInputMobRef.current.value = '';
        }

        setFromPriceValue('');
        setToPriceValue('');
        setIsPriceRangeApplied(false);
    }

    const handleMobApplyFiltersClick = () => {
        const translatedFromValue = fromPriceValue.length ? Number(fromPriceValue + '00') : NaN;
        const translatedToValue = toPriceValue.length ? Number(toPriceValue + '00') : NaN;

        if (!Number.isNaN(translatedFromValue) && !Number.isNaN(translatedToValue)) {
            setFilters({ ...filters, price: [translatedFromValue, translatedToValue] });
            setIsPriceRangeApplied(true);
            if (fromInputRef.current) {
                fromInputRef.current.value = fromPriceValue;
            }
            if (toInputRef.current) {
                toInputRef.current.value = toPriceValue;
            }
        }

        setIsModalOpen(false);
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

    useEffect(() => {
        if (isModalOpen) {
            modalRef.current?.showModal();
            if (fromInputMobRef.current) {
                fromInputMobRef.current.value = fromPriceValue;
            }
            if (toInputMobRef.current) {
                toInputMobRef.current.value = toPriceValue;
            }
        } else {
            modalRef.current?.close();
        }
    }, [isModalOpen]);

  return (
    <div className="w-full flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
        <button
            onClick={() => setIsModalOpen(true)}
            className="lg:hidden text-lg text-gray-600"
        >
            <i className="fa fa-sliders mr-2"></i>
            Filtros
        </button>
        {isModalOpen &&
            <dialog
                ref={modalRef}
                className="
                    fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
                    w-full p-6
                    flex flex-col items-start gap-2
                    rounded-2xl shadow-sm"
            >
                <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-3 right-3 w-8 aspect-square text-xl text-black"
                >
                    <i className="fa fa-times"></i>
                </button>
                <p className="text-lg font-semibold">Filtros</p>
                <TableCategoryFilter
                    filters={filters}
                    setFilters={setFilters}
                    text="Sueros"
                    category="sueroCatalogo"
                />
                <TableCategoryFilter
                    filters={filters}
                    setFilters={setFilters}
                    text="Plasmas"
                    category="plasmaCatalogo"
                />
                <p className="mt-4 mb-2 text-md text-gray-600">Filtrar por precio</p>
                {/* Price input container */}
                <div className="
                    mb-4
                    grid grid-cols-[0.8fr_1fr_1fr] gap-y-2
                    text-teal-600 text-md"
                >
                    <div className="flex items-center">Desde:</div>
                    {/* Div for grid slot with From input */}
                    <div className="flex items-center">
                        <span>$</span>
                        <input
                            onChange={e => handlePriceOnChange(e, setFromPriceValue)}
                            type="number"
                            ref={fromInputMobRef}
                            className={clsx(
                                "w-24 ml-1 px-2 py-1 border border-teal-600 rounded-md focus:outline-none",
                                isPriceRangeApplied ? 'bg-teal-100' : 'bg-none'
                            )}
                        />
                    </div>
                    {/* X that spans 2 rows */}
                    <div className="
                        row-span-2 p-4
                        grid place-content-center"
                    >
                        {isPriceRangeApplied &&
                            <button
                                onClick={handleClearPriceClick}
                                className="
                                    w-10 aspect-square
                                    bg-teal-600
                                    text-xl text-white-1 rounded-md"
                            >
                                <i className="fa fa-times"></i>
                            </button>
                        }
                    </div>
                    <div className="grid items-center">Hasta:</div>
                    {/* Div for grid slot with To input */}
                    <div className="flex items-center">
                        <span>$</span>
                        <input
                            onChange={e => handlePriceOnChange(e, setToPriceValue)}
                            type="number"
                            ref={toInputMobRef}
                            className={clsx(
                                "w-24 ml-1 px-2 py-1 border border-teal-600 rounded-md focus:outline-none",
                                isPriceRangeApplied ? 'bg-teal-100' : 'bg-none'
                            )}
                        />
                    </div>
                </div>
                {/* Ascending or descending price */}
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
                <button
                    onClick={handleMobApplyFiltersClick}
                    className="self-center mt-4 px-4 py-2 bg-sky-600 text-white-1 rounded-md"
                >
                    Aplicar filtros
                </button>
            </dialog>
        }
        {/* Left div with items */}
        <div className="
            w-full lg:w-[75%] lg:min-w-[1000px] lg:pr-4
            flex flex-col lg:grid grid-cols-3 gap-6 lg:gap-8"
        >
            {filteredItems.length ?
                filteredItems.sort(sortingFns[sortingKey]).map((item, index) =>
                    <ProductCard
                        key={index}
                        title={item.title}
                        descriptionList={item.descriptionList}
                        price={item.price}
                        noPromotionPrice={item.noPromotionPrice}
                        imgUrl={item.imageUrls[0]}
                        slug={item.slug}
                    />
                )
                :
                <>
                    <div></div>
                    <div className="place-self-center text-2xl text-sky-800 text-center font-semibold">
                        ¡Lo sentimos! Ningún producto coincide con tus filtros.
                    </div>
                </>
            }
        </div>
        {/* Right div with table */}
        <div className="
            flex-1 lg:min-w-fit px-6 py-3 relative self-stretch
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
                    category="sueroCatalogo"
                />
                <TableCategoryFilter
                    filters={filters}
                    setFilters={setFilters}
                    text="Plasmas"
                    category="plasmaCatalogo"
                />
                <p className="mt-4 mb-2 text-lg text-gray-600">Filtrar por precio</p>
                {/* Price input container */}
                <div className="grid grid-cols-[80px_1fr_1fr] gap-y-2 text-teal-600 text-md">
                    <div className="grid items-center">Desde:</div>
                    {/* Div for grid slot with From input */}
                    <div className="flex items-center">
                        <span>$</span>
                        <input
                            onChange={e => handlePriceOnChange(e, setFromPriceValue)}
                            type="number"
                            ref={fromInputRef}
                            className={clsx(
                                "w-24 ml-1 px-2 py-1 border border-teal-600 rounded-md focus:outline-none",
                                isPriceRangeApplied ? 'bg-teal-100' : 'bg-none'
                            )}
                        />
                    </div>
                    {/* Div for slot spanning 2 rows with X */}
                    <div className="
                        row-span-2 p-4
                        grid place-content-center"
                    >
                        {isPriceRangeApplied &&
                            <button
                                onClick={handleClearPriceClick}
                                className="
                                    w-10 aspect-square
                                    bg-teal-600
                                    text-xl text-white-1 rounded-md"
                            >
                                <i className="fa fa-times"></i>
                            </button>
                        }
                    </div>
                    <div className="grid items-center">Hasta:</div>
                    {/* Div for grid slot with To input */}
                    <div className="flex items-center">
                        <span>$</span>
                        <input
                            onChange={e => handlePriceOnChange(e, setToPriceValue)}
                            type="number"
                            ref={toInputRef}
                            className={clsx(
                                "w-24 ml-1 px-2 py-1 border border-teal-600 rounded-md focus:outline-none",
                                isPriceRangeApplied ? 'bg-teal-100' : 'bg-none'
                            )}
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