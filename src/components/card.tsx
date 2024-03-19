interface CardProps {
    number: string
    title: string
    text: string
}

export default function Card({ number, text, title }: CardProps) {
    return (
        <div className="relative bg-zinc-900 rounded-lg px-6 sm:px-8 w-full pt-20 pb-6 text-white">
            <p className="opacity-10 absolute top-2 left-6 text-8xl font-bold">{number}°</p>
            <h4 className="text-2xl sm:text-3xl font-bold mb-4">{title}</h4>
            <p className="text-lg">{text}</p>
        </div>
    )
}