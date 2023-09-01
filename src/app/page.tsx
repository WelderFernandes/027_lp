"use client";
import { Fragment, useEffect, useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, ArrowPathIcon } from '@heroicons/react/24/outline'
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scroller,
} from "react-scroll";
import { Fade, Reveal, Slide } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import toast from 'react-hot-toast';
import { sendContactEmail } from '@/services/sendMail';

const navigation = [
  { name: 'Início', href: '#home', to: 'home', current: true },
  { name: 'Sobre Nós', href: '#sobrenos', to: 'sobrenos', current: false },
  { name: 'Serviços', href: '#servicos', to: 'servicos', current: false },
  { name: 'Projetos', href: '#projetos', to: 'projetos', current: false },
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

  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senderMail, setSenderMail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: any) {
    event.preventDefault();
    if(!nome || !telefone || !senderMail || !mensagem) {
        toast.error('Preencha todos os campos!');
      return;
    }

    try {
      setLoading(true);
      await sendContactEmail(nome,telefone,senderMail,mensagem);
      setNome('');
      setTelefone('');
      setSenderMail(''); 
      setMensagem('');
      setLoading(false);
      toast.success('Mensagem enviada com sucesso!');
    } catch (error) {
      toast.error('Ocorreu um erro ao enviar a mensagem. Tente Novamente!') 
    }
  }

  // este useEffect será chamado logo ao renderizar o component
  useEffect(() => {
    const head = document.querySelector("head");
    const scriptEl = document.createElement("script");
      
    scriptEl.setAttribute("async", "");
    scriptEl.setAttribute("src", "https://snapwidget.com/js/snapwidget.js");
    if (head) {
      head.appendChild(scriptEl);
      return () => { head.removeChild(scriptEl); }
    } else {
      return () => { }
    }
      
  }, []);

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
                                    : 'text-white hover:text-[#EF0178]',
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
                              item.current ? 'bg-[#EF0178] text-white' : 'text-white hover:bg-[#EF0178] hover:text-white',
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
            <div id='home' className='flex align-middle items-center flex-col-reverse md:flex-row justify-center md:justify-around mt-12 md:mt-15'>
              <div className='flex align-middle justify-center items-center md:items-start h-32 flex-col'>
                <h1 className='mt-60 md:mt-0 text-3xl md:text-5xl font-bold text-center md:text-start text-white'>
                  Um ótimo <span className='text-[#5243C2]'>site</span> ou <span className='text-[#5243C2]'>sistema</span><br/>
                  é construído com <span className='text-[#EF0178]'> incríveis<br/>
                  desenvolvedores</span>
                </h1>

                <p className='mt-10 text-md md:text-lg text-center md:text-start text-white'>Ajudamos a construir e gerenciamos uma equipe de desenvolvedores <br/>de classe mundial para dar vida à sua visão</p>

                <Link to={'contato'} key={'contato'} spy={true} smooth={true}><button className='bg-[#5243C2] text-[#fff] font-semibold w-56 p-3 rounded-md mt-10'>Vamos Conversar!</button></Link>
              </div>
              <img
                src='/img_principal.png'
                alt='Desenvolvedor Programando'
                width={572}
              />
            </div>

            {/* SOBRE NÓS */}
            <Element name='sobrenos'>
              <Fade triggerOnce={true}>
                <div className='flex justify-center flex-col align-middle items-center mt-64 md:mt-14'>
                  <h3 className='font-bold text-[#EF0178] text-xl'>Sobre Nós</h3>
                  <p className='font-bold text-3xl text-center mt-6 px-6 text-white'>Conheça mais sobre a nosssa empresa</p>
                </div>
              </Fade>
              <div className='grid grid-cols-1 md:grid-cols-2 md:gap-5 md:mt-8'>
                <Slide direction='left' triggerOnce={true}>
                  <div className='bg-[#5243C2] rounded-xl h-72 flex items-center align-middle justify-center mt-8 text-white m-3 md:m-0'>
                    <div className='flex justify-center flex-col items-center p-5 md:p-0'>
                      <h3 className='font-bold text-xl'>Missão</h3>
                      <p className='text-center text-base font-normal mt-2 px-0 md:px-20'>Nossa missão é fornecer soluções de tecnologia personalizadas e eficazes que atendam às necessidades exclusivas de nossos clientes. Nós nos esforçamos para ser um parceiro confiável e colaborativo, trabalhando em estreita colaboração com nossos clientes para entender suas necessidades e fornecer soluções que os ajudem a alcançar seus objetivos de negócios.</p>
                    </div>
                  </div>
                </Slide>
                <Slide direction='right' triggerOnce={true}>
                  <div className='bg-[#EF0178] rounded-xl h-72 flex items-center align-middle justify-center mt-8 text-white m-3 md:m-0'>
                    <div className='flex justify-center flex-col items-center p-5 md:p-0'>
                      <h3 className='font-bold text-xl'>Visão</h3>
                      <p className='text-center text-base font-normal mt-2 px-0 md:px-20'>Ser a empresa líder em soluções de tecnologia inovadoras e personalizadas, que ajudam nossos clientes a alcançar seus objetivos de negócios.</p>
                    </div>
                  </div>
                </Slide>
              </div>
              
              <div className='flex flex-col-reverse md:flex-row justify-center md:justify-evenly align-middle items-center mt-10'>
                <Slide triggerOnce={true}>
                  <img src='/img.png' alt='Desenvolvedor no Foguete' width={510}/>
                </Slide>
                <Fade>
                  <div>
                    <h1 className='text-center md:text-start text-3xl md:text-5xl font-bold mt-10 md:mt-0 text-white'>Nossos<span className='text-[#5243C2]'> Valores</span></h1>
                    <ul className='mt-5 flex md:flex-none justify-center md:justify-normal flex-col items-center md:items-start p-5 md:p-0 text-white'>
                      <li className='flex align-middle items-center'><p className='mt-5 text-center md:text-start text-md md:text-base'><img src='/ok.png' alt='Verificado' width={20} className='mr-1 inline'/><span className='font-semibold'>Inovação:</span> Nós valorizamos a inovação e estamos sempre procurando <br/>maneiras de melhorar e aprimorar nossas soluções de tecnologia.</p></li>
                      <li className='flex align-middle items-center'><p className='mt-5 text-center md:text-start text-md md:text-base'><img src='/ok.png' alt='Verificado' width={20} className='mr-1 inline'/><span className='font-semibold'>Qualidade:</span> Nós nos esforçamos para fornecer soluções de tecnologia de <br/>alta qualidade que atendam às necessidades de nossos clientes.</p></li>
                      <li className='flex align-middle items-center'><p className='mt-5 text-center md:text-start text-md md:text-base'><img src='/ok.png' alt='Verificado' width={20} className='mr-1 inline'/><span className='font-semibold'>Colaboração:</span> Nós acreditamos na importância da colaboração e trabalhamos<br/> em estreita colaboração com nossos clientes para entender suas necessidades<br/> e fornecer soluções personalizadas.</p></li>
                      <li className='flex align-middle items-center'><p className='mt-5 text-center md:text-start text-md md:text-base'><img src='/ok.png' alt='Verificado' width={20} className='mr-1 inline'/><span className='font-semibold'>Integridade:</span> Nós valorizamos a integridade e agimos com honestidade e <br/>transparência em todas as nossas interações com nossos clientes e parceiros.</p></li>
                      <li className='flex align-middle items-center'><p className='mt-5 text-center md:text-start text-md md:text-base'><img src='/ok.png' alt='Verificado' width={20} className='mr-1 inline'/><span className='font-semibold'>Responsabilidade:</span> Nós assumimos a responsabilidade por nossas ações e <br/>trabalhamos para garantir que nossas soluções de tecnologia tenham um <br/>impacto positivo em nossos clientes e na sociedade como um todo.</p></li>
                    </ul>
                  </div>
                </Fade>
              </div>
            </Element>

            {/* SERVIÇOS */}
            <Element name="servicos" id='servicos' className='flex justify-center flex-col align-middle items-center mt-16'>
              <Fade triggerOnce={true}>
                <h3 className='font-bold text-[#EF0178] text-xl'>Nossos Serviços</h3>
                <p className='font-bold text-3xl text-center mt-6 text-white'>Temos a solução exata para sua empresa</p>
              </Fade>
              <Reveal keyframes={customAnimation} triggerOnce={true}>
                <ul className='list-none grid grid-cols-1 md:grid-cols-3 gap-8 w-auto mt-6 text-white'> 
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
                </ul>
                </Reveal>
            </Element>

            {/* BOX SECUNDÁRIO */}
            <Element name='projetos'>
              <div className='flex justify-center flex-col align-middle items-center mt-7 md:mt-14 rounded-xl py-6'>
                <h3 className='font-bold text-[#EF0178] text-xl'>Conheça nossos Projetos</h3>
                <p className='font-light text-3xl text-center mt-6 text-white'>Venha fazer seu orçamento conosco!<br/>Estamos a sua disposição.</p>
                <ul className='list-none flex flex-col md:flex-row align-middle justify-center mt-6'>
                    {/* <li className='inline p-9 flex justify-center md:justify-normal align-middle items-center'><a href='https://hotdogdamaravilhosa.vercel.app/' target='_blank'><img src='/hotdog.png' width={80}/></a></li> */}
                    <li className='inline p-9 flex justify-center md:justify-normal align-middle items-center'><a href='https://auto-shop-027.vercel.app/' target='_blank'><img src='/autoshop027.png' width={110}/></a></li>
                    <li className='inline p-9 flex justify-center md:justify-normal align-middle items-center'><a href='https://barber-027.vercel.app/' target='_blank'><img src='/barber.png' width={110}/></a></li>
                </ul>
              </div>
            </Element>


            {/* ENTRE EM CONTATO */}
            <Slide cascade triggerOnce={true}>
              <div className='bg-[#5243C2] rounded-xl h-72 flex items-center align-middle justify-center mt-8 md:mt-16 m-3 md:m-0'>
                <div className='flex items-center flex-col md:flex-row w-[100%] justify-around align-middle'>
                  <div className='relative'>
                    <Fade cascade triggerOnce={true}>
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
                    <Fade cascade triggerOnce={true}>
                      <Link to={'contato'} key={'contato'} spy={true} smooth={true}><button className='bg-[#EF0178] text-white p-5 md:p-5 mt-5 md:mt-0'>ENTRAR EM CONTATO</button></Link>
                    </Fade>
                  </div>
                  
                </div>
              </div>
            </Slide>
            {/* REDE SOCIAL - INSTAGRAM */}
            <div className='flex justify-center flex-col align-middle items-center mt-16'>
              <h3 className='font-bold text-[#EF0178] text-xl'>Instagram</h3>
              <p className='font-bold text-3xl text-center mt-6 text-white mb-6'>Conheça nosso feed!</p>
              {/* SnapWidget */}
              {/* <script src="https://snapwidget.com/js/snapwidget.js"></script> */}
              <iframe src="https://snapwidget.com/embed/1040687" className="snapwidget-widget" style={{border:"none", overflow:"hidden",  width:"100%"}}></iframe>
            </div>
          </main>
        </div>
      </div>
      {/* RODAPÈ */}
      <Element name="contato" className='bg-[#0C111F] mt-7 flex justify-center'>
        <div className='container relative'>
          <div className='absolute right-28 top-48 hidden md:block'>
            <img src='/group47.png'/>
          </div>
          <div className='flex justify-center text-white flex-col items-center pb-20'>
            <h3 className='text-2xl md:text-3xl font-light pt-24'>Entre em contato conosco</h3>
            <p className='text-sm md:text-base text-center font-light pt-6 text-gray-400'>Ao entrar em contato, você aceita nossa política de privacidade.</p>
            <form onSubmit={handleSubmit} className='w-full flex flex-col justify-center items-center'>
              <div className='flex flex-col md:flex-row justify-center md:w-[100%] pb-2 pt-8'>
                <div className='flex flex-col md:flex-col items-center md:items-start md:w-[30%] mx-3'>
                    <input type='text' name='nome' placeholder='Nome' className='bg-slate-800 text-white p-4 w-full my-2' onChange={({target}) => setNome(target.value)} value={nome}/>
                    <input type='text' name='telefone' placeholder='Telefone' className='bg-slate-800 text-white p-4 w-full my-2' onChange={({target}) => setTelefone(target.value)} value={telefone}/>
                    <input type='text' name='senderMail' placeholder='E-mail' className='bg-slate-800 text-white p-4 w-full my-2' onChange={({target}) => setSenderMail(target.value)} value={senderMail}/>
                </div>
                <div className='flex justify-center md:w-[30%] mx-3 '>
                  <textarea name='mensagem' placeholder='Mensagem' className='bg-slate-800 w-[100%] p-1 my-2' onChange={({target}) => setMensagem(target.value)} value={mensagem}></textarea>
                </div>
              </div>
              <button type='submit' className='bg-[#5243C2] p-4 my-2 text-white text-center'>{loading == true ? <ArrowPathIcon width={20} className='animate-spin' /> : 'Enviar Mensagem' }</button>
            </form>
            
            
          </div>

          <div className='absolute bottom-44 left-12 hidden md:block'>
            <img src='/group48.png'/>
          </div>

          <div className='flex flex-col justify-center items-center w-[100%] pb-10'>
            <img src='/logo_027.png' width={180}/>
            <p className='text-white text-center mt-4'>© Zero 27 Code 2023<br/>
            Todos os direitos reservados.</p>
          </div>
        </div>
        
      </Element>
    </>
    
  )
}
