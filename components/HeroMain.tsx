import clsx from "clsx";
import Image, { type ImageProps } from "next/image";
import Eyebrow from "@/components/reusable-ui/Eyebrow";
import PillCtaBtn from "@/components/reusable-ui/PillCtaBtn";

type HeroAction = {
    href: string;
    label: string;
    external?: boolean;
    type?: "main" | "secondary";
};

type HeroMainProps = {
    eyebrow: string;
    title: string;
    description: string;
    primaryAction: HeroAction;
    secondaryAction?: HeroAction;
    imageSrc: ImageProps["src"];
    imageAlt: string;
    imagePosition?: "left" | "center" | "right" | 'top' | 'bottom';
};

const imagePositionClasses = {
    left: "object-left",
    center: "object-center",
    right: "object-right",
    top: "object-top",
    bottom: "object-bottom",
} as const;

const HeroMain = ({
    eyebrow,
    title,
    description,
    primaryAction,
    secondaryAction,
    imageSrc,
    imageAlt,
    imagePosition = "center"
}: HeroMainProps) => {
    return (
        <section className="
            px-8 py-16 md:px-16 md:py-20 xl:px-32 xl:py-24
            bg-white-1
            overflow-hidden"
        >
            <div className="
                mx-auto
                max-w-7xl
                grid items-center gap-12 md:grid-cols-2 md:gap-16"
            >
                <div className="flex flex-col items-start">
                    <Eyebrow
                        text={eyebrow}
                        noMargin
                    />
                    <h1 className="
                        mt-4
                        max-w-2xl
                        text-4xl md:text-5xl xl:text-6xl text-mainblue-original
                        font-semibold leading-tight"
                    >
                        {title}
                    </h1>
                    <p className="
                        mt-8
                        max-w-2xl
                        text-my-md text-gray-600 leading-relaxed"
                    >
                        {description}
                    </p>
                    <div className="
                        mt-8
                        flex flex-col items-start gap-4 md:flex-row md:items-center"
                    >
                        <PillCtaBtn
                            href={primaryAction.href}
                            label={primaryAction.label}
                            external={primaryAction.external}
                            type={primaryAction.type}
                        />
                        {secondaryAction && (
                            <PillCtaBtn
                                href={secondaryAction.href}
                                label={secondaryAction.label}
                                external={secondaryAction.external}
                                type={secondaryAction.type}
                            />
                        )}
                    </div>
                </div>
                <div className="
                    w-full h-80 md:h-96 xl:h-128
                    relative overflow-hidden
                    rounded-2xl"
                >
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className={clsx(
                            "object-cover",
                            imagePositionClasses[imagePosition]
                        )}
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroMain;
