import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='flex justify-center'>
        <div className='container'>
          {/* MENU */}
          <header className='flex justify-center align-middle justify-between mt-5'>
            <img
              src='/logo_027.png'
              alt='Logo'
              width={220}
            />

            <ul className='list-none flex align-middle justify-center'>
              <li className='inline p-3 text-[#EF0178]'>Inicio</li>
              <li className='inline p-3'>Sobre Nós</li>
              <li className='inline p-3'>Serviços</li>
              <li className='inline p-3'>Preços</li>
              <li className='inline p-3'>Depoimentos</li>
            </ul>

            <button className='border-[1px] rounded-md border-[#EF0178] px-8 text-[#EF0178] font-semibold'>Contato</button>
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
      <footer className='bg-[#0C111F] mt-16'>
        <h3>Entre em contato conosco</h3>
        <p>Ao entrar em contato, você aceita nossa política de privacidade.</p>
      </footer>
    </>
    
  )
}
