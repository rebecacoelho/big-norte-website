import React from 'react';
import ReboqueImg from '../../../public/reboque.jpeg';
import Image from 'next/image';

const Reboque = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center gap-6 md:gap-16 items-center py-6 md:py-12 text-center md:text-left'>
      <div className='w-full md:w-80 h-80 relative'>
        <div className="absolute inset-0">
          <Image className='object-cover w-full h-full' src={ReboqueImg} alt={''} layout="fill" />
        </div>
      </div>
      <div className='mt-6 md:mt-0'>
        <div>
          <h3 className='font-bold text-xl md:text-2xl max-w-lg pb-4'>Serviços de Reboque - Auto Socorro - Guincho em São Luís</h3>
        </div>
        <div className='max-w-lg'>
          <p>Somos sua escolha confiável para assistência em reboque e auto socorro em São Luís. Nossa equipe experiente está pronta para atender suas necessidades de transporte de veículos de forma rápida e eficiente. Sua segurança é nossa prioridade. Conte conosco para solucionar problemas com seu veículo. Além disso, a Big Norte garante que você tenha a assistência de que precisa.</p>
        </div>
        <div className='pt-6 md:pt-10'>
          <button className='bg-primary-blue p-3 md:p-4 rounded-xl transition duration-300 ease-in-out hover:bg-blue-800'>
            <span className='text-secondary-yellow'>Entre em contato</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reboque;
