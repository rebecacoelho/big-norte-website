"use client"
import { useEffect, useState } from 'react';
import { FaTools, FaDumpster, FaClipboardCheck, FaBroom } from 'react-icons/fa';
import { FaToiletPortable, FaTruckDroplet } from 'react-icons/fa6';
import Image from 'next/image';
import Equipamentos from '../../../public/carro.jpeg'
import Banheiros from '../../../public/banheiro.jpeg'
import Fossas from '../../../public/fossa.jpeg'
import Pipa from '../../../public/pipa.png'
import Higienizacao from '../../../public/higienizacao.jpeg'
import Estacionaria from '../../../public/estacionaria.jpeg'
import { motion } from 'framer-motion';

const Square = ({ Icon, text, onClick }: any) => {
  return (
    <div className="w-60 h-40 bg-white m-6 flex flex-col items-center justify-center 
    transition duration-300 ease-in-out transform hover:scale-110 hover:bg-yellow-300 cursor-pointer"
    onClick={onClick}>
      <Icon className="w-12 h-12 mb-2 text-black" />
      <span className='text-center pt-2'>{text}</span>
    </div>
  );
};

const ServicesSection = () => {
  const [selectedContent, setSelectedContent] = useState({
    title: "Locação de Equipamentos",
    subtitle: " Com a locação de equipamentos, você pode alugar o que precisa por um determinado período de tempo, em vez de comprá-lo. Isso pode ajudá-lo a economizar dinheiro nos custos de compra, manutenção e depreciação.",
    image: Equipamentos
  });

  const [isMounted, setIsMounted] = useState(false);

  const handleSquareClick = (title: string, subtitle: string, image: any) => {
    setSelectedContent({
      title,
      subtitle,
      image
    });
  };

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
    <div className='flex justify-center py-10 text-black'>
        <h1 className='font-bold text-4xl'>SERVIÇOS</h1>
    </div>
    <div className='py-10 bg-light-grey'>
    <div className="flex flex-col lg:flex-row items-center justify-center">
      <div className='max-w-sm bg-white flex flex-col p-8'>
        <Image className='h-52 mx-6 object-cover self-center mb-8' src={selectedContent.image} alt='Serviços'/>
        <p className='font-semibold text-2xl pb-6'>{selectedContent.title}</p>
        <p className='opacity-60 text-gray-800'>{selectedContent.subtitle}</p>
      </div>
      <div className="max-w-4xl flex flex-col md:flex-row">
        <div className="flex flex-col md:w-1/2">
          <div className="px-2">
            <Square Icon={FaTools} text="Locação de Equipamentos" onClick={() =>
              handleSquareClick("Locação de Equipamentos", "Com a locação de equipamentos, você pode alugar o que precisa por um determinado período de tempo, em vez de comprá-lo. Isso pode ajudá-lo a economizar dinheiro nos custos de compra, manutenção e depreciação.", Equipamentos)}
            />
          </div>
            <div className="px-2">
              <Square Icon={FaToiletPortable} text="Banheiros Químicos e Hidráulicos" onClick={() =>
                handleSquareClick("Banheiros Químicos e Hidráulicos", "São uma ótima maneira de fornecer acesso a saneamento básico em locais remotos ou onde não há instalações sanitárias. Os banheiros químicos são portáteis e podem ser facilmente transportados e instalados, enquanto os banheiros hidráulicos são conectados à rede de água e esgoto.", Banheiros)}
              />
            </div>
            <div className="px-2">
              <Square Icon={FaBroom} text="Limpeza de Fossas" onClick={() =>
                handleSquareClick("Limpeza de Fossas", "Limpamos fossas de todos os tamanhos e fazemos a remoção de todo o material sólido e líquido, oferecendo serviço rápido e de qualidade.", Fossas)}
              />
            </div>
        </div>
        <div className="flex flex-col md:w-1/2">
          <div className="flex flex-col">
            <div className="px-2">
              <Square Icon={FaClipboardCheck} text="Caminhão de higienização e transporte de banheiros químicos" onClick={() =>
                handleSquareClick("Caminhão de higienização e transporte de banheiros químicos", "São equipados com todos os equipamentos necessários para higienização e transporte de banheiros químicos, contando com profissionais são treinados para realizar o serviço de forma rápida e segura.", Higienizacao)}
              />
            </div>
            <div className="px-2">
              <Square Icon={FaTruckDroplet} text="Caminhão Pipa" onClick={() =>
                handleSquareClick("Caminhão Pipa", "Nosso caminhão pipa é a solução perfeita para obras, eventos e outros locais onde é necessário o transporte e distribuição de água, atendendo sua demanda e mantendo seu empreendimento sempre abastecido. O equipamento tem capacidade de 10m³ além de possuir sistema de umectação para lavagem de vias e sistema de combate a incêndio.", Pipa)}
              />
            </div>
            <div className="px-2">
              <Square Icon={FaDumpster} text="Caçamba Estacionária" onClick={() =>
                handleSquareClick("Caçamba Estacionária", "Essa é a solução perfeita para obras, reformas e outros locais onde é necessário o descarte de resíduos. Nossas caçambas são de diversos tamanhos e atendem às necessidades de qualquer projeto, sendo entregues e retiradas no dia e horário que você precisar", Estacionaria)}
              />
            </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
  );
};

export default ServicesSection;
