"use client"
import React from 'react'
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const testimonialsData = [
  {
    id: 1,
    name: 'Nikarcia Rios',
    content: 'Empresa competente em pontualidade e qualidade. Excelente atendimento 👏🏽👏🏽👏🏽'
  },
  {
    id: 2,
    name: 'Raniery Mendes',
    content: 'Empresa maravilhosa, atendimento de primeira qualidade.'
  },
  {
    id: 3,
    name: 'Pádua Weber',
    content: 'Empresa muito competente e profissional! Parabéns!'
  },
  {
    id: 4,
    name: 'Ivan Ferreira',
    content: 'Empresa com gente competente, capacitada e gestão de Ponta. Estão de parabéns!'
  },
];

const Testimony = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const testimonialsPerPage = 2;
    const totalPages = Math.ceil(testimonialsData.length / testimonialsPerPage);
    const indexOfLastTestimonial = currentPage * testimonialsPerPage;
    const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialsPerPage;
    const currentTestimonials = testimonialsData.slice(indexOfFirstTestimonial, indexOfLastTestimonial);
  
    const handlePrevPage = () => {
      setCurrentPage((prevPage) => prevPage - 1);
    };
  
    const handleNextPage = () => {
      setCurrentPage((prevPage) => prevPage + 1);
    };

    
  return (
    <div>
         <div className='py-12'>
            <h3 className='text-center font-bold text-4xl pb-2'>DEPOIMENTOS</h3>
            <p className='text-center'>CLIENTES SATISFEITOS</p>
        </div>
        <div className="py-8 mx-6">
            <div className="max-w-4xl mx-auto">
                <div className="grid gap-6 md:grid-cols-2">
                    {currentTestimonials.map((testimonial) => (
                        <div key={testimonial.id} className="border p-6 rounded-md bg-white">
                        <p className="font-bold pb-4 text-xl">{testimonial.name}</p>
                        <p className="text-gray-600 mb-2">{testimonial.content}</p>
                        </div>
                    ))}
                </div>
                {totalPages > 1 && (
                 <div className="flex justify-end mt-4 space-x-4">
                    {currentPage > 1 && (
                    <button onClick={handlePrevPage} className="bg-white p-2 rounded-full">
                        <FaChevronLeft className="h-5 w-5 text-black" />
                    </button>
                    )}
                    {currentPage < totalPages && (
                    <button onClick={handleNextPage} className="bg-black p-2 rounded-full">
                        <FaChevronRight className="h-5 w-5 text-white" />
                    </button>
                    )}
               </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Testimony