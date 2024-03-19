import { ReactNode } from "react";

interface SlugProps {
    children: ReactNode
}

export default function Slug({ children }: SlugProps) {
    return (
        <p className="py-1 px-6 text-center bg-[#aec7bd] rounded-md uppercase text-xs sm:text-sm font-semibold">{children}</p>
    )
}