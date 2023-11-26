import Image from 'next/image'
import Link from 'next/link'
   
  
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Home() {

    return (
        <>

            <section className=' bg-no-repeat bg-cover  w-full px-8 h-screen bg-slate-950  relative flex justify-center items-center' style={{ backgroundImage: "url('./images/bg-foods.png')" }} > 
            
                 <div>  

                 {/* <Image
              src="/images/wisemart-II.png"
              alt="Cheema Foods LTD"
              className="w-64 cursor-pointer mx-auto"
              width={240}
              height={128}
            /> */}
                 
                     
                     <h1 className="text-3xl mt-8 font-bold tracking-tighter text-center sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                     Welcome to Cheema Foods LTD
              </h1>
                 

                     <Link href="#" className='border-red-500 border my-12 block rounded-lg bg-gradient-to-b from-red-600  to-red-800 hover:from-red-800 hover:to-red-600  shadow px-10 py-4 text-2xl font-semibold text-center text-slate-50'>SEE MENU</Link> 


                     <div className='items-center text-center'>
                     <p className="mt-3 sm:text-base text-sm text-gray-50 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-200 -mt-1 mr-1 inline"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>{" "}
                    45 Blackpool Road, Preston, PR2 6BU
                    <a
                      href="#"
                      title="Direction"
                      className="tooltip"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 inline text-white ml-2 -mt-1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </p>

                  <div className="gap-x-3 top-social relative py-5 items-center justify-center">
            

            <a
              href="#"
              title="Cheema Foods LTD"
              className="facebook tooltip group hover:fill-white hover:-translate-y-2 hover:bg-[#4267B2] hover:border-[#4267B2]"
            >
              <svg
                className="w-6 h-auto fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >                
                <path d="M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682h0.868c0.552,0,1-0.448,1-1V3.064c0-0.523-0.401-0.97-0.923-1.005 C15.904,2.018,15.299,1.999,14.693,2C11.98,2,10,3.657,10,6.699V9H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1l2-0.001V21 c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8.003l2.174-0.001c0.508,0,0.935-0.381,0.993-0.886l0.229-1.996 C17.465,9.521,17.001,9,16.403,9z" />
              </svg>
            </a>

            <a
              href="#"
              title="Cheema Foods LTD"
              className="instagram tooltip group hover:bg-[#405DE6] hover:border-[#405DE6] hover:-translate-y-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-auto fill-white"
                viewBox="0 0 30 30"
              >
              
                <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" />
              </svg>
            </a>


            <a
              href="mailto:info@cheemafoods.co.uk"
              title="Email"
              className="emailit tooltip group hover:-translate-y-2 hover:fill-white hover:bg-slate-400 hover:border-slate-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-auto fill-white"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
            </a>

            {/* <a
                href="tel:+1 410-883-3648"
                title="Call"
                className="tooltip font-bold hover:-translate-y-2 text-xl text-slate-50 hover:text-amber-400"
              >
 <img src='./images/phone-call.svg'></img>
                
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline mr-0 -mt-1"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"></path></svg>
                 
              </a> */}

            
          </div>



                     </div>

                    
                    
            
            </div> 
            </section>

            


        </>
    )
}
