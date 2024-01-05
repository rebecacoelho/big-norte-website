"use client"
import Image from 'next/image';
import React from 'react';
import Logo from '../../../public/logo.png';
import styles from './footer.module.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Footer = () => {
  const router = useRouter();

  function isHomePage() {
    return window.location.pathname === '/';
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleClick = () => {
    if (!isHomePage()) {
      router.push('/');
    } else {
      scrollToTop();
    }
  };

  return (
    <div className='bg-black-custom flex flex-col md:flex-row md:justify-around items-center py-6'>
      <div className="flex justify-center relative w-52 cursor-pointer transition-transform duration-300 hover:scale-110" onClick={handleClick}>
        <Image src={Logo} alt="Logo" width={52} height={52} />
      </div>
      <div className='text-white flex flex-col md:flex-row md:gap-10 md:mt-0 mt-4'>
        <Link href='/'>
          <span className={styles.borderBottomWhite}>Início</span>
        </Link>
        <Link href='/servicos'>
          <span className={styles.borderBottomWhite}>Serviços</span>
        </Link>
        <Link href='/blog'>
          <span className={styles.borderBottomWhite}>Blog</span>
        </Link>
        <Link href='/contato'>
          <span className={styles.borderBottomWhite}>Contate-nos</span>
        </Link>
      </div>
      <div className='text-white mt-4 text-center px-4 md:mt-0'>
        <span>@ Copyright Big Norte 2023 – Developed by Rebeca Coelho</span>
      </div>
    </div>
  );
};

export default Footer;