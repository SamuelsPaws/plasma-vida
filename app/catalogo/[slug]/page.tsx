import numToPriceStr from "@/app/utils/numToPriceStr";
import { getProductBySlug } from "@/lib/contentful-queries";
import ItemBuy from "../components/ItemBuy";
import { Suspense } from "react";
import SimilarContainer from "../components/SimilarContainer";
import getSalePercent from "@/app/utils/getSalePercent";
import ItemHealthTag from "../components/ItemHealthTag";
import Component from "./components/Component";
import clsx from "clsx";
import { Metadata } from "next";
import { Product } from "@/lib/models/product";
import truncateText from "@/app/utils/truncateText";
import IdealItem from "./components/IdealItem";
import Image from "next/image";
import Link from "next/link";

type Props = {
    params: Promise<{
        slug: string
    }>
}

function buildTitle(product: Product) {
  const productName = product.title

  if (product.category === "sueroCatalogo") {
    // return `${productName} - Suero para ${product.tags?.[0] ?? "Bienestar"} | Plasma Vida Center`
    return `${productName} - Suero Intravenoso | Plasma Vida Center`
  }

  if (product.category === "plasmaCatalogo") {
    return `${productName} - Terapia PRP en Quito | Plasma Vida Center`
  }

  return `${productName} | Plasma Vida Center`
}

function buildDescription(product: Product) {
  const base = truncateText(product.description, 100)

  const benefits = product.descriptionList?.slice(0, 2).join(", ")

  if (benefits) {
    return `${base} ${benefits}.`
  }

  return base
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const product = await getProductBySlug(slug)

    if (!product) {
        return {
            title: "Producto no encontrado | Plasma Vida Center",
            robots: {
                index: false,
                follow: false,
            },
        }
    }

    const title = buildTitle(product)
    const description = buildDescription(product)
    const url = `https://plasma-vida.vercel.app/catalogo/${slug}`
    // const productImg = product.imageUrls[0]
    const defaultOGImg = 'https://plasma-vida.vercel.app/opengraph-image.jpg'

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url,
            siteName: 'Plasma Vida Center',
            locale: 'es_EC',
            type: 'website',
            images: [
                {
                    url: defaultOGImg,
                    width: 1200,
                    height: 630,
                    alt: product.title
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [defaultOGImg],
        },
        alternates: {
            canonical: url,
        },
    }
}

export default async function ProductPage({ params }: Props) {
    const { slug } = await params
    const product = await getProductBySlug(slug)
    const descriptionParagraphs = product.description.split('\n').filter(el => el.length)
    // const longDescriptionParagraphs = product.longDescription.split('\n').filter(el => el.length)

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.title,
        description: product.description,
        audience: "Usuarios de suero IV y terapias PRP",
        offers: {
            "@type": "Offer",
            price: product.price / 100,
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
        },
    }

    return (
    <main className="pt-mob-header-height lg:pt-header-height">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <section className="
            min-h-[400px] p-6 lg:px-16 lg:py-8
            bg-[#ececec]"
        >
            <Link
                href="/catalogo#productos"
                className="
                    flex items-center gap-4
                    text-2xl text-gray-600"
            >
                <i className="fa fa-arrow-left"></i>
                <span>Volver al Catálogo</span>
            </Link>
            {/* Title */}
            <div className="mb-6 lg:my-16 flex gap-4 lg:gap-8">
                <h1 className="text-2xl lg:text-5xl text-center lg:text-left font-bold">
                    {product ? product.title : 'Título'}
                </h1>
                {product && product.noPromotionPrice &&
                    <div className="
                        px-2 py-0
                        grid place-content-center
                        bg-red-600 text-white-1 text-lg lg:text-3xl"
                    >
                        -{getSalePercent(product.noPromotionPrice, product.price)}%
                    </div>
                }
            </div>
            {/* Tags */}
            {product && product.tags &&
                <div className="
                    w-full mb-4 lg:mb-8
                    flex gap-2 lg:gap-4 justify-start flex-wrap"
                >
                    {product.tags.map((el, index) =>
                        <ItemHealthTag
                            key={index}
                            text={el}
                        />
                    )}
                </div>
            }
            {/* Product and side bar */}
            <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                {/* White part with product */}
                <div className="
                    w-full lg:w-[70%] p-4 lg:p-8
                    bg-white-1 rounded-2xl"
                >
                    {/* Div with image and info */}
                    <div className="
                        w-full mb-4 lg:mb-8
                        flex flex-col lg:flex-row gap-4 lg:gap-8"
                    >
                        {/* Image */}
                        <div className="
                            w-full h-[300px]
                            lg:w-[320px] lg:h-[320px]
                            xl:w-[400px] xl:h-[400px]
                            rounded-2xl overflow-hidden relative"
                        >
                            <Image
                                src={product ? product.imageUrls[0] : '/assets/banner.webp'}
                                fill
                                sizes="(min-width: 1280px) 320px, (min-width: 1024px) 400px, 100%"
                                priority
                                className="object-cover"
                                alt={product ? product.title : 'Imagen no disponible'}
                            />
                        </div>
                        {/* Right div */}
                        <div className="lg:flex-1">
                            {/* Price */}
                            <div className="
                                w-full mb-4 lg:mb-8
                                flex gap-2 lg:gap-4 lg:justify-start items-center
                                text-xl lg:text-3xl"
                            >
                                <span className="
                                    px-2 py-2
                                    bg-maingold-original
                                    text-white-1 font-semibold"
                                >
                                    ${product ? numToPriceStr(product.price) : 'Precio'}
                                </span>
                                {product && product.noPromotionPrice &&
                                    <span className="text-gray-500 crossed-out">${numToPriceStr(product.noPromotionPrice)}</span>
                                }
                            </div>
                            {/* Short description */}
                            {descriptionParagraphs.map((el, index) =>
                                <p key={index} className="mb-2 text-md lg:text-lg text-gray-600">{el}</p>
                            )}
                            {/* Benefits */}
                            <h3 className="
                                py-2 lg:py-4
                                text-xl lg:text-2xl text-sky-700 font-bold"
                            >
                                Beneficios:
                            </h3>
                            {product ? product.descriptionList.map((el, index) => (
                                <p
                                    key={index}
                                    className="mb-1 text-md lg:text-md text-gray-600"
                                ><i className="fa fa-check mr-1 scale-[0.9]" aria-hidden="true"></i>{el}</p>
                            )) : 'Beneficios'}
                        </div>
                    </div>
                    {/* Div contains itembuy for positioning */}
                    <div className="w-full flex justify-end">
                        <ItemBuy item={product} />
                    </div>
                </div>
                {/* Side bar */}
                <div className="
                    lg:flex-1 p-4 lg:p-4 flex flex-col
                    bg-white-1 rounded-2xl"
                >
                    <h4 className="mb-4 text-lg lg:text-2xl font-bold">
                        Explora productos similares
                    </h4>
                    <Suspense fallback={
                        <div className="
                            w-full h-16
                            flex justify-center items-center gap-2
                            text-xl text-center text-gray-600"
                        >
                            Cargando
                            <i className="fa fa-clock-o"></i>
                        </div>
                    }>
                        <SimilarContainer productSlug={product ? slug : 'slug'} />
                    </Suspense>
                </div> 
            </div>
            
        </section>
        {/* More info section */}
        <section className="
            p-6 lg:px-16 lg:pt-0 lg:pb-16
            bg-[#ececec]"
        >
            {/* Learn more */}
            <h2 className="mb-8 lg:mb-16 text-3xl lg:text-4xl font-semibold text-mainblue-dark-1">
                ¿Quieres saber más?
            </h2>
            {/* Div with white blocks */}
            <div className="flex flex-col lg:flex-row justify-start gap-6 lg:gap-8">
                <div className="
                    w-full lg:w-[500px]
                    p-6 lg:p-8
                    bg-white-1 rounded-2xl"
                >
                    <h4 className="mb-2 text-2xl font-bold">
                        Información adicional
                    </h4>
                    <p className="text-md lg:text-lg text-gray-600">
                        {product.longDescription}
                    </p>
                </div>
                <div className="w-full lg:w-[500px] p-6 lg:p-8 bg-white-1 rounded-2xl">
                    <h4 className="mb-2 text-2xl font-bold">
                        Ideal para:
                    </h4>
                    {product && product.idealFor.map((el, index) =>
                        <IdealItem key={index} text={el} />
                    )}
                </div>
            </div>
            {/* Components */}
            <h3 className="my-8 text-2xl lg:text-3xl font-bold text-mainblue-dark-1">
                Contiene:
            </h3>
            {product && product.componentsRefs.length > 1 ?
                product.componentsRefs.map((el, index) =>
                    <div
                        key={index}
                        className={clsx(
                           "w-full",
                           index !== product.componentsRefs.length - 1 ? 'mb-8' : 'mb-0'
                        )}
                    >
                        <h4 className="mb-8 text-xl lg:text-2xl text-black font-semibold">
                            {el.title}
                        </h4>
                        <div className="
                            w-full
                            grid grid-cols-2 lg:flex gap-6 lg:gap-4 lg:flex-wrap"
                        >
                            {el.components.map((compEl, compInd) =>
                                <Component
                                    key={compInd}
                                    text={compEl}
                                />
                            )}
                        </div>
                    </div>
                )
                :
                <div className="
                    w-full
                    grid grid-cols-2 lg:flex gap-6 lg:gap-8 lg:flex-wrap"
                >
                    {product.componentsRefs[0].components.map((el, index) =>
                        <Component
                            key={index}
                            text={el}
                        />
                    )}
                </div>
            }
        </section>
        <section className="h-mob-footer-height lg:h-footer-height bg-[#ececec]"></section>
    </main>
    )
}