"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Logo from '../../../public/logo.png';
import Link from 'next/link';
import { MdMenu } from 'react-icons/md';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
    <>
    <motion.div
      className='flex justify-between items-center bg-primary-blue py-5 px-4 lg:px-10'
      initial='hidden'
      animate={isMounted ? 'visible' : 'hidden'}
      variants={headerVariants}
    >
      <div>
        <Link href='/'>
          <Image width={52} src={Logo} alt='Logo da Big Norte' />
        </Link>
      </div>
      <div className='hidden lg:block'>
        <div className='flex gap-6 text-secondary-yellow'>
          <Link href='/'>
            <span className='border-b-2 border-transparent hover:border-secondary-yellow'>Início</span>
          </Link>
          <Link href='/servicos'>
            <span className='border-b-2 border-transparent hover:border-secondary-yellow'>Serviços</span>
          </Link>
          <Link href='/blog'>
            <span className='border-b-2 border-transparent hover:border-secondary-yellow'>Blog</span>
          </Link>
          <Link href='/contato'>
            <span className='border-b-2 border-transparent hover:border-secondary-yellow'>Contate-nos</span>
          </Link>
        </div>
      </div>
      <div className='lg:hidden'>
        <button onClick={toggleMenu} className='text-secondary-yellow'>
          <MdMenu className='h-8 w-8' />
        </button>
      </div>
      <div
        className={`lg:hidden fixed top-0 left-0 h-full bg-primary-blue z-50 transition-all duration-300 ease-in-out transform ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } w-64`}
      >
        <div className='flex flex-col items-center justify-center gap-6 h-full'>
          <Link href='/'>
            <span className='text-secondary-yellow py-4 cursor-pointer'>Início</span>
          </Link>
          <Link href='/servicos'>
            <span className='text-secondary-yellow py-4 cursor-pointer'>Serviços</span>
          </Link>
          <Link href='/blog'>
            <span className='text-secondary-yellow py-4 cursor-pointer'>Blog</span>
          </Link>
          <Link href='/contato'>
            <span className='text-secondary-yellow py-4 cursor-pointer'>Contate-nos</span>
          </Link>
        </div>
      </div>
    </motion.div>
  </>
  );
};

export default Header;
