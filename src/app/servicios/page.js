export default function Servicios() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-between'>
            esta es la de servicios


            {/* TITLE */}
            <div class='px-4 py-16  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 w-full bg-red-400'>
                <div class='flex flex-col  max-w-screen-sm md:flex-row sm:mx-auto md:mx-0 bg-violet-600'>
                    <div>
                        <h2 class='mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
                            Cheese on toast tale
                        </h2>
                        <p class='text-base text-gray-700 md:text-lg'>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam, eaque ipsa quae.
                        </p>
                    </div>
                </div>
            </div>
            servicios


            {/* SERVICIO 1 */}
            <div class='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 w-full bg-green-500'>
                <div class='grid gap-10 lg:grid-cols-2'>
                    <div class='flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg '>
                        <div class='flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400'>
                            <svg class='text-teal-900 w-7 h-7' viewBox='0 0 24 24'>
                                <polyline
                                    fill='none'
                                    stroke='currentColor'
                                    stroke-width='2'
                                    stroke-linecap='round'
                                    stroke-miterlimit='10'
                                    points=' 8,5 8,1 16,1 16,5'
                                    stroke-linejoin='round'></polyline>
                                <polyline
                                    fill='none'
                                    stroke='currentColor'
                                    stroke-width='2'
                                    stroke-linecap='round'
                                    stroke-miterlimit='10'
                                    points='9,15 1,15 1,5 23,5 23,15 15,15'
                                    stroke-linejoin='round'></polyline>
                                <polyline
                                    fill='none'
                                    stroke='currentColor'
                                    stroke-width='2'
                                    stroke-linecap='round'
                                    stroke-miterlimit='10'
                                    points='22,18 22,23 2,23 2,18'
                                    stroke-linejoin='round'></polyline>
                                <rect
                                    x='9'
                                    y='13'
                                    fill='none'
                                    stroke='currentColor'
                                    stroke-width='2'
                                    stroke-linecap='round'
                                    stroke-miterlimit='10'
                                    width='6'
                                    height='4'
                                    stroke-linejoin='round'></rect>
                            </svg>
                        </div>
                        <div class='max-w-xl mb-6'>
                            <h2 class='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
                                Let us handle
                                <br class='hidden md:block' />
                                your next
                                <span class='inline-block text-deep-purple-accent-400'>destination</span>
                            </h2>
                            <p class='text-base text-gray-700 md:text-lg'>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae. explicabo.
                            </p>
                        </div>
                        <div>
                            <a
                                href='/'
                                aria-label=''
                                class='inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800'>
                                Learn more
                                <svg class='inline-block w-3 ml-2' fill='currentColor' viewBox='0 0 12 12'>
                                    <path d='M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z'></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div class='px-3 justify-self-end'>
                        <img
                            class='object-cover w-full h-40 rounded shadow-lg sm:h-64 xl:h-[600px] xl:w-[500px] sm:w-64 '
                            src='https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500'
                            alt=''
                        />
                    </div>
                </div>
            </div>


            {/* SERVICIOS TEST */}
            {/* SERVICIOS
            <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 w-full bg-orange-500">
              <div class="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
                <h2 class="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
                  <span class="inline-block mb-1 sm:mb-4">
                    The quick, brown fox<br class="hidden md:block" />
                    jumps over a lazy dog
                  </span>
                  <div class="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100"></div>
                </h2>
                <p class="text-gray-700 lg:text-sm lg:max-w-md">
                  "Sed ut perspiciatis unde omnis iste natus error sit iste voluptatem accusantium doloremque rem aperiam, ipsa eaque quae. Sed ut perspiciatis unde omnis iste."
                </p>
              </div>

              <div class="grid gap-0 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2 ">

                <a href="/" aria-label="View Item">
                  <div class="relative overflow-hidden transition duration-200 transform shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                    <img class="object-cover w-full h-56 md:h-64 xl:h-96" src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="" />
                    <div class="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                      <p class="text-sm font-medium tracking-wide text-white">
                        Sed ut perspiciatis unde omnis iste natus error
                      </p>
                    </div>
                  </div>
                </a>

                <a href="/" aria-label="View Item">
                  <div class="relative overflow-hidden transition duration-200 transform shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                    <img class="object-cover w-full h-56 md:h-64 xl:h-80" src="https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="" />
                    <div class="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                      <p class="text-sm font-medium tracking-wide text-white">
                        Leverage agile frameworks to provide a robust synopsis
                      </p>
                    </div>
                  </div>
                </a>

                <a href="/" aria-label="View Item">
                  <div class="relative overflow-hidden transition duration-200 transform shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                    <img class="object-cover w-full h-56 md:h-64 xl:h-80" src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="" />
                    <div class="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                      <p class="text-sm font-medium tracking-wide text-white">
                        Dingy I'm tellin' you rhubaahb Bangah Jo-Jeezly
                      </p>
                    </div>
                  </div>
                </a>

                <a href="/" aria-label="View Item">
                  <div class="relative overflow-hidden transition duration-200 transform shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                    <img class="object-cover w-full h-56 md:h-64 xl:h-80" src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="" />
                    <div class="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                      <p class="text-sm font-medium tracking-wide text-white">
                        Rough pomfret lemon shark plownose chimaera
                      </p>
                    </div>
                  </div>
                </a>

              </div>

              <div class="text-center">
                <a href="/" aria-label="" class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
                  See more
                  <svg class="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
                  </svg>
                </a>
              </div>

            </div> */}


            {/* SERVICIO 2 */}
            <div class='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 w-full bg-yellow-500'>
                <div class='grid gap-10 lg:grid-cols-2'>
                    <div class='px-3'>
                        <img
                            class='object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80'
                            src='https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500'
                            alt=''
                        />
                    </div>

                    <div class='flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg justify-self-end'>
                        <div class='flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400'>
                            <svg class='text-teal-900 w-7 h-7' viewBox='0 0 24 24'>
                                <polyline
                                    fill='none'
                                    stroke='currentColor'
                                    stroke-width='2'
                                    stroke-linecap='round'
                                    stroke-miterlimit='10'
                                    points=' 8,5 8,1 16,1 16,5'
                                    stroke-linejoin='round'></polyline>
                                <polyline
                                    fill='none'
                                    stroke='currentColor'
                                    stroke-width='2'
                                    stroke-linecap='round'
                                    stroke-miterlimit='10'
                                    points='9,15 1,15 1,5 23,5 23,15 15,15'
                                    stroke-linejoin='round'></polyline>
                                <polyline
                                    fill='none'
                                    stroke='currentColor'
                                    stroke-width='2'
                                    stroke-linecap='round'
                                    stroke-miterlimit='10'
                                    points='22,18 22,23 2,23 2,18'
                                    stroke-linejoin='round'></polyline>
                                <rect
                                    x='9'
                                    y='13'
                                    fill='none'
                                    stroke='currentColor'
                                    stroke-width='2'
                                    stroke-linecap='round'
                                    stroke-miterlimit='10'
                                    width='6'
                                    height='4'
                                    stroke-linejoin='round'></rect>
                            </svg>
                        </div>
                        <div class='max-w-xl mb-6'>
                            <h2 class='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
                                Let us handle
                                <br class='hidden md:block' />
                                your next
                                <span class='inline-block text-deep-purple-accent-400'>destination</span>
                            </h2>
                            <p class='text-base text-gray-700 md:text-lg'>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae. explicabo.
                            </p>
                        </div>
                        <div>
                            <a
                                href='/'
                                aria-label=''
                                class='inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800'>
                                Learn more
                                <svg class='inline-block w-3 ml-2' fill='currentColor' viewBox='0 0 12 12'>
                                    <path d='M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z'></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            {/* SERVICIO 3 */}
            <div class='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 w-full bg-red-500'>
                <div class='grid gap-10 lg:grid-cols-2'>
                    <div class='flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg'>
                        <div class='flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400'>
                            <svg class='text-teal-900 w-7 h-7' viewBox='0 0 24 24'>
                                <polyline
                                    fill='none'
                                    stroke='currentColor'
                                    stroke-width='2'
                                    stroke-linecap='round'
                                    stroke-miterlimit='10'
                                    points=' 8,5 8,1 16,1 16,5'
                                    stroke-linejoin='round'></polyline>
                                <polyline
                                    fill='none'
                                    stroke='currentColor'
                                    stroke-width='2'
                                    stroke-linecap='round'
                                    stroke-miterlimit='10'
                                    points='9,15 1,15 1,5 23,5 23,15 15,15'
                                    stroke-linejoin='round'></polyline>
                                <polyline
                                    fill='none'
                                    stroke='currentColor'
                                    stroke-width='2'
                                    stroke-linecap='round'
                                    stroke-miterlimit='10'
                                    points='22,18 22,23 2,23 2,18'
                                    stroke-linejoin='round'></polyline>
                                <rect
                                    x='9'
                                    y='13'
                                    fill='none'
                                    stroke='currentColor'
                                    stroke-width='2'
                                    stroke-linecap='round'
                                    stroke-miterlimit='10'
                                    width='6'
                                    height='4'
                                    stroke-linejoin='round'></rect>
                            </svg>
                        </div>
                        <div class='max-w-xl mb-6'>
                            <h2 class='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
                                Let us handle
                                <br class='hidden md:block' />
                                your next
                                <span class='inline-block text-deep-purple-accent-400'>destination</span>
                            </h2>
                            <p class='text-base text-gray-700 md:text-lg'>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae. explicabo.
                            </p>
                        </div>
                        <div>
                            <a
                                href='/'
                                aria-label=''
                                class='inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800'>
                                Learn more
                                <svg class='inline-block w-3 ml-2' fill='currentColor' viewBox='0 0 12 12'>
                                    <path d='M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z'></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div class='px-3 justify-self-end'>
                        <img
                            class='object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80'
                            src='https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500'
                            alt=''
                        />
                    </div>
                </div>
            </div>


            {/* SERVICIO 4 */}
            <div class='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 w-full  bg-purple-500'>
                <div class='grid gap-10 lg:grid-cols-2 items-center bg-fuchsia-600'>
                    <div class='px-3 bg-red-500'>
                        <img
                            class='object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80'
                            src='https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500'
                            alt=''
                        />
                    </div>

                    <div class='flex flex-col justify-center  xl:pr-0 lg:max-w-lg bg-yellow-300 justify-self-end'>
                        <div class='flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400'>
                            <svg class='text-teal-900 w-7 h-7' viewBox='0 0 24 24'>
                                <polyline
                                    fill='none'
                                    stroke='currentColor'
                                    stroke-width='2'
                                    stroke-linecap='round'
                                    stroke-miterlimit='10'
                                    points=' 8,5 8,1 16,1 16,5'
                                    stroke-linejoin='round'></polyline>
                                <polyline
                                    fill='none'
                                    stroke='currentColor'
                                    stroke-width='2'
                                    stroke-linecap='round'
                                    stroke-miterlimit='10'
                                    points='9,15 1,15 1,5 23,5 23,15 15,15'
                                    stroke-linejoin='round'></polyline>
                                <polyline
                                    fill='none'
                                    stroke='currentColor'
                                    stroke-width='2'
                                    stroke-linecap='round'
                                    stroke-miterlimit='10'
                                    points='22,18 22,23 2,23 2,18'
                                    stroke-linejoin='round'></polyline>
                                <rect
                                    x='9'
                                    y='13'
                                    fill='none'
                                    stroke='currentColor'
                                    stroke-width='2'
                                    stroke-linecap='round'
                                    stroke-miterlimit='10'
                                    width='6'
                                    height='4'
                                    stroke-linejoin='round'></rect>
                            </svg>
                        </div>
                        <div class='max-w-xl mb-6'>
                            <h2 class='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
                                Let us handle
                                <br class='hidden md:block' />
                                your next
                                <span class='inline-block text-deep-purple-accent-400'>destination</span>
                            </h2>
                            <p class='text-base text-gray-700 md:text-lg'>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae. explicabo.
                            </p>
                        </div>
                        <div>
                            <a
                                href='/'
                                aria-label=''
                                class='inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800'>
                                Learn more
                                <svg class='inline-block w-3 ml-2' fill='currentColor' viewBox='0 0 12 12'>
                                    <path d='M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z'></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            
        </main>
    );
}
