'use client'

import Image from "next/image";
import Button from "./button";
import { useEffect, useState } from "react";

export default function Payment() {
    const [ updatedUrl, setUpdatedUrl] = useState('')
    useEffect(() => {
        let url = 'https://pay.hotmart.com/N90839656C?checkoutMode=10&offDiscount=OFFER&split=12'
        if (typeof window !== 'undefined') {
            const params = window.top?.location.href.split("?")[1]?.split("&").join('&')
            setUpdatedUrl(`${url}&${params}` )
        }
    }, [])

    return (
        <div id="buy" className="relative bg-white rounded-lg flex flex-col items-center">
            <div className="absolute -translate-y-24 py-14 px-4 bg-[#271e13] rounded-lg shadow-xl">
                <div className="w-32">
                    <Image
                        src="/images/bg1.png"
                        alt="TCC DO ZERO À APROVAÇÃO, Logo"
                        width={2024}
                        height={293}
                    />
                </div>
            </div>
            <div className="flex flex-col items-center gap-4 text-center pt-20 pb-6 px-4">
                <p className="text-lg text-zinc-600">De <span className="line-through">R$ 397,00</span> por apenas</p>
                <h3 className="sm:text-6xl text-4xl font-bold">12x de R$ 19,66</h3>
                <p className="text-lg text-zinc-600">ou R$ 197,03 à vista</p>
                <Button updatedUrl={updatedUrl}>Quero ser aprovado no TCC</Button>
                <div className="w-64 sm:w-80">
                    <Image
                        src="/images/bg6.png"
                        alt="Ícones de métodos de pagamento"
                        width={470}
                        height={41}
                    />
                </div>
                <p className="text-xs text-zinc-400 w-full sm:max-w-[356px]">*Parcelamento com tarifa de 2.89% a.m via cartão de crédito.
                    Compra segura. 7 (sete) dias de garantia.</p>
            </div>
        </div >
    )
}