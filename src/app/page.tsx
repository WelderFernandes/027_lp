"use client";
import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scroller,
} from "react-scroll";
import { Fade, Reveal, Slide } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const navigation = [
  { name: 'Início', href: '#home', to: 'home', current: true },
  { name: 'Sobre Nós', href: '#sobrenos', to: 'sobrenos', current: false },
  { name: 'Serviços', href: '#servicos', to: 'servicos', current: false },
  // { name: 'Preços', href: '#', current: false },
  // { name: 'Depoimentos', href: '#', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-200px, -100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;


export default function Home() {
  return (
    <>
      <div className='flex justify-center'>
        <div className='container'>
          {/* MENU */}
          <header className='flex justify-center align-middle mt-5'>
            <Disclosure as="nav" className="w-[100%]">
              {({ open }) => (
                <>
                  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <img
                            className='w-52'
                            src="/logo_027.png"
                            alt="Zero 27 Code"
                          />
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="hidden md:block">
                          <div className="ml-10 flex items-center space-x-4">
                            {navigation.map((item) => (
                              <Link spy={true} smooth={true}
                                to={item.to}
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                  item.current
                                    ? 'text-[#EF0178]'
                                    : 'text-black hover:text-[#EF0178]',
                                  'rounded-md px-3 py-2 font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                          <Link spy={true} smooth={true} to={'contato'} key={'contato'} ><button className='border-[1px] rounded-md border-[#EF0178] px-8 py-3 text-[#EF0178] font-semibold hover:bg-[#EF0178] hover:text-white'>Contato</button></Link>
                        </div>
                      </div>
                      <div className="-mr-2 flex md:hidden">
                        {/* Mobile menu button */}
                        <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-[#EF0178] p-2 text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#EF0178]">
                          <span className="sr-only">Open main menu</span>
                          {open ? (
                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                          ) : (
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                          )}
                        </Disclosure.Button>
                      </div>
                    </div>
                  </div>

                  <Disclosure.Panel className="md:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                      {navigation.map((item) => (
                        <Link key={item.name} to={item.to} spy={true} smooth={true}>
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className={classNames(
                              item.current ? 'bg-[#EF0178] text-white' : 'text-black hover:bg-[#EF0178] hover:text-white',
                              'block rounded-md px-3 py-2 text-base font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </Disclosure.Button>
                        </Link>
                      ))}
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </header>

          <main>
            {/* BOX PRINCIPAL */}
            <div id='home' className='flex align-middle items-center flex-col-reverse md:flex-row justify-center md:justify-around mt-12 md:mt-24'>
              <div className='flex align-middle justify-center items-center md:items-start h-32 flex-col'>
                <h1 className='mt-60 md:mt-0 text-3xl md:text-6xl font-bold text-center md:text-start'>
                  Um ótimo <span className='text-[#5243C2]'>site</span> ou <span className='text-[#5243C2]'>sistema</span><br/>
                  é construído com <span className='text-[#EF0178]'> incríveis<br/>
                  desenvolvedores</span>
                </h1>

                <p className='mt-10 text-md md:text-xl text-center md:text-start'>Ajudamos a construir e gerenciamos uma equipe de desenvolvedores <br/>de classe mundial para dar vida à sua visão</p>

                <Link to={'contato'} key={'contato'} spy={true} smooth={true}><button className='bg-[#5243C2] text-[#fff] font-semibold w-56 p-3 rounded-md mt-10'>Vamos Conversar!</button></Link>
              </div>
              <img
                src='/img_principal.png'
                alt='Desenvolvedor Programando'
                width={696}
              />
            </div>
            {/* BOX SECUNDÁRIO */}
            {/* <div className='flex justify-center flex-col align-middle items-center mt-64 md:mt-40'>
              <h3 className='font-bold text-[#EF0178] text-xl'>Conheça nossos Clientes</h3>
              <p className='font-light text-3xl text-center mt-6'>Esses caras estão usando nosso serviço e estão<br/>mais do que felizes.</p>
              <ul className='list-none flex flex-col md:flex-row align-middle justify-center mt-6'>
                  <li className='inline p-9 flex justify-center md:justify-normal align-middle items-center'><img src='/image 11.png' width={100}/></li>
                  <li className='inline p-9 flex justify-center md:justify-normal align-middle items-center'><img src='/image 12.png' width={130}/></li>
                  <li className='inline p-9 flex justify-center md:justify-normal align-middle items-center'><img src='/image 13.png' width={150}/></li>
                  <li className='inline p-9 flex justify-center md:justify-normal align-middle items-center'><img src='/image 14.png' width={150}/></li>
                  <li className='inline p-9 flex justify-center md:justify-normal align-middle items-center'><img src='/image 15.png' width={150}/></li>
              </ul>
            </div> */}

            {/* SOBRE NÓS */}
            <Element name='sobrenos'>
              <Fade>
                <div className='flex justify-center flex-col align-middle items-center mt-64 md:mt-28'>
                  <h3 className='font-bold text-[#EF0178] text-xl'>Sobre Nós</h3>
                  <p className='font-bold text-3xl text-center mt-6 px-6'>Conheça mais sobre a nosssa empresa</p>
                </div>
              </Fade>
              <div className='grid grid-cols-1 md:grid-cols-2 md:gap-5 md:mt-8'>
                <Slide direction='left'>
                  <div className='bg-[#5243C2] rounded-xl h-72 flex items-center align-middle justify-center mt-8 text-white m-3 md:m-0'>
                    <div className='flex justify-center flex-col items-center p-5 md:p-0'>
                      <h3 className='font-bold text-xl'>Missão</h3>
                      <p className='text-center text-base font-normal mt-2 px-0 md:px-20'>Nossa missão é fornecer soluções de tecnologia personalizadas e eficazes que atendam às necessidades exclusivas de nossos clientes. Nós nos esforçamos para ser um parceiro confiável e colaborativo, trabalhando em estreita colaboração com nossos clientes para entender suas necessidades e fornecer soluções que os ajudem a alcançar seus objetivos de negócios.</p>
                    </div>
                  </div>
                </Slide>
                <Slide direction='right'>
                  <div className='bg-[#EF0178] rounded-xl h-72 flex items-center align-middle justify-center mt-8 text-white m-3 md:m-0'>
                    <div className='flex justify-center flex-col items-center p-5 md:p-0'>
                      <h3 className='font-bold text-xl'>Visão</h3>
                      <p className='text-center text-base font-normal mt-2 px-0 md:px-20'>Ser a empresa líder em soluções de tecnologia inovadoras e personalizadas, que ajudam nossos clientes a alcançar seus objetivos de negócios.</p>
                    </div>
                  </div>
                </Slide>
              </div>
              
              <div className='flex flex-col-reverse md:flex-row justify-center md:justify-evenly align-middle items-center'>
                <Slide>
                  <img src='/img.png' alt='Desenvolvedor no Foguete' width={633}/>
                </Slide>
                <Fade>
                  <div>
                    <h1 className='text-center md:text-start text-3xl md:text-5xl font-bold mt-10 md:mt-0'>Nossos<span className='text-[#5243C2]'> Valores</span></h1>
                    {/* <p className='mt-5 text-center md:text-start text-md md:text-lg'>Venha criar suas landing pages personalizadas<br/>que convertem mais visitantes<br/>do que qualquer site.</p> */}
                    <ul className='mt-5 flex md:flex-none justify-center md:justify-normal flex-col items-center md:items-start p-5 md:p-0'>
                      <li className='flex align-middle items-center'><p className='mt-5 text-center md:text-start text-md md:text-lg'><img src='/ok.png' alt='Verificado' width={20} className='mr-1 inline'/><span className='font-semibold'>Inovação:</span> Nós valorizamos a inovação e estamos sempre procurando <br/>maneiras de melhorar e aprimorar nossas soluções de tecnologia.</p></li>
                      <li className='flex align-middle items-center'><p className='mt-5 text-center md:text-start text-md md:text-lg'><img src='/ok.png' alt='Verificado' width={20} className='mr-1 inline'/><span className='font-semibold'>Qualidade:</span> Nós nos esforçamos para fornecer soluções de tecnologia de <br/>alta qualidade que atendam às necessidades de nossos clientes.</p></li>
                      <li className='flex align-middle items-center'><p className='mt-5 text-center md:text-start text-md md:text-lg'><img src='/ok.png' alt='Verificado' width={20} className='mr-1 inline'/><span className='font-semibold'>Colaboração:</span> Nós acreditamos na importância da colaboração e trabalhamos<br/> em estreita colaboração com nossos clientes para entender suas necessidades<br/> e fornecer soluções personalizadas.</p></li>
                      <li className='flex align-middle items-center'><p className='mt-5 text-center md:text-start text-md md:text-lg'><img src='/ok.png' alt='Verificado' width={20} className='mr-1 inline'/><span className='font-semibold'>Integridade:</span> Nós valorizamos a integridade e agimos com honestidade e <br/>transparência em todas as nossas interações com nossos clientes e parceiros.</p></li>
                      <li className='flex align-middle items-center'><p className='mt-5 text-center md:text-start text-md md:text-lg'><img src='/ok.png' alt='Verificado' width={20} className='mr-1 inline'/><span className='font-semibold'>Responsabilidade:</span> Nós assumimos a responsabilidade por nossas ações e <br/>trabalhamos para garantir que nossas soluções de tecnologia tenham um <br/>impacto positivo em nossos clientes e na sociedade como um todo.</p></li>
                    </ul>
                  </div>
                </Fade>
              </div>
            </Element>

            {/* SERVIÇOS */}
            <Element name="servicos" id='servicos' className='flex justify-center flex-col align-middle items-center mt-16'>
              <Fade>
                <h3 className='font-bold text-[#EF0178] text-xl'>Nossos Serviços</h3>
                <p className='font-bold text-3xl text-center mt-6'>Temos a solução exata para sua empresa</p>
              </Fade>
              <Reveal keyframes={customAnimation}>
                <ul className='list-none grid grid-cols-1 md:grid-cols-3 gap-8 w-auto mt-6'> 
                    <li className='inline p-9 flex justify-start flex-col items-center text-center'>
                      <img src='/frame.png' width={110}/>
                      <h4 className='font-bold text-lg mt-5'>Desenvolvimento</h4>
                      <p className='mt-4'>Desenvolvemos websites, sistemas e<br/> landing page gerenciáveis.</p>
                    </li>
                    <li className='inline p-9 flex justify-start flex-col items-center text-center'>
                      <img src='/frame1.png' width={110}/>
                      <h4 className='font-bold text-lg mt-5' >UI/UX Designer</h4>
                      <p className='mt-4'>Fazemos com que o usuário tenha a<br/> melhor experiência de interação com<br/> sua empresa.</p>
                    </li>
                    <li className='inline p-9 flex justify-start flex-col items-center text-center'>
                      <img src='/frame2.png' width={110}/>
                      <h4 className='font-bold text-lg mt-5'>Responsividade</h4>
                      <p className='mt-4'>Navegue em seu website, sistema ou<br/> landing page pelo celular, tablet, <br/>computador, entre outros dispositivos...</p>
                    </li>
                    {/* <li className='inline p-9 flex justify-start flex-col items-center text-center'>
                      <img src='/frame3.png' width={110}/>
                      <h4 className='font-bold text-lg mt-5'>Troféu</h4>
                      <p className='mt-4'>Nossa maior vitória, é fazer parte do <br/>sucesso de sua empresa.</p>
                    </li> */}
                </ul>
                </Reveal>
            </Element>

            {/* ENTRE EM CONTATO */}
            <Slide cascade>
              <div className='bg-[#5243C2] rounded-xl h-72 flex items-center align-middle justify-center mt-8 md:mt-16 m-3 md:m-0'>
                <div className='flex items-center flex-col md:flex-row w-[100%] justify-around align-middle'>
                  <div className='relative'>
                    <Fade cascade>
                      <h3 className='text-white text-2xl md:text-2xl font-semibold text-center md:text-start'>
                        Entre em contato conosco agora mesmo,<br/>
                        e faça seu ORÇAMENTO!
                      </h3>
                    </Fade>
                    <img className='absolute w-16 md:w-20 right-3 md:left-[48rem] top-44 md:top-[-3rem] md:bottom-9 md:block' src='/group47.png'/>
                    <img className='absolute w-14 md:w-20 left-3 md:left-[39rem] md:top-24 md:block' src='/group48.png'/>
                  </div>
                  <div className='relative'>
                    <img className='absolute left-48 bottom-14 hidden md:block' src='/group46.png'/>
                    <Fade cascade>
                      <Link to={'contato'} key={'contato'} spy={true} smooth={true}><button className='bg-[#EF0178] text-white p-5 md:p-5 mt-5 md:mt-0'>ENTRAR EM CONTATO</button></Link>
                    </Fade>
                  </div>
                  
                </div>
              </div>
            </Slide>
          </main>
        </div>
      </div>
      {/* RODAPÈ */}
      <Element name="contato" className='bg-[#0C111F] mt-16 flex justify-center'>
        <div className='container relative'>
          <div className='absolute right-28 top-48 hidden md:block'>
            <img src='/group47.png'/>
          </div>
          <div className='flex justify-center text-white flex-col items-center pb-20'>
            <h3 className='text-2xl md:text-3xl font-light pt-24'>Entre em contato conosco</h3>
            <p className='text-sm md:text-base text-center font-light pt-6 text-gray-400'>Ao entrar em contato, você aceita nossa política de privacidade.</p>
            <div className='flex flex-col md:flex-row justify-center md:w-[100%] pb-2 pt-8'>
              <div className='flex flex-col md:flex-col items-center md:items-start md:w-[30%] mx-3'>
                  <input type='text' name='nome' placeholder='Nome' className='bg-slate-800 text-white p-4 w-full my-2'/>
                  <input type='text' name='telefone' placeholder='Telefone' className='bg-slate-800 text-white p-4 w-full my-2'/>
                  <input type='text' name='email' placeholder='E-mail' className='bg-slate-800 text-white p-4 w-full my-2'/>
              </div>
              <div className='flex justify-center md:w-[30%] mx-3 '>
                <textarea name='mensagem' placeholder='Mensagem' className='bg-slate-800 w-[100%] p-1 my-2'></textarea>
              </div>
            </div>
            <button className='bg-[#5243C2] p-4 my-2 text-white'>Enviar Mensagem</button>
            
          </div>

          <div className='absolute bottom-44 left-12 hidden md:block'>
            <img src='/group48.png'/>
          </div>

          <div className='flex flex-col justify-center items-center w-[100%] pb-10'>
            <img src='/logo_027.png' width={180}/>
            <p className='text-white text-center mt-4'>© Zero 27 Code 2023<br/>
            Todos os direitos reservados.</p>
            {/* <ul className='list-none flex align-middle justify-center text-white'>
              <li className='inline p-3'>Inicio</li>
              <li className='inline p-3'>Sobre Nós</li>
              <li className='inline p-3'>Serviços</li>
              <li className='inline p-3'>Preços</li>
              <li className='inline p-3'>Depoimentos</li>
            </ul> */}
          </div>
        </div>
        
      </Element>
    </>
    
  )
}
