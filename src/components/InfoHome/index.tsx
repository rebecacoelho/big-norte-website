import React from 'react';

const InfoHome = () => {
  return (
    <div className='bg-light-grey flex flex-col md:flex-row items-center justify-center py-6 md:py-10 gap-6 md:gap-16 text-center md:text-left'>
      <div className='text-center md:text-left'>
        <span className='text-3xl md:text-4xl font-bold text-primary-blue'>20+</span>
        <p className='pt-2'>Anos de Experiência</p>
      </div>
      <div className='text-center md:text-left mt-6 md:mt-0'>
        <span className='text-3xl md:text-4xl font-bold text-primary-blue'>100%</span>
        <p className='pt-2'>Satisfação do Cliente</p>
      </div>
    </div>
  );
};

export default InfoHome;
