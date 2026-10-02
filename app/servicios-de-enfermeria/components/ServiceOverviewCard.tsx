import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import CustomIcon from "@/components/CustomIcon";

type Props = {
    title: string;
    description: string;
    href: string;
    imageSrc: ImageProps["src"];
    imageAlt: string;
};

const ServiceOverviewCard = ({
    title,
    description,
    href,
    imageSrc,
    imageAlt,
}: Props) => {
    return (
        <article
            className="
                p-4
                flex h-full flex-col
                bg-white-1
                border border-lightblue-300 rounded-2xl
                hover:-translate-y-1 hover:shadow-xl duration-400"
        >
            <div
                className="
                    p-4
                    w-full h-48
                    grid place-items-center
                    bg-lightblue-200
                    rounded-xl overflow-hidden"
            >
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={192}
                    height={160}
                    className="
                        w-full h-40
                        object-contain"
                />
            </div>
            <div
                className="
                    p-4
                    flex flex-1 flex-col"
            >
                <h3
                    className="
                        text-my-xl text-mainblue-original font-semibold leading-tight"
                >
                    {title}
                </h3>
                <p
                    className="
                        mt-4
                        flex-1
                        text-my-sm text-gray-600 leading-relaxed"
                >
                    {description}
                </p>
                <Link
                    href={href}
                    className="
                        mt-8
                        w-fit
                        flex items-center gap-4
                        text-my-md text-mainblue-original font-semibold
                        pressable hover:text-mainblue-light-3"
                >
                    <span>
                        Conocer más
                    </span>
                    <CustomIcon
                        iconId="arrowR"
                    />
                </Link>
            </div>
        </article>
    );
};

export default ServiceOverviewCard;
