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
                            <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
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
                            className='object-cover w-full h-56 rounded shadow-lg sm:h-96'
                            src='https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260'
                            alt=''
                        />
                    </div>
                </div>
            </div>


            {/* SERVICIOS */}
            SERVICIOS
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
                <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
                  <span className="inline-block mb-1 sm:mb-4">
                    The quick, brown fox<br className="hidden md:block" />
                    jumps over a lazy dog
                  </span>
                  <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100"></div>
                </h2>
                <p className="text-gray-700 lg:text-sm lg:max-w-md">
                  "Sed ut perspiciatis unde omnis iste natus error sit iste voluptatem accusantium doloremque rem aperiam, ipsa eaque quae. Sed ut perspiciatis unde omnis iste."
                </p>
              </div>

              <div className="grid gap-0 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">

                <a href="/" aria-label="View Item">
                  <div className="relative overflow-hidden transition duration-200 transform shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                    <img className="object-cover w-full h-56 md:h-64 xl:h-96" src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="" />
                    <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                      <p className="text-sm font-medium tracking-wide text-white">
                        Sed ut perspiciatis unde omnis iste natus error
                      </p>
                    </div>
                  </div>
                </a>

                <a href="/" aria-label="View Item">
                  <div className="relative overflow-hidden transition duration-200 transform shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                    <img className="object-cover w-full h-56 md:h-64 xl:h-80" src="https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="" />
                    <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                      <p className="text-sm font-medium tracking-wide text-white">
                        Leverage agile frameworks to provide a robust synopsis
                      </p>
                    </div>
                  </div>
                </a>

                <a href="/" aria-label="View Item">
                  <div className="relative overflow-hidden transition duration-200 transform shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                    <img className="object-cover w-full h-56 md:h-64 xl:h-80" src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="" />
                    <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                      <p className="text-sm font-medium tracking-wide text-white">
                        Dingy I'm tellin' you rhubaahb Bangah Jo-Jeezly
                      </p>
                    </div>
                  </div>
                </a>

                <a href="/" aria-label="View Item">
                  <div className="relative overflow-hidden transition duration-200 transform shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                    <img className="object-cover w-full h-56 md:h-64 xl:h-80" src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="" />
                    <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                      <p className="text-sm font-medium tracking-wide text-white">
                        Rough pomfret lemon shark plownose chimaera
                      </p>
                    </div>
                  </div>
                </a>

              </div>

              <div className="text-center">
                <a href="/" aria-label="" className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
                  See more
                  <svg className="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
                  </svg>
                </a>
              </div>

            </div>

            {/* info extra */}
            <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
                <div className='grid gap-5 row-gap-10 lg:grid-cols-2'>
                    <div>
                        <img
                            className='object-cover w-full h-56 rounded shadow-lg sm:h-96'
                            src='https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260'
                            alt=''
                        />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <div className='max-w-xl mb-6'>
                            <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
                                The quick, brown fox
                                <br className='hidden md:block' />
                                jumps over
                                <span className='relative px-1'>
                                    <div className='absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400'></div>
                                    <span className='relative inline-block text-deep-purple-accent-400'>a lazy dog</span>
                                </span>
                            </h2>
                            <p className='text-base text-gray-700 md:text-lg'>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae. explicabo.
                            </p>
                        </div>
                        <p className='mb-4 text-sm font-bold tracking-widest uppercase'>Features</p>
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
                        </div>
                    </div>
                </div>
            </div>


        </main>
    );
}
