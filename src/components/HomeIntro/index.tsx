import React from 'react';
import Image from 'next/image';
import Fossa from '../../../public/fossa.jpeg';

const HomeIntro = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center md:mt-16 gap-10'>
      <div className='text-center md:text-left'>
        <h2 className='text-3xl md:text-5xl font-bold max-w-lg p-6'>Big Norte: desde 1994 operando em serviços de saneamento básico e alternativo.</h2>
      </div>
      <div>
        <Image className='object-cover w-full md:max-w-md h-64 md:h-[500px] rounded-xl' src={Fossa} alt={'Imagem da Fossa'} />
      </div>
    </div>
  );
};

export default HomeIntro;
