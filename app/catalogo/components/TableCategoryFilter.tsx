import { CatalogItemCategory } from "@/types/types";
import clsx from "clsx";
import React from "react";
import { Filters } from "../types/types";

interface TableFilterProps {
    filters: Filters;
    setFilters: React.Dispatch<React.SetStateAction<Filters>>;
    text: string;
    category: CatalogItemCategory;
}

const TableCategoryFilter = ({ filters, setFilters, text, category }: TableFilterProps) => {
    const handleClick = () => {
        if (filters.category !== category) {
            setFilters({ ...filters, category: category });
        } else {
            setFilters({ ...filters, category: null })
        }
    }

  return (
    <button
        onClick={handleClick}
        className={clsx(
            "text-md rounded-md",
            filters.category === category ? 'px-2 py-1 bg-sky-600 text-white-1' : 'text-sky-600'
        )}
    >
        <span className="
            relative after:content-[''] after:absolute after:top-full after:left-0
            after:h-0.5 after:w-full after:bg-sky-600 after:opacity-0 lg:hover:after:opacity-100 after:duration-200"
        >{text}</span>
        {filters.category === category &&
            <i className="fa fa-times ml-2"></i>
        }
    </button>
  )
}

export default TableCategoryFilter