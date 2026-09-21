interface Props {
    text: string;
}

const CenteredP = ({ text }: Props) => {
    return (
    <p className="
        w-full md:w-2/3
        mx-auto mb-8 md:mb-16
        text-my-md text-gray-600 text-center"
    >
        {text}
    </p>
    )
}

export default CenteredP