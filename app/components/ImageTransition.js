'use client'
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import ImageComponent from './ImageComponent';

const ImageTransition = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = window.innerHeight * 0.8;

      if (scrollY >= threshold && !inView) {
        controls1.start({ opacity: 0 }); // Fade out the first image
        controls2.start({ opacity: 1 }); // Fade in the second image
        setInView(true);
      } else if (scrollY < threshold && inView) {
        controls1.start({ opacity: 1 }); // Fade in the first image
        controls2.start({ opacity: 0 }); // Fade out the second image
        setInView(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [inView, controls1, controls2]);

  return (
    <div>
      <ImageComponent
        imageUrl="/images/vzory-sketch.jpg"
        inView={!inView}
        animate={controls1}
      />
      <ImageComponent
        imageUrl="/images/4.jpg"
        inView={inView}
        animate={controls2}
      />
    </div>
  );
};

export default ImageTransition;