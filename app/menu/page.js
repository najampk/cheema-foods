'use client'
import Link from "next/link";
import Image from "next/image";
import MainHeader from "../components/mainheader";
import menu from "../menuItems.json";
import Nav from '../components/nav'
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import { DropdownMenuArrow } from "@radix-ui/react-dropdown-menu";

export default function () {

  const unicat = [...new Set(menu.Menu.map(item => item.category))];
  const [cat, setCatsel] = useState("Categories");

  const handleMenuItemClick = (href, category) => {

    window.location.href = href;

    setCatsel(category)

  };


  return (
    <>
      <Nav />     

      <section className="py-10 pt-32 relative ">

        <div className="container mx-auto inset-x-0 pt-6 text-center lg:text-xl text-base fixed bg-gradient-to-b from-slate-100">


          <DropdownMenu>
            <DropdownMenuTrigger className="uppercase font-bold text-orange-600 px-4 bg-slate-50 border border-slate-300 shadow ring-0 outline-none rounded-lg py-1 lg:py-2">{cat}   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 inline-block">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent>


              {unicat.map((category, indexc) => (

                <DropdownMenuItem
                  className="uppercase cursor-pointer text-base text-slate-500 font-bold"
                  key={"catitem_" + indexc} onClick={() => handleMenuItemClick("#cathead_" + indexc, category)} >{category}</DropdownMenuItem>

              ))}


            </DropdownMenuContent>
          </DropdownMenu>



        </div>
        <div className="pt-20"></div>
        {unicat.map((category, indexa) => (

          <div key={"mainItem_" + indexa} id={"cathead_" + indexa} className="py-10 scroll-m-44">

            <div className="border-b   border-slate-500  border-dashed w-full"><h3 className="font-bold py-1 container uppercase mx-auto lg:text-2xl text-xl  text-red-700   ">{category}  </h3></div>

            <div className="mt-4   mx-auto  grid lg:grid-cols-2  gap-5 w-full h-auto  container px-4 ">

              {menu.Menu.map((item, index) => {
                return (
                  <>

                    {category === item.category &&

                      <div
                        key={index + "_" + item.id}
                        className=" bg-gradient-to-t from-slate-100 to-slate-200 rounded-lg shadow-md group p-3   border border-slate-200  "
                      >

                        <div className="flex  justify-between">  <h2 className="lg:text-xl text-sm font-bold uppercase">{item.title}</h2>
                          <div className="flex -mr-2  ">
                            {item.sizenprice.map((sp, indexm) => (

                              <div className="capitalize px-2 text-sm lg:text-base text-red-900 " key={"sp_" + indexm}><span className="pr-2">{sp.size}</span><span className="font-semibold">{"$" + sp.price}</span></div>

                            ))}
                          </div>
                        </div>
                        <div className="text-slate-600 text-sm lg:text-base">{item.description}</div>
                        {item.options.length != 0 &&
                          <Accordion type="single" collapsible>

                            <AccordionItem value={"item-" + index} key={"opts_" + index} className='my-3'>
                              <AccordionTrigger className='border rounded-md border-slate-300 bg-slate-50 no-underline hover:no-underline w-full py-1  px-2 lg:text-lg  text-left font-semibold text-slate-600 focus:text-slate-900'>Options</AccordionTrigger>
                              <AccordionContent className='border  mt-1 rounded-md border-b-0 shadow bg-slate-50   text-black text-base   lg:text-lg'>
                                <span className='py-2 px-3 block pb-0'>

                                  {item.options.map((option, indexk) => (
                                    <div key={option.name + "_" + indexk}>
                                      <h4 className="border-b border-dotted text-orange-500 border-slate-600 text-sm py-1 font-bold">{option.name}</h4>
                                      <ul className="my-3">
                                        {option.items.map((iteml, indexo) => (
                                          <li className="list-disc list-inside text-sm" key={iteml + "_" + indexo}>{iteml}</li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}

                                </span>
                              </AccordionContent>
                            </AccordionItem>

                          </Accordion>

                        }

                        <div className="flex justify-center items-center "> <a href={item.href} className='hover:border-red-500 text-center   border    inline-block  rounded-full bg-gradient-to-b hover:from-red-600  hover:to-red-800   shadow px-2 py-1 text-base font-semibold my-1 hover:text-slate-50  text-slate-600'>ORDER</a> </div>

                      </div>

                    }
                  </>


                )
              })}

            </div>

          </div>
        ))}
 
      </section>


    </>
  );
}
