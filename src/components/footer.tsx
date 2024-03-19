import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-zinc-950 py-12 flex flex-col items-center gap-4">
            <div className="w-40">
                <Image
                    height={228}
                    width={1024}
                    src="/images/bg7.png"
                    alt="CEZ Logo"
                />
            </div>
            <p className="text-white font-medium text-sm text-center">© 2023 Centro de Ensino Zamboni | Todos os Direitos Reservados</p>
        </footer>
    )
}