import React from 'react';
import Image from 'next/image';
import FossaPost from '../../../public/fossa-post.png';
import LimpezaPost from '../../../public/limpeza-post.png';
import EfluentePost from '../../../public/efluente-post.png';
import SolucoesPost from '../../../public/solucoes-post.jpeg';
import HidraulicoPost from '../../../public/hidraulico-post.png';
import Link from 'next/link';

const BlogContainer = () => {
  return (
    <div className='bg-light-grey'>
      <div className='flex flex-col md:flex-row justify-center gap-16 p-12'>
        <div>
          <Link href='/blog/fossa' className='max-w-sm bg-white flex flex-col justify-center p-8'>
            <Image className='h-64 mx-6 object-cover self-center mb-12' src={FossaPost} alt='Post sobre Fossas' />
            <p className='font-semibold text-2xl pb-28'>A Importância Vital da Limpeza de Fossa: Mantendo seu Ambiente Saudável e Funcional</p>
            <span className='text-black font-semibold hover:text-secondary-yellow hover:scale-105 hover:ml-1 transition duration-300 transform-gpu'>Leia Mais {'->'}</span>
          </Link>
        </div>
        <div className='bg-light-grey flex flex-col gap-10'>
          <div className='flex items-center gap-4'>
            <Link href='/blog/banheiros'>
              <div className='flex items-center gap-4 transition-transform hover:scale-105'>
                <div>
                  <Image src={HidraulicoPost} alt='Post sobre banheiros químicos' className='object-cover w-32 h-32' />
                </div>
                <div>
                  <p className='text-lg font-semibold max-w-xs'>Banheiros químicos na construção civil</p>
                </div>
              </div>
            </Link>
          </div>

          <div className='flex items-center gap-4'>
            <Link href='/blog/saneamento'>
              <div className='flex items-center gap-4 transition-transform hover:scale-105'>
                <div>
                  <Image src={SolucoesPost} alt='Post sobre saneamanto básico' className='object-cover w-32 h-32' />
                </div>
                <div>
                  <p className='text-lg font-semibold max-w-xs'>Nós temos a solução que você precisa em saneamanto básico</p>
                </div>
              </div>
            </Link>
          </div>

          <div className='flex items-center gap-4'>
            <Link href='/blog/efluentes'>
              <div className='flex items-center gap-4 transition-transform hover:scale-105'>
                <div>
                  <Image src={EfluentePost} alt="Post sobre remoção de efluentes e resíduos" className='object-cover w-32 h-32' />
                </div>
                <div>
                  <p className="text-lg font-semibold max-w-xs">Remoção de efluentes e resíduos</p>
                </div>
              </div>
            </Link>
          </div>

          <div className='flex items-center gap-4'>
            <Link href='/blog/limpeza'>
              <div className='flex items-center gap-4 transition-transform hover:scale-105'>
                <div>
                  <Image src={LimpezaPost} alt="Post sobre limpeza" className='object-cover w-32 h-32' />
                </div>
                <div>
                  <p className="text-lg font-semibold max-w-xs">NÃO DEIXE A LIMPEZA PARA DEPOIS!</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContainer;
