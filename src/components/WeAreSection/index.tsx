import React from 'react';
import Carro from '../../../public/carro.jpeg';
import Fossa from '../../../public/fossa.jpeg';
import Image from 'next/image';

const WeAreSection = () => {
  return (
    <div className="grid my-4 gap-4 text-center">   
      <div className="md:col-span-1 text-primary-blue text-3xl font-semibold flex justify-center items-center">
        <p className="max-w-lg mx-4">
          Somos referência em qualidade e disponibilidade de serviços, oferecendo uma ampla gama de equipamentos e serviços para atender às necessidades de nossos clientes.
        </p>
      </div>
    </div>
  );
};

export default WeAreSection;
