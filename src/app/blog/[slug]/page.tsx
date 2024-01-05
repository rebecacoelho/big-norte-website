"use client"
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Fossa from '../../../../public/fossa-post.png';
import Limpeza from '../../../../public/limpeza-post.png';
import Efluente from '../../../../public/efluente-post.png';
import Solucoes from '../../../../public/solucoes-post.jpeg';
import Hidraulico from '../../../../public/hidraulico-post.png';

import Link from 'next/link';

const Post = () => {
  const slug = usePathname()

  const getPostContent = (slug: string | string[] | undefined) => {
    let content = {};
    switch (slug) {
      case '/blog/fossa':
        content = {
          image: Fossa,
          text: (
            <div className='md:mx-40'>
              <h1 className='font-bold text-center text-2xl p-6'>
                A Importância Vital da Limpeza de Fossa: Mantendo seu Ambiente Saudável e Funcional
              </h1>
              <p className='my-4 	text-justify opacity-60 text-lg'>
                A Importância Vital da Limpeza de Fossa: Mantendo seu Ambiente Saudável e Funcional. A limpeza de fossa é uma tarefa muitas vezes negligenciada, mas que desempenha um papel fundamental na manutenção da higiene, saúde e funcionalidade de um ambiente. Embora possa passar despercebida, sua relevância não pode ser subestimada, já que afeta diretamente a qualidade de vida de todos os envolvidos.
              </p>
              <p className='my-4 text-justify opacity-60 text-lg'>
              A limpeza de fossa é uma tarefa muitas vezes negligenciada, mas que desempenha um papel fundamental na manutenção da higiene, saúde e funcionalidade de um ambiente. Embora possa passar despercebida, sua relevância não pode ser subestimada, já que afeta diretamente a qualidade de vida de todos os envolvidos.
              </p>
              <h1 className='font-bold text-2xl my-4'>
                A Fossa Séptica e seu Funcionamento              
              </h1>
              <p className='my-4 text-justify opacity-60 text-lg'>A fossa séptica é um sistema de tratamento de esgoto comum em áreas rurais e suburbanas,
                onde não há acesso à rede de esgoto municipal. Ela trabalha de maneira eficaz na decomposição
                de resíduos orgânicos, separando sólidos e líquidos e permitindo a filtragem do líquido
                resultante para ser absorvido pelo solo.
              </p>
              <h1 className='font-bold text-2xl my-4'>
                Os Benefícios da Limpeza de Fossa              
              </h1>
              <p className='my-4 text-justify opacity-60 text-lg'>Prevenção de Entupimentos: O acúmulo de resíduos pode levar a obstruções, resultando em backups desagradáveis de esgoto em pias, banheiros e ralos. A limpeza regular previne tais entupimentos, garantindo o fluxo adequado.</p>
              <p className='tmy-4 text-justify opacity-60 text-lg'>Proteção da Saúde: Uma fossa não limpa pode se tornar um criadouro de bactérias, germes e doenças. O vazamento desses microrganismos nocivos para o ambiente pode causar riscos à saúde de humanos e animais.</p>
              <p className='my-4 text-justify opacity-60 text-lg'>Preservação do Meio Ambiente: Fossas mal conservadas podem contaminar o solo e a água subterrânea com poluentes, afetando negativamente</p>
              <h1 className='font-bold text-2xl'>
                Frequência Recomendada          
              </h1>
              <p className="pl-4 border-l-4 border-black my-4 text-justify opacity-60 text-lg">A frequência ideal de limpeza de fossa varia com base no tamanho da família, do uso do sistema e do volume de água consumido. Geralmente, é aconselhável realizar a limpeza a cada 6 meses a 1 ano.</p>
              <p className='my-4 text-justify opacity-60 text-lg'>A limpeza de fossa é um investimento valioso na manutenção da saúde, meio ambiente e funcionalidade do seu sistema de tratamento de esgoto. Evitar problemas de entupimento, proteger a saúde da família e preservar o ecossistema local são apenas alguns dos benefícios que a limpeza regular proporciona. Portanto, não subestime a importância desse procedimento e mantenhaum cronograma adequado de limpeza de fossa para desfrutar de um ambiente saudável e funcional.</p>
            </div>
          ),
        };
        break;
      case '/blog/banheiros':
        content = {
          image: Hidraulico, 
          text: (
            <div className='md:mx-40'>
              <h1 className='font-bold text-center text-2xl p-6'>
                Banheiros químicos na construção civil              
              </h1>
              <p className='my-4 	text-justify opacity-60 text-lg'>
                Banheiros hidráulicos oferecem sistemas de descarga que mantêm o ambiente limpo e livre de odores. Além disso, eles acompanham compartimentos separados, incluindo pias e vasos sanitários de qualidade, oferecendo o conforto de um banheiro convencional no local de trabalho e proporcionando um espaço agradável e saudável para todos. Pensando nisso, optar por banheiros hidráulicos em canteiros de obras não é apenas uma decisão prática, mas um investimento no bem-estar e na produtividade de todos.
              </p>
              <p className='my-4 text-justify opacity-60 text-lg'>
                Banheiros hidráulicos oferecem sistemas de descarga que mantêm o ambiente limpo e livre de odores.😷
              </p>
              <p className='my-4 text-justify opacity-60 text-lg'>Além disso, eles acompanham compartimentos separados, incluindo pias e vasos sanitários de qualidade, oferecendo o conforto de um banheiro convencional no local de trabalho e proporcionando um espaço agradável e saudável para todos.🫡🚽</p>
        
              <p className='my-4 text-justify opacity-60 text-lg'>Pensando nisso, optar por banheiros hidráulicos em canteiros de obras não é apenas uma decisão prática, mas um investimento no bem-estar e na produtividade de todos.😉👍🏼.</p>
              <p className='tmy-4 text-justify opacity-60 text-lg'>Fale conosco e faça a escolha certa no melhor padrão de qualidade e conforto para o seu ambiente de trabalho!🫵🏼</p>
            </div>
          ),
        };
        break;
      case '/blog/saneamento':
        content = {
          image: Solucoes, 
          text: (
            <div className='md:mx-40'>
              <h1 className='font-bold text-center text-2xl p-6'>
                Nós temos a solução que você precisa em saneamento básico.       
              </h1>
              <p className='my-4 	text-justify opacity-60 text-lg'>
                Atuamos desde 1994 com o compromisso de atender vários setores operacionais, sempre buscando nos certificar que boas práticas de sustentabilidade estão sendo realizadas através dos nossos serviços.😉
              </p>
              <p className='my-4 text-justify opacity-60 text-lg'>Saiba mais falando conosco.📞</p>
            </div>
          ),
        };
        break;
      case '/blog/efluentes':
        content = {
          image: Efluente, 
          text: (
            <div className='md:mx-40'>
              <h1 className='font-bold text-center text-2xl p-6'>
                Remoção de efluentes e resíduos              
              </h1>
              <p className='my-4 	text-justify opacity-60 text-lg'>
                Ao remover efluentes e resíduos, estamos contribuindo para a redução dos riscos de contaminação da água e, consequentemente, protegendo a vida marinha. 
              </p>
              <p className='my-4 text-justify opacity-60 text-lg'>
                A exposição a substâncias nocivas pode levar a impactos na biodiversidade, causando desequilíbrios e alterações na variedade de espécies nos oceanos. Ao mantermos o compromisso com a limpeza de efluentes, estamos agindo com responsabilidade ambiental e garantindo um futuro mais sustentável para as próximas gerações.</p>
              <p className='my-4 text-justify opacity-60 text-lg'>Esteja ao nosso lado nessa causa! Solicite uma limpeza e escolha a Big Norte como sua parceira em prol da sustentabilidade. </p>
            </div>
          ),
        };
        break;
      case '/blog/limpeza':
        content = {
          image: Limpeza, 
          text: (
            <div className='md:mx-40'>
              <h1 className='font-bold text-center text-2xl p-6'>
                NÃO DEIXE A LIMPEZA PARA DEPOIS!              
              </h1>
              <p className='my-4 	text-justify opacity-60 text-lg'>
                Não deixe a qualidade e a higiene dos banheiros químicos em segundo plano.⚠️              
              </p>
              <p className='my-4 text-justify opacity-60 text-lg'>
                Conte com nossa expertise em limpeza e locação e tenha a satisfação de um ambiente impecável!✅              
              </p>
              <p className='my-4 text-justify opacity-60 text-lg'>Venha falar conosco e fazer o seu orçamento. Em nossa equipe você pode confiar!😉🫱🏼‍🫲🏻</p>
            </div>
          ),
        };
        break;
      default:
        content = {
          image: null, 
          text: 'Conteúdo não encontrado.',
        };
        break;
    }
    return content;
  };

  const postContent: any = getPostContent(slug);

  return (
    <div>
      <div className='p-12'>
        <Link href='/blog'>{'<'} Voltar</Link>
      </div>
      {postContent.image && (
        <div className='flex justify-center'>
          <Image className='object-cover w-80 h-80' src={postContent.image} alt='' />
        </div>
      )}
      <div className='p-8'>
        {postContent.text}
      </div>
    </div>
  );
};

export default Post;
