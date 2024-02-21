import Image from 'next/image';
import Contest from '../components/Contest';

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-between'>


            {/* numeros */}
            <div className='bg-red-200 px-4 py-16 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
                <div className='grid grid-cols-1 gap-8 row-gap-8 md:grid-cols-3 bg-green-200 '>
                    <div className='text-center pr-8 md:border-r '>
                        <h6 className='text-4xl font-bold lg:text-5xl xl:text-6xl'>20</h6>
                        <p className='text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base'>
                            AÑOS DE EXPERIENCIA
                        </p>
                    </div>
                    <div className='text-center pr-8 md:border-r'>
                        <h6 className='text-4xl font-bold lg:text-5xl xl:text-6xl'>XXX</h6>
                        <p className='text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base'>
                            SERVICIOS BRINDADOS
                        </p>
                    </div>
                    {/* <div className='text-center pr-8 md:border-r'>
                        <h6 className='text-4xl font-bold lg:text-5xl xl:text-6xl'>XXX</h6>
                        <p className='text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base'>CLIENTES</p>
                    </div> */}
                    <div className='text-center'>
                    <h6 className='text-4xl font-bold lg:text-5xl xl:text-6xl'>XXX</h6>
                        <p className='text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base'>CLIENTES</p>
                    </div>
                </div>
            </div>

            {/* nosotros */}
            <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
                <div className='grid gap-5 row-gap-10 lg:grid-cols-2'>
                    <div className='flex flex-col justify-center'>
                        <div className='max-w-xl mb-6'>
                            <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none'>
                                Nosotros
                            </h2>
                            <p className='text-base text-gray-700 md:text-lg'>
                            Nos destacamos por gestionar eficientemente recursos en obras civiles, modernizando procesos a través de capacitación continua. Ofrecemos soluciones integrales con un equipo multidisciplinario, aportando innovación y experiencia especializada.
                            </p>
                        </div>
                        <p className='mb-4 text-sm font-black tracking-widest uppercase'>NOS ENFOCAMOS EN</p>
                            <ul className='space-y-3 font-bold text-[#727374] '>

                                 <li className='flex items-center'>
                                    <span className='mr-1'>
                                        <svg 
                                            width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="6.24219" y="0.757812" width="8.48592" height="8.48592" transform="rotate(45 6.24219 0.757812)" fill="#2D85ED"/>
                                        </svg>
                                    </span>
                                    La satisfacción de nuestros clientes.
                                </li>

                                <li className='flex items-center'>
                                    <span className='mr-1'>
                                        <svg 
                                            width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="6.24219" y="0.757812" width="8.48592" height="8.48592" transform="rotate(45 6.24219 0.757812)" fill="#2D85ED"/>
                                        </svg>
                                    </span>
                                    Eficacia en la ejecución de las soluciones.
                                </li>

                                <li className='flex items-center'>
                                    <span className='mr-1'>
                                        <svg 
                                            width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="6.24219" y="0.757812" width="8.48592" height="8.48592" transform="rotate(45 6.24219 0.757812)" fill="#2D85ED"/>
                                        </svg>
                                    </span>
                                    Excelencia técnica en nuestros servicios.
                                </li>

                                <li className='flex items-center'>
                                    <span className='mr-1'>
                                        <svg 
                                            width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="6.24219" y="0.757812" width="8.48592" height="8.48592" transform="rotate(45 6.24219 0.757812)" fill="#2D85ED"/>
                                        </svg>
                                    </span>
                                    Profesionalismo de nuestra gente.
                                </li>

                                <li className='flex items-center'>
                                    <span className='mr-1'>
                                        <svg 
                                            width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="6.24219" y="0.757812" width="8.48592" height="8.48592" transform="rotate(45 6.24219 0.757812)" fill="#2D85ED"/>
                                        </svg>
                                    </span>
                                    Ética e integridad en nuestras operaciones.
                                </li>
                            </ul>
                            {/* <ul className='space-y-3'>
                                <li className='flex'>
                                    <span className='mr-1'>
                                        <svg
                                            className='w-5 h-5 mt-px text-deep-purple-accent-400'
                                            stroke='currentColor'
                                            viewBox='0 0 52 52'>
                                            <polygon
                                                stroke-width='4'
                                                stroke-linecap='round'
                                                stroke-linejoin='round'
                                                fill='none'
                                                points='29 13 14 29 25 29 23 39 38 23 27 23'></polygon>
                                        </svg>
                                    </span>
                                    Profesionalismo de nuestra gente.
                                </li>
                                <li className='flex'>
                                    <span className='mr-1'>
                                        <svg
                                            className='w-5 h-5 mt-px text-deep-purple-accent-400'
                                            stroke='currentColor'
                                            viewBox='0 0 52 52'>
                                            <polygon
                                                stroke-width='4'
                                                stroke-linecap='round'
                                                stroke-linejoin='round'
                                                fill='none'
                                                points='29 13 14 29 25 29 23 39 38 23 27 23'></polygon>
                                        </svg>
                                    </span>
                                    Ética e integridad en nuestras operaciones.
                                </li>
                                <li className='flex'>
                                    <span className='mr-1'>
                                        <svg
                                            className='w-5 h-5 mt-px text-deep-purple-accent-400'
                                            stroke='currentColor'
                                            viewBox='0 0 52 52'>
                                            <polygon
                                                stroke-width='4'
                                                stroke-linecap='round'
                                                stroke-linejoin='round'
                                                fill='none'
                                                points='29 13 14 29 25 29 23 39 38 23 27 23'></polygon>
                                        </svg>
                                    </span>
                                    Satoshi Nakamoto
                                </li>
                            </ul> */}
                    </div>
                    <div>
                        <img
                            className='object-cover w-full h-56 sm:h-[574px] object-left overflow-x-visible'
                            src='./home/nosotros-img.png'
                            alt=''
                        />
                    </div>
                </div>
            </div>


            {/* SERVICIOS */}
            <div className=" py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl   lg:py-20 bg-red-400">
                
                <div className="flex flex-row mb-6 lg:justify-between  md:mb-8 px-4 md:px-24 lg:px-8 bg-violet-300">
              <div className="flex flex-col mb-6 lg:justify-between  md:mb-8">
                <h2 className="max-w-lg  font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none  group">
                  <span className="inline-block mb-1 sm:mb-4">
                  Nuetros servicios
                  </span>
                  <div className="h-1 ml-auto duration-300 origin-left transform scale-x-30 "></div>
                </h2>
                <p className="text-gray-700 lg:text-base lg:max-w-xl">
                Nuestros proyectos reflejan el compromiso con nuestros clientes.
                </p>
              </div>

              <div className="text-center self-end mb-6 md:mb-8">
                <a href="/" aria-label="" className="text-sigma-500 inline-flex items-center font-semibold transition-colors duration-200 lg:text-sm">
                Todos Nuestros Servicios
                </a>
              </div>
              </div>

              <div className="grid gap-0 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">

                <a href="/" aria-label="View Item">
                  <div className="relative overflow-hidden transition duration-200 transform shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                    <img className="object-cover w-full h-56 md:h-64 xl:h-[420px]" src="./home/03_SERVOF01.jpg" alt="" />
                    <div className="absolute inset-x-0 bottom-0 px-6 pt-24 pb-4 bg-gradient-to-t from-black to-transparent">
                      <p className="text-base font-medium tracking-wide text-white">
                      Ingeniería Geotécnica                      
                      </p>
                    </div>
                  </div>
                </a>

                <a href="/" aria-label="View Item">
                  <div className="relative overflow-hidden transition duration-200 transform shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                    <img className="object-cover w-full h-56 md:h-64 xl:h-[420px]" src="./home/03_SERVOF02.jpg" alt="" />
                    <div className="absolute inset-x-0 bottom-0 px-6 pt-24 pb-4 bg-gradient-to-t from-black to-transparent">
                      <p className="text-base font-medium tracking-wide text-white">
                      Ingeniería Estructural                      
                      </p>
                    </div>
                  </div>
                </a>

                <a href="/" aria-label="View Item">
                  <div className="relative overflow-hidden transition duration-200 transform shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                    <img className="object-cover w-full h-56 md:h-64 xl:h-[420px]" src="./home/03_SERVOF03.jpg" alt="" />
                    <div className="absolute inset-x-0 bottom-0 px-6 pt-24 pb-4 bg-gradient-to-t from-black to-transparent">
                      <p className="text-base font-medium tracking-wide text-white">
                      Topografía                      
                      </p>
                    </div>
                  </div>
                </a>

                <a href="/" aria-label="View Item">
                  <div className="relative overflow-hidden transition duration-200 transform shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                    <img className="object-cover w-full h-56 md:h-64 xl:h-[420px]" src="./home/03_SERVOF04.jpg" alt="" />
                    <div className="absolute inset-x-0 bottom-0 px-6 pt-24 pb-4 bg-gradient-to-t from-black to-transparent">
                      <p className="text-base font-medium tracking-wide text-white">
                      Consultoría Integral
                      </p>
                    </div>
                  </div>
                </a>

              </div>

  

            </div>

            {/* NUESTROS EQUIPOS */}
            <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
                <div className='grid gap-5 row-gap-10 lg:grid-cols-2'>
                    <div>
                        <img
                            className='object-cover w-[500px] h-56 rounded shadow-lg sm:h-[623px]'
                            src='./home/04_EQUIPOS.jpeg'
                            alt='Nuestros Equipos'
                        />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <div className='max-w-xl mb-6'>
                            <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none'>
                            Nuestros equipos 

                            </h2>
                            <p className='text-base text-gray-700 md:text-lg'>
                            En Estudio Sigma SRL fusionamos tecnología avanzada con la experiencia especializada, brindando soluciones eficientes, eficaces y confiables, utilizando herramientas de última generación y un enfoque innovador. Garantizamos resultados excepcionales, impulsados por la excelencia y la precisión en cada detalle
                            </p>
                        </div>
                        <div className=" mb-6 md:mb-8">
                <a href="/" aria-label="" className="text-sigma-500 inline-flex items-center font-semibold transition-colors duration-200 lg:text-sm">
                Ver más
                </a>
              </div>
                        {/* <p className='mb-4 text-sm font-bold tracking-widest uppercase'>Features</p>
                        <div className='grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0'>
                            <ul className='space-y-3'>
                                <li className='flex'>
                                    <span className='mr-1'>
                                        <svg
                                            className='w-5 h-5 mt-px text-deep-purple-accent-400'
                                            stroke='currentColor'
                                            viewBox='0 0 52 52'>
                                            <polygon
                                                stroke-width='4'
                                                stroke-linecap='round'
                                                stroke-linejoin='round'
                                                fill='none'
                                                points='29 13 14 29 25 29 23 39 38 23 27 23'></polygon>
                                        </svg>
                                    </span>
                                    A slice of heaven
                                </li>
                                <li className='flex'>
                                    <span className='mr-1'>
                                        <svg
                                            className='w-5 h-5 mt-px text-deep-purple-accent-400'
                                            stroke='currentColor'
                                            viewBox='0 0 52 52'>
                                            <polygon
                                                stroke-width='4'
                                                stroke-linecap='round'
                                                stroke-linejoin='round'
                                                fill='none'
                                                points='29 13 14 29 25 29 23 39 38 23 27 23'></polygon>
                                        </svg>
                                    </span>
                                    Disrupt inspire
                                </li>
                                <li className='flex'>
                                    <span className='mr-1'>
                                        <svg
                                            className='w-5 h-5 mt-px text-deep-purple-accent-400'
                                            stroke='currentColor'
                                            viewBox='0 0 52 52'>
                                            <polygon
                                                stroke-width='4'
                                                stroke-linecap='round'
                                                stroke-linejoin='round'
                                                fill='none'
                                                points='29 13 14 29 25 29 23 39 38 23 27 23'></polygon>
                                        </svg>
                                    </span>
                                    Preliminary thinking
                                </li>
                            </ul>
                            <ul className='space-y-3'>
                                <li className='flex'>
                                    <span className='mr-1'>
                                        <svg
                                            className='w-5 h-5 mt-px text-deep-purple-accent-400'
                                            stroke='currentColor'
                                            viewBox='0 0 52 52'>
                                            <polygon
                                                stroke-width='4'
                                                stroke-linecap='round'
                                                stroke-linejoin='round'
                                                fill='none'
                                                points='29 13 14 29 25 29 23 39 38 23 27 23'></polygon>
                                        </svg>
                                    </span>
                                    Flipboard curmudgeon
                                </li>
                                <li className='flex'>
                                    <span className='mr-1'>
                                        <svg
                                            className='w-5 h-5 mt-px text-deep-purple-accent-400'
                                            stroke='currentColor'
                                            viewBox='0 0 52 52'>
                                            <polygon
                                                stroke-width='4'
                                                stroke-linecap='round'
                                                stroke-linejoin='round'
                                                fill='none'
                                                points='29 13 14 29 25 29 23 39 38 23 27 23'></polygon>
                                        </svg>
                                    </span>
                                    Storage shed
                                </li>
                                <li className='flex'>
                                    <span className='mr-1'>
                                        <svg
                                            className='w-5 h-5 mt-px text-deep-purple-accent-400'
                                            stroke='currentColor'
                                            viewBox='0 0 52 52'>
                                            <polygon
                                                stroke-width='4'
                                                stroke-linecap='round'
                                                stroke-linejoin='round'
                                                fill='none'
                                                points='29 13 14 29 25 29 23 39 38 23 27 23'></polygon>
                                        </svg>
                                    </span>
                                    Satoshi Nakamoto
                                </li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>


        </main>
    );
}
