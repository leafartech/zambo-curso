import Image from "next/image"
import { ReactNode } from "react"

interface heroflexProps {
    imagePath: string
    height: number
    width: number
    alt: string
    children: ReactNode
    imgClassName?: string
}

export default function Heroflex({ children, height, imagePath, width, alt, imgClassName }: heroflexProps) {
    return (
        <div className="sm:grid sm:grid-cols-2 flex flex-col-reverse">
            <div className="w-full">
                <Image
                    src={`/images/${imagePath}.png`}
                    alt={alt}
                    width={width}
                    height={height}
                    layout="responsive"
                    className={`max-w-[550px] ${imgClassName}`}
                />
            </div>
            {children}
        </div>
    )
}