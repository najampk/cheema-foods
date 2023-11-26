'use client'
import { ArrowUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from "react";
export default function Footer ({ children, home }) {
  
      const year = new Date().getFullYear();

      const [showButton, setShowButton] = useState(false);

      useEffect(() => {
        window.addEventListener("scroll", () => {
          const scrollPosition = window.scrollY;
    
          if (scrollPosition > 550) {
            setShowButton(true);
          } else {
            setShowButton(false);
          }
        });
    
        return 
      () => {
          window.removeEventListener("scroll", () => {});
        };
      }, []);
    

      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
 
    return (
      <>        
          

        {showButton && ( <div
        onClick={scrollToTop}
        className="w-12 h-12  flex cursor-pointer bg-black hover:bg-slate-400 hover:bg-opacity-40   rounded-full justify-center items-center z-20 text-white fixed right-4 bottom-4"      >
        <ArrowUp/>
      </div>
      )}
        
       
      </>
    );
    }