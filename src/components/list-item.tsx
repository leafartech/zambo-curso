import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { ReactNode } from "react";

interface ListItemProps {
    children: ReactNode
}

export default function ListItem({ children }: ListItemProps) {
    return (
        <li className="flex items-center gap-2 sm:gap-4 text-white text-base sm:text-lg">
            <span><CheckCircleIcon className="text-emerald-700 h-8 w-8" /></span>
            {children}
        </li>
    )
}