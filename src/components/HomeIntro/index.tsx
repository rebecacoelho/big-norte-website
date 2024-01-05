"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Fossa from '../../../public/fossa.jpeg';
import { motion } from 'framer-motion';

const HomeIntro = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };
  return (
    <motion.div
      initial='hidden'
      animate={isMounted ? 'visible' : 'hidden'}
      variants={headerVariants}
    >
      <div className='flex flex-col md:flex-row justify-center items-center md:mt-16 gap-10'>
        <div className='text-center md:text-left'>
          <h2 className='text-3xl md:text-5xl font-bold max-w-lg p-6'>Big Norte: desde 1994 operando em serviços de saneamento básico e alternativo.</h2>
        </div>
        <div>
          <Image className='object-cover w-full md:max-w-md h-64 md:h-[500px] rounded-xl' src={Fossa} alt={'Imagem da Fossa'} />
        </div>
      </div>
    </motion.div>
  );
};

export default HomeIntro;
