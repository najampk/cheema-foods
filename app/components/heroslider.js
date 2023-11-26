'use client'

import Image from 'next/image';
import Link from 'next/link';
import { Navigation, Pagination, A11y, EffectFade, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/keyboard'; 
import 'swiper/css/mousewheel';
import 'swiper/css/parallax';
import 'swiper/css/zoom';

const Images = [
  {
      src: "images/projects/project-a/1.jpg",
      title: "",
  },
  {
    src: "images/projects/project-a/2.jpg",
    title: "",
  },
  {
    src: "images/projects/project-a/3.jpg",
    title: "",
  },
  {
    src: "images/projects/project-a/4.jpg",
    title: "",
  },
  {
    src: "images/projects/project-a/5.jpg",
    title: "",
  },
  {
    src: "images/projects/project-a/6.jpg",
    title: "",
  } 
]


  
export default function HeroSlider({ children, home }) {

 
  return (
    <>
     
<Swiper  
     
      modules={[  Pagination, A11y, EffectFade, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      // navigation       
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      effect="fade"
      loop={true}
      pagination={{ clickable: true }}       
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >

  
     {Images.map((image, index) => (
        <SwiperSlide key={index}  >
          <div className='w-full h-1/2 xl:h-screen  flex justify-center items-center'> 
                       <Image
                                src={"/"+image.src}
                                width="1800"  
                                height="1200" 
                                alt="dd"
                                className='h-full w-full  relative'
                            />  
                            </div>
        </SwiperSlide>
      ))}
    </Swiper> 
     

    </>
  );
}