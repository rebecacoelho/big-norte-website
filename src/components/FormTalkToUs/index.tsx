"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FormTalkToUs = () => {
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
      <div className='flex flex-col justify-center items-center'>
        <div className='py-8 w-full md:w-9/12 pl-3 md:pl-0 ml-0 md:ml-14'>
          <h1 className='font-bold text-2xl md:text-4xl mb-4'>FALE CONOSCO</h1>
          <p className="text-center md:text-left">Nossa equipe está disponível para atender a sua demanda, garantindo a excelência no serviço e qualidade no saneamento.</p>
        </div>
        <div className="flex flex-col w-full md:w-9/12 md:flex-row justify-center items-baseline m-4 md:m-8">
          <div className='w-full md:w-1/2 px-6'>
            <form className="space-y-5">
              <div className="flex flex-col">
                <input
                  type="text"
                  id="nome"
                  className="rounded px-5 py-3 w-full bg-secondary-yellow opacity-75 placeholder:text-black"
                  placeholder="Nome"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="email"
                  id="email"
                  className="rounded px-5 py-3 w-full bg-secondary-yellow opacity-75 placeholder:text-black"
                  placeholder="Email"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  id="empresa"
                  className="rounded px-5 py-3 w-full bg-secondary-yellow opacity-75 placeholder:text-black"
                  placeholder="Empresa"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  id="cidade"
                  className="rounded px-5 py-3 w-full bg-secondary-yellow opacity-75 placeholder:text-black"
                  placeholder="Cidade"
                />
              </div>
            </form>
          </div>

          <div className="w-full md:w-1/2 px-6 mt-4 md:mt-0 space-y-5">
            <div className="flex flex-col">
              <input
                type="tel"
                id="telefone"
                className="rounded px-5 py-3 w-full bg-secondary-yellow opacity-75 placeholder:text-black"
                placeholder="Telefone"
              />
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                id="assunto"
                className="rounded px-5 py-3 w-full bg-secondary-yellow opacity-75 placeholder:text-black"
                placeholder="Assunto"
              />
            </div>
            <div className="flex flex-col">
              <textarea
                id="mensagem"
                className="rounded px-5 py-3 h-40 resize-none w-full bg-secondary-yellow opacity-75 placeholder:text-black"
                placeholder="Sua Mensagem"
              ></textarea>
            </div>
            <button className="bg-primary-blue transition duration-300 ease-in-out hover:bg-blue-800 text-secondary-yellow py-2 px-6 rounded-md w-full">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FormTalkToUs;
