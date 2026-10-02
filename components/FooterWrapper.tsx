import clsx from "clsx";

interface Props {
    color: string;
}

const FooterWrapper = ({ color }: Props) => {
    return (
    <div
        className={clsx(
            "h-mob-footer-height md:h-footer-height",
            color
        )}
        aria-hidden="true"
    />
    )
}

export default FooterWrapper