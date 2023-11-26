import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
const ImageComponent = ({ imageUrl, inView }) => {
  return (
    <motion.img
      src={imageUrl}
      alt="Image description"
      width="1200"
      height="1000"
      className='h-full w-full absolute object-cover'
      initial={{ opacity: 0, scale: 1 }}
      animate={{
        opacity: inView ? 1 : 0,
        scale: inView ? 1 : 1,
      }}
      transition={{
        duration: 5,
        ease: [0.4, 0, 0.2, 1],
      }}
    />
  );
};

export default ImageComponent;
 