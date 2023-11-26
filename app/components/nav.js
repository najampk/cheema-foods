'use client'

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
 
export default function Nav() {

  const pathname = usePathname();
  
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((open) => !open);

  };
  
  return (
    <>
     <nav className="w-full transition-all duration-500 h-32 backdrop-blur-md flex justify-center bg-slate-900  bg-opacity-90   fixed  z-40 group items-center   border-b-slate-600 border-b-4 "  >
     
      <Link href="./" className="z-10">
            <Image
              src="/images/wisemart-II.png"
              alt="WiseMart II"
              className="w-44 cursor-pointer mx-auto"
              width={240}
              height={128}
            />
          </Link> 
          <div className="w-full bg-no-repeat bg-cover opacity-80 bg-center h-32 absolute inset-0" style={{backgroundImage:"url('./images/bg-foods.png')"}}> </div>
      </nav>
 

    </>
  );
}
