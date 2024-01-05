"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Cliente from '../../../public/mascote.png';
import { motion } from 'framer-motion';

const AboutUs = () => {
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
      <div className='mt-16 text-center'>
        <div className='font-bold'>
          <h2 className='text-3xl md:text-4xl mb-3'>QUEM SOMOS</h2>
          <span>Buscamos sempre a excelência!</span>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 mt-6 md:mt-10'>
          <div className='max-w-md'>
            <Image src={Cliente} alt='Client da Big Norte' />
          </div>
          <div className='text-lg md:text-2xl max-w-md'>
            <p className='mb-6'>
              Atuamos desde 1994, oferecendo serviços de coleta e transporte de efluentes sanitários em todo o Maranhão.
            </p>
            <p>
              Com o compromisso de atender vários setores operacionais, sempre buscamos nos certificar que boas práticas de sustentabilidade estão sendo realizadas através dos nossos serviços.
            </p>
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-center mx-4 md:mx-20 mt-8 my-12 gap-8 md:gap-16'>
          <div className='max-w-xs'>
            <h4 className='text-lg md:text-2xl mb-4 text-primary-blue'>VISÃO</h4>
            <ul className='text-left'>
              <li>Ser referência em saneamento básico no Maranhão.</li>
            </ul>
          </div>
          <div className='max-w-xs'>
            <h4 className='text-lg md:text-2xl mb-4 text-primary-blue'>MISSÃO</h4>
            <ul className='text-left'>
              <li>Atender com qualidade e segurança a necessidade de saneamento básico nas empresas em geral, buscando a excelência através dos pilares ESG.</li>
            </ul>
          </div>
          <div className='max-w-xs'>
            <h4 className='text-lg md:text-2xl mb-4 text-primary-blue'>VALORES</h4>
            <ul className='text-left'>
              <li>Pontualidade</li>
              <li>Prontidão</li>
              <li>Qualidade</li>
              <li>Honestidade</li>
              <li>Segurança</li>
              <li>Respeito às pessoas.</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
