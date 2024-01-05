import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const ContactSection = () => {

  return (
    <div className='bg-black-custom text-white flex flex-col md:flex-row justify-around p-6 md:py-12' style={{ opacity: 0.98 }}>
      <div className='md:mr-6'>
        <h2 className='font-bold text-4xl mb-6 md:mb-12'>Contate-nos</h2>
        <div className='flex gap-4 md:gap-6'>
          <a href='https://www.facebook.com/profile.php?id=100066847132525' target='_blank' rel='noopener noreferrer'>
            <FaFacebook className='text-white' size={24} />
          </a>
          <a href='https://www.instagram.com/bignorteecosolucoes/' target='_blank' rel='noopener noreferrer'>
            <FaInstagram className='text-white' size={24} />
          </a>
          <a href='https://www.linkedin.com/company/big-norte-loca%C3%A7%C3%B5es-servi%C3%A7os-e-ecosolu%C3%A7%C3%B5es/?viewAsMember=true' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin className='text-white' size={24} />
          </a>
        </div>
      </div>
      <div className='flex flex-col gap-6 md:gap-8'>
        <div>
          <span className='opacity-60'>Telefone</span>
          <p>(98) 3245-5933</p>
        </div>
        <div>
          <span className='opacity-60'>Endereço</span>
          <p>R. Dezesseis de Julho, 17 - São Cristovao, São Luís - MA, 65055-180,</p>
          <p>Brasil São Luís-MA, 65055-180, BR</p>        
        </div>
        <div>
          <span className='opacity-60'>E-mail</span>
          <p>comercial.bignorte@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
