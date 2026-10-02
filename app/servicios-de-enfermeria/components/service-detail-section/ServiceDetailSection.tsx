import clsx from "clsx";
import Image, { type ImageProps } from "next/image";
import Eyebrow from "@/components/reusable-ui/Eyebrow";
import PillCtaBtn from "@/components/reusable-ui/PillCtaBtn";
import SupportingPoint, { type SupportingPointContent } from "./subcomponents/SupportingPoint";

type ServiceDetailAction = {
    href: string;
    label: string;
    external?: boolean;
};

type ServiceDetailSectionProps = {
    id: string;
    eyebrow: string;
    title: string;
    introParagraphs: readonly string[];
    supportingPoints: readonly SupportingPointContent[];
    action: ServiceDetailAction;
    imageSrc: ImageProps["src"];
    imageAlt: string;
    imageSide?: "left" | "right";
    backgroundTone?: "white" | "soft";
};

const ServiceDetailSection = ({
    id,
    eyebrow,
    title,
    introParagraphs,
    supportingPoints,
    action,
    imageSrc,
    imageAlt,
    imageSide = "right",
    backgroundTone = "white",
}: ServiceDetailSectionProps) => {
    return (
        <section
            id={id}
            className={clsx(
                "px-8 py-16",
                "md:px-16 md:py-24",
                "xl:px-16 xl:py-32",
                backgroundTone === "white" ? "bg-white-1" : "bg-white-2"
            )}
        >
            <div
                className="
                    mx-auto
                    max-w-7xl
                    grid items-center gap-12 md:grid-cols-2 md:gap-16"
            >
                <div
                    className={clsx(
                        "flex flex-col items-start",
                        imageSide === "left" ? "md:order-2" : "md:order-1"
                    )}
                >
                    <Eyebrow
                        text={eyebrow}
                        noMargin
                    />
                    <h2
                        className="
                            mt-4
                            text-most-h2 text-mainblue-original font-semibold leading-tight"
                    >
                        {title}
                    </h2>
                    <div
                        className="
                            mt-4
                            max-w-2xl
                            flex flex-col gap-4"
                    >
                        {introParagraphs.map((paragraph) => (
                            <p
                                key={paragraph}
                                className="
                                    text-my-md text-gray-600 leading-relaxed"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                    <ul
                        className="
                            mt-8
                            w-full
                            flex flex-col gap-8"
                    >
                        {supportingPoints.map((point) => (
                            <SupportingPoint
                                key={point.title}
                                title={point.title}
                                description={point.description}
                            />
                        ))}
                    </ul>
                    <div className="mt-8">
                        <PillCtaBtn
                            href={action.href}
                            label={action.label}
                        />
                    </div>
                </div>
                <div
                    className={clsx(
                        "w-full aspect-[4/3]",
                        "relative overflow-hidden",
                        "rounded-2xl",
                        imageSide === "left" ? "md:order-1" : "md:order-2"
                    )}
                >
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-contain object-center"
                    />
                </div>
            </div>
        </section>
    );
};

export default ServiceDetailSection;
