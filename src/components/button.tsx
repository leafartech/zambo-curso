import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode
}

export default function Button({ children }: ButtonProps) {
    return (
        <a
            href="https://pay.hotmart.com/N90839656C?checkoutMode=10&offDiscount=OFFER&split=12&sck=null&utm_source=null&utm_campaign=null&utm_medium=null&utm_term=null&utm_content=null&bid=1710854505114"
            className="transition duration-300 hover:-translate-y-2 bg-gradient-to-r text-center from-[#689e83] to-[#2c6247] uppercase rounded-md py-4 w-full sm:w-[440px] sm:text-xl text-white font-medium"
        >{children}</a>
    )
}