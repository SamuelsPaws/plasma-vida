import CustomIcon, { IconId } from "@/components/CustomIcon"
import Image from "next/image";

interface Props {
    src?: string;
}

const PhotoCircle = ({ src }: Props) => {
    return (
    <div className="
        w-[35%] aspect-square relative
        mb-4
        flex justify-center items-center
        bg-lightblue-200
        text-5xl text-mainblue-light-2
        rounded-full overflow-hidden"
    >
        <Image
            src={src ?? '/assets/plasma-cover.jpg'}
            fill
            sizes="(max-width: 768px) 30vw, 119px"
            className="w-full h-full object-cover object-center"
            alt="Foto de un paciente"
        />
    </div>
    )
}

export default PhotoCircle