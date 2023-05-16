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
                  Ótimo software é<br/>
                  construído com <span className='text-[#EF0178]'> incrível<br/>
                  desenvolvedores</span>
                </h1>

                <p className='mt-10 text-md md:text-xl text-center md:text-start'>Ajudamos a construir e gerenciar uma equipe de desenvolvedores <br/>de classe mundial para dar vida à sua visão</p>

                <button className='bg-[#5243C2] text-[#fff] font-semibold w-56 p-3 rounded-md mt-10'>Vamos Conversar!</button>
              </div>
              <img
                src='/img_principal.png'
                alt='Desenvolvedor Programando'
                width={696}
              />
            </div>
            {/* BOX SECUNDÁRIO */}
            <div className='flex justify-center flex-col align-middle items-center mt-64 md:mt-40'>
              <h3 className='font-bold text-[#EF0178] text-xl'>Conheça nossos Clientes</h3>
              <p className='font-light text-3xl text-center mt-6'>Esses caras estão usando nosso serviço e estão<br/>mais do que felizes.</p>
              <ul className='list-none flex flex-col md:flex-row align-middle justify-center mt-6'>
                  <li className='inline p-9 flex justify-center md:justify-normal align-middle items-center'><img src='/image 11.png' width={100}/></li>
                  <li className='inline p-9 flex justify-center md:justify-normal align-middle items-center'><img src='/image 12.png' width={130}/></li>
                  <li className='inline p-9 flex justify-center md:justify-normal align-middle items-center'><img src='/image 13.png' width={150}/></li>
                  <li className='inline p-9 flex justify-center md:justify-normal align-middle items-center'><img src='/image 14.png' width={150}/></li>
                  <li className='inline p-9 flex justify-center md:justify-normal align-middle items-center'><img src='/image 15.png' width={150}/></li>
              </ul>
            </div>

            {/* SOBRE NÓS */}
            <Element name='sobrenos' className='flex flex-col-reverse md:flex-row justify-center md:justify-evenly align-middle items-center mt-16'>
              <img src='/img.png' alt='Desenvolvedor no Foguete' width={633}/>
              <div>
                <h1 className='text-center md:text-start text-3xl md:text-5xl font-bold'>Impulsione suas agências<br/>escolhendo <span className='text-[#5243C2]'>Ninja<br/>Desenvolvedores</span></h1>
                <p className='mt-5 text-center md:text-start text-md md:text-lg'>Venha criar suas landing pages personalizadas<br/>que convertem mais visitantes<br/>do que qualquer site.</p>
                <ul className='mt-5 flex md:flex-none justify-center md:justify-normal flex-col md:flex-col items-center md:items-start'>
                  <li className='flex align-middle items-center'><img src='/ok.png' alt='Verificado' width={15} className='mr-1'/>Possibilidade de design ilimitada</li>
                  <li className='flex align-middle items-center'><img src='/ok.png' alt='Verificado' width={15} className='mr-1'/>Recursos totalmente responsivos</li>
                  <li className='flex align-middle items-center'><img src='/ok.png' alt='Verificado' width={15} className='mr-1'/>Fácil de personalizar plug-ins</li>
                </ul>
              </div>
            </Element>

            {/* SERVIÇOS */}
            <Element name="servicos" id='servicos' className='flex justify-center flex-col align-middle items-center mt-16'>
              <h3 className='font-bold text-[#EF0178] text-xl'>Nossos Serviços</h3>
              <p className='font-bold text-3xl text-center mt-6'>Determine o serviço que você precisa</p>
              <ul className='list-none flex flex-col md:flex-row align-middle justify-evenly w-auto mt-6'>
                  <li className='inline p-9 flex justify-center flex-col items-center text-center'>
                    <img src='/frame.png' width={110}/>
                    <h4 className='font-bold text-lg mt-5'>Desenvolvimento</h4>
                    <p className='mt-4'>Crie uma plataforma com a melhor e<br/>mais legal qualidade nossa.</p>
                  </li>
                  <li className='inline p-9 flex justify-center flex-col items-center text-center'>
                    <img src='/frame1.png' width={110}/>
                    <h4 className='font-bold text-lg mt-5' >UI/UX Designer</h4>
                    <p className='mt-4'>Prestamos serviços de UI/UX Design, e<br/>claro com a melhor qualidade</p>
                  </li>
                  <li className='inline p-9 flex justify-center flex-col items-center text-center'>
                    <img src='/frame2.png' width={110}/>
                    <h4 className='font-bold text-lg mt-5'>Motion Graphik</h4>
                    <p className='mt-4'>Crie uma plataforma com a melhor e<br/>mais legal qualidade nossa.</p>
                  </li>
                  <li className='inline p-9 flex justify-center flex-col items-center text-center'>
                    <img src='/frame3.png' width={110}/>
                    <h4 className='font-bold text-lg mt-5'>Melhor história do prêmio</h4>
                    <p className='mt-4'>colocamos vários prêmios por<br/>nosso desempenho</p>
                  </li>
              </ul>
            </Element>

            {/* ENTRE EM CONTATO */}
            <div className='bg-[#5243C2] rounded-xl h-72 flex items-center align-middle justify-center mt-8 md:mt-16'>
              <div className='flex items-center flex-col md:flex-row w-[100%] justify-around align-middle'>
                <div className='relative'>
                  <h3 className='text-white text-2xl md:text-2xl font-semibold text-center md:text-start'>
                    Contrate a melhor equipe de desenvolvedores e design do <br/>mundo,
                    eles se encontram aqui na Zero 27 Code!
                  </h3>
                  <img className='absolute w-16 md:w-20 right-3 md:left-[48rem] top-44 md:top-[-3rem] md:bottom-9 md:block' src='/group47.png'/>
                  <img className='absolute w-14 md:w-20 left-3 md:left-[39rem] md:top-24 md:block' src='/group48.png'/>
                </div>
                <div className='relative'>
                  <img className='absolute left-48 bottom-14 hidden md:block' src='/group46.png'/>
                  <Link to={'contato'} key={'contato'} spy={true} smooth={true}><button className='bg-[#EF0178] text-white p-5 md:p-5 mt-5 md:mt-0'>ENTRAR EM CONTATO</button></Link>
                </div>
                
              </div>
            </div>
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

          <div className='flex justify-center items-center w-[100%] pb-10'>
            <img src='/logo_027.png' width={180}/>
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
