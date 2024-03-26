import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode
    updatedUrl: string
}

export default function Button({ children, updatedUrl }: ButtonProps) {
    return (
        <a
            href={updatedUrl}
            className="transition duration-300 hover:-translate-y-2 bg-gradient-to-r text-center from-[#689e83] to-[#2c6247] uppercase rounded-md py-4 w-full sm:w-[440px] sm:text-xl text-white font-medium"
        >{children}</a>
    )
}