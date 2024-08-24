import type { Photo } from "@/models/Images"
import Image from "next/image"
import Link from "next/link"

type Props = {
    photo: Photo
}

export default function ImgContainer({ photo }: Props) {
    const withHeighRatio = photo.height / photo.width
    const galleryHeight = Math.ceil(250 * withHeighRatio)
    const photoSpane = Math.ceil(galleryHeight / 10) + 1 
    return (
        <div  className="w-[250px] justify-self-center" style={{gridRow : `span ${photoSpane}`}}>
            <Link href={photo.url} target="_blank" className="grid place-content-center">
            <div className="rounded-xl overflow-hidden group">
            <Image
                src={photo.src.large}
                alt={photo.alt}
                width={250}
                height={galleryHeight}
                placeholder="blur"
                blurDataURL={photo.blurredDataUrl}
                sizes="250px"
                className="group-hover:opacity-75"
            />
            </div>
            </Link>
        </div>
    )
}