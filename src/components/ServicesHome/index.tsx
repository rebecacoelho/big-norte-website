import { FaTools, FaDumpster, FaTruck, FaClipboardCheck } from 'react-icons/fa';
import { FaToiletPortable } from 'react-icons/fa6';
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link';


const Square = ({ Icon, text }: any) => {
  return (
    <div className="w-60 h-40 bg-white m-4 flex flex-col items-center justify-center 
    transition duration-300 ease-in-out transform hover:scale-110 hover:bg-yellow-300 cursor-pointer">
      <Icon className="w-12 h-12 mb-2 text-black" />
      <span className='text-center pt-2'>{text}</span>
    </div>
  );
};

const ServicesHome = () => {
  return (
    <div className='py-10 bg-light-grey'>
        <div>
            <h3 className='text-center font-bold text-4xl pb-6'>NOSSOS SERVIÇOS</h3>
        </div>
        <div className="flex flex-wrap justify-center">
            <Square Icon={FaTools} text="Locação de Equipamentos" />
            <Square Icon={FaToiletPortable} text="Banheiros Químicos e Hidráulicos" />
            <Square Icon={FaDumpster} text="Limpeza de Fossas" />
            <Square Icon={FaClipboardCheck} text="Higienização e Transporte de Banheiros Químicos" />
            <Square Icon={FaTruck} text="Caminhão Pipa e Caçamba Estacionária" />
        </div>
        <div className='flex gap-2 items-center justify-end mx-20 pt-4'>
            <Link href='servicos'>
                <span>SAIBA MAIS</span>
            </Link>
            <FaArrowRight />
        </div>
    </div>
  );
};

export default ServicesHome;
