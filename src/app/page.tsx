"use client";
import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Início', href: '#', current: true },
  { name: 'Sobre Nós', href: '#', current: false },
  { name: 'Serviços', href: '#', current: false },
  { name: 'Preços', href: '#', current: false },
  { name: 'Depoimentos', href: '#', current: false },
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
                              <a
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
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                          <button className='border-[1px] rounded-md border-[#EF0178] px-8 py-3 text-[#EF0178] font-semibold hover:bg-[#EF0178] hover:text-white'>Contato</button>
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
            <div className='flex justify-center align-middle items-center justify-around mt-24'>
              <div className='flex align-middle justify-center h-32 flex-col'>
                <h1 className='text-6xl font-bold'>
                  Ótimo software é<br/>
                  construído com <span className='text-[#EF0178]'> incrível<br/>
                  desenvolvedores</span>
                </h1>

                <p className='mt-10 text-xl'>Ajudamos a construir e gerenciar uma equipe de desenvolvedores <br/>de classe mundial para dar vida à sua visão</p>

                <button className='bg-[#5243C2] text-[#fff] font-semibold w-56 p-3 rounded-md mt-10'>Vamos Conversar!</button>
              </div>
              <img
                src='/img_principal.png'
                alt='Desenvolvedor Programando'
                width={696}
              />
            </div>
            {/* BOX SECUNDÁRIO */}
            <div className='flex justify-center flex-col align-middle items-center mt-16'>
              <h3 className='font-bold text-[#EF0178] text-xl'>Conheça nossos Clientes</h3>
              <p className='font-light text-3xl text-center mt-6'>Esses caras estão usando nosso serviço e estão<br/>mais do que felizes.</p>
              <ul className='list-none flex align-middle justify-center mt-6'>
                  <li className='inline p-9 flex align-middle items-center'><img src='/image 11.png' width={100}/></li>
                  <li className='inline p-9'><img src='/image 12.png' width={130}/></li>
                  <li className='inline p-9'><img src='/image 13.png' width={150}/></li>
                  <li className='inline p-9'><img src='/image 14.png' width={150}/></li>
                  <li className='inline p-9 '><img src='/image 15.png' width={150}/></li>
              </ul>
            </div>

            {/* SOBRE NÓS */}
            <div className='flex justify-evenly align-middle items-center mt-16'>
              <img src='/img.png' alt='Desenvolvedor no Foguete' width={633}/>
              <div>
                <h1 className='text-5xl font-bold'>Impulsione suas agências<br/>escolhendo <span className='text-[#5243C2]'>Ninja<br/>Desenvolvedores</span></h1>
                <p className='mt-5 text-lg'>Venha criar suas landing pages personalizadas<br/>que convertem mais visitantes<br/>do que qualquer site.</p>
                <ul className='mt-5'>
                  <li className='flex align-middle items-center'><img src='/ok.png' alt='Verificado' width={15} className='mr-1'/>Possibilidade de design ilimitada</li>
                  <li className='flex align-middle items-center'><img src='/ok.png' alt='Verificado' width={15} className='mr-1'/>Recursos totalmente responsivos</li>
                  <li className='flex align-middle items-center'><img src='/ok.png' alt='Verificado' width={15} className='mr-1'/>Fácil de personalizar plug-ins</li>
                </ul>
              </div>
            </div>

            {/* SERVIÇOS */}
            <div className='flex justify-center flex-col align-middle items-center mt-16'>
              <h3 className='font-bold text-[#EF0178] text-xl'>Nossos Serviços</h3>
              <p className='font-bold text-3xl text-center mt-6'>Determine o serviço que você precisa</p>
              <ul className='list-none flex align-middle justify-evenly w-auto mt-6'>
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
            </div>

            {/* ENTRE EM CONTATO */}
            <div className='bg-[#5243C2] rounded-xl h-72 flex items-center align-middle justify-center mt-16'>
              <div className='flex items-center w-[100%] justify-around align-middle'>
                <div className='relative'>
                  <h3 className='text-white text-2xl font-semibold'>
                    Contrate a melhor equipe de desenvolvedores e design do <br/>mundo,
                    eles se encontram aqui na Zero 27 Code!
                  </h3>
                  <img className='absolute left-[48rem] bottom-9' src='/group47.png'/>
                  <img className='absolute left-[39rem] top-24' src='/group48.png'/>
                </div>
                <div className='relative'>
                  <img className='absolute left-48 bottom-14' src='/group46.png'/>
                  <button className='bg-[#EF0178] text-white p-5'>ENTRAR EM CONTATO</button>
                </div>
                
              </div>
            </div>
          </main>
        </div>
      </div>
      {/* RODAPÈ */}
      <footer className='bg-[#0C111F] mt-16 flex justify-center'>
        <div className='container relative'>
          <div className='absolute right-28 top-48'>
            <img src='/group47.png'/>
          </div>
          <div className='flex justify-center text-white flex-col items-center'>
            <h3 className='text-3xl font-light pt-24'>Entre em contato conosco</h3>
            <p className='font-light pt-6 text-gray-400'>Ao entrar em contato, você aceita nossa política de privacidade.</p>
            <div className=' flex justify-center w-[100%] pb-24 pt-8'>
              <div className='flex flex-col w-[30%] mx-3'>
                  <input type='text' name='nome' placeholder='Nome' className='bg-slate-800 text-white p-4 w-auto my-2'/>
                  <input type='text' name='telefone' placeholder='Telefone' className='bg-slate-800 text-white p-4 w-auto my-2'/>
                  <input type='text' name='email' placeholder='E-mail' className='bg-slate-800 text-white p-4 w-auto my-2'/>
                  <button className='bg-[#5243C2] p-4 my-2 text-white'>Enviar Mensagem</button>
              </div>
              <div className='flex w-[30%] mx-3 '>
                <textarea name='mensagem' placeholder='Mensagem' className='bg-slate-800 w-[100%]'></textarea>
              </div>
            </div>
          </div>

          <div className='absolute bottom-44 left-12'>
            <img src='/group48.png'/>
          </div>

          <div className='flex justify-between items-center w-[100%] pb-10'>
            <img src='/logo_027.png' width={180}/>
            <ul className='list-none flex align-middle justify-center text-white'>
              <li className='inline p-3'>Inicio</li>
              <li className='inline p-3'>Sobre Nós</li>
              <li className='inline p-3'>Serviços</li>
              <li className='inline p-3'>Preços</li>
              <li className='inline p-3'>Depoimentos</li>
            </ul>
          </div>
        </div>
        
      </footer>
    </>
    
  )
}
