'use client'

import { CSSTransition } from 'react-transition-group';
import { PlusSmallIcon } from '@heroicons/react/24/solid';
import { useState, ReactNode, useRef, useEffect } from 'react';
import Slug from './slug';

interface DropdownProps {
  children: ReactNode;
  title: string;
  module?: string;
}

export default function Dropdown({ children, title, module }: DropdownProps) {
  const [isDropdownActived, setIsDropdownActived] = useState<boolean>(false);
  const [dropdownHeight, setDropdownHeight] = useState<number>(0);
  const dropdownContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isDropdownActived && dropdownContentRef.current) {
      setDropdownHeight(dropdownContentRef.current.scrollHeight);
    }
  }, [isDropdownActived, dropdownContentRef.current?.scrollHeight]);

  function toggleDropdown() {
    setIsDropdownActived(!isDropdownActived);
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
      <CSSTransition
        in={isDropdownActived}
        timeout={300} // Duração da animação
        classNames="dropdown" // Prefixo para as classes de animação
        unmountOnExit
        onEnter={() => setDropdownHeight(dropdownContentRef.current?.scrollHeight || 0)}
      >
        <div ref={dropdownContentRef} className={`bg-[#f8f8f8] text-zinc-600 bg-client-pallet-2 rounded-b-xl ${module ? 'p-6 sm:p-8 sm:text-lg' : 'p-4 sm:p-6'}`} style={{ height: isDropdownActived ? `${dropdownHeight}px` : '0', overflow: 'hidden' }}>
          {children}
        </div>
      </CSSTransition>
    </div>
  );
}
