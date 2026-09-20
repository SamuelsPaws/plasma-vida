import CustomIcon, { IconId } from "@/components/CustomIcon"

interface Props {
    iconId: IconId;
    title: string;
    copy: string;
}

const AttentionItem = ({ iconId, title, copy }: Props) => {
    return (
    <div className="
        w-full md:w-full
        flex flex-col gap-2 md:gap-2"
    >
        <div className="text-my-xl text-mainblue-original">
            <CustomIcon
                iconId={iconId}
            />
        </div>
        <h3 className="text-mainblue-original text-my-lg font-semibold">
            {title}
        </h3>
        <p className="text-my-md text-gray-600">
            {copy}
        </p>
    </div>
    )
}

export default AttentionItem