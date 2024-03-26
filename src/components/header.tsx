import Image from "next/image";
import Button from "./button";

export default function Header() {
    return (
        <header className="relative h-screen w-full overflow-hidden">
            <Image
                src="/images/bg0.png"
                alt="TCC DO ZERO À APROVAÇÃO, LOGO"
                layout="fill"
                className="absolute -z-10"
            />
            <div className="h-full w-full flex flex-col items-center justify-center z-50">
                <div className="flex flex-col gap-6 sm:ap-8 items-center w-full max-w-xl text-center sm:px-0 px-4">
                    <div className="w-40 sm:w-56">
                        <Image
                            src="/images/bg1.png"
                            alt="TCC DO ZERO À APROVAÇÃO, LOGO"
                            layout="responsive"
                            width={1024}
                            height={293}
                        />
                    </div>
                    <div className="">
                        <h1 className="text-white font-bold my-lt sm:text-3xl">Tenha acesso ao passo a passo prático que garante su aprovação no TCC.</h1>
                    </div>
                    <Button updatedUrl="#buy">Quero ser aprovdo no TCC</Button>
                    <div className="w-24">
                        <Image
                            src="/images/scroll.gif"
                            alt="Scroll Gif"
                            layout="responsive"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}