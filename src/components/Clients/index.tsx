"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Vale from '../../../public/clients/vale.png'
import Porto from '../../../public/clients/porto.png'
import Normatel from '../../../public/clients/normatel.png'
import Enesa from '../../../public/clients/enesa.png'
import Penitenciaria from '../../../public/clients/penitenciario.png'
import Alfa from '../../../public/clients/alfa.png'
import Metso from '../../../public/clients/metso.png'
import Cortez from '../../../public/clients/cortez.png'
import Sanches from '../../../public/clients/sanches.png'
import Plamont from '../../../public/clients/plamont.png'
import Sucena from '../../../public/clients/sucena.png'

const Clients = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleHover = (index:any) => {
      setHoveredIndex(index);
    };
  
    const handleHoverOut = () => {
      setHoveredIndex(null);
    };
  
    const clientes = [
      { src: Vale, alt: 'Vale' },
      { src: Porto, alt: 'Porto' },
      { src: Normatel, alt: 'Normatel' },
      { src: Enesa, alt: 'Enesa' },
      { src: Penitenciaria, alt: 'Penitenciaria' },
      { src: Alfa, alt: 'Alfa' },
      { src: Metso, alt: 'Metso' },
      { src: Cortez, alt: 'Cortez' },
      { src: Sanches, alt: 'Sanches' },
      { src: Plamont, alt: 'Plamont' },
      { src: Sucena, alt: 'Sucena' },
    ];

  return (
    <div className='bg-white py-10'>
        <div>
            <h2 className='text-center font-bold text-4xl pb-6'>NOSSOS CLIENTES</h2>
        </div>
        <div className='flex flex-wrap justify-center items-center gap-20 mx-20'>
            {clientes.map((cliente, index) => (
                <div
                key={index}
                className='relative shadow-md hover:shadow-lg transition duration-300 p-4'
                >
                    <Image
                        className='h-36 w-auto transform transition duration-300 hover:scale-105'
                        src={cliente.src}
                        alt={cliente.alt}
                    />
        </div>
            ))}
        </div>
    </div>
  )
}

export default Clients