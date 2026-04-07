import { ProductCategory } from "@/types/types"

export default function productCategoryMapper(str: string): ProductCategory {
    if (str === 'Suero (de catálogo)') {
        return 'sueroCatalogo'
    }
    if (str === 'Plasma (de catálogo)') {
        return 'plasmaCatalogo'
    }
    if (str === 'Suero personalizado homeopático') {
        return 'sueroHomeo'
    }
    if (str === 'Suero personalizado vitamínico') {
        return 'sueroVita'
    }
    return 'sueroCatalogo'
}