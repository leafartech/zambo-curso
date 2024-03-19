'use client'

import { PlusSmallIcon } from '@heroicons/react/24/solid';
import { useState } from 'react'
import { ReactNode } from "react";
import Slug from './slug';

interface DropdownProps {
    children: ReactNode
    title: string
    module?: string
}

export default function Dropdown({ children, title, module }: DropdownProps) {
    const [isDropdownActived, setIsDropdownActived] = useState<boolean>(false)

    function toggleDropdown() {
        setIsDropdownActived(!isDropdownActived)
    }

    return (
        <div onClick={() => toggleDropdown()} className="w-full cursor-pointer">
            <div
                className={`relative p-6 sm:p-8 bg-[#f1f1f1] text-left w-full bg-client-pallet-2 font-medium rounded-xl ${isDropdownActived && 'rounded-b-none'} flex flex-col gap-2 items-start`}
            >
                {module && <Slug>{module}</Slug>}
                <p className={`flex items-center justify-between ${module ? 'text-xl sm:text-2xl font-bold' : 'text-lg font-medium'}`}>
                    <span>{title}</span>
                </p>
                <PlusSmallIcon className={`absolute top-4 right-6 sm:h-8 sm:w-8 h-6 w-6 transition ${isDropdownActived ? "rotate-45" : "rotate-0"}`} />
            </div>
            <div className={`bg-[#f8f8f8] text-zinc-600 bg-client-pallet-2 rounded-b-xl ${isDropdownActived ? "block" : "hidden"} ${module ? 'p-6 sm:p-8 sm:text-lg' : 'p-4 sm:p-6'}`}>
                {children}
            </div>
        </div>
    )
}