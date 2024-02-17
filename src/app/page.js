import Image from 'next/image';
import Contest from '../components/Contest';

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-between'>


            {/* numeros */}
            <div class='bg-red-200 px-4 py-16 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
                <div class='grid grid-cols-2 gap-8 row-gap-8 md:grid-cols-4'>
                    <div class='text-center pr-8 md:border-r '>
                        <h6 class='text-4xl font-bold lg:text-5xl xl:text-6xl'>144K</h6>
                        <p class='text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base'>
                            Downloads
                        </p>
                    </div>
                    <div class='text-center pr-8 md:border-r'>
                        <h6 class='text-4xl font-bold lg:text-5xl xl:text-6xl'>12.9K</h6>
                        <p class='text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base'>
                            Subscribers
                        </p>
                    </div>
                    <div class='text-center pr-8 md:border-r'>
                        <h6 class='text-4xl font-bold lg:text-5xl xl:text-6xl'>48.3K</h6>
                        <p class='text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base'>Users</p>
                    </div>
                    <div class='text-center'>
                        <h6 class='text-4xl font-bold lg:text-5xl xl:text-6xl'>24.5K</h6>
                        <p class='text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base'>Cookies</p>
                    </div>
                </div>
            </div>

            {/* nosotros */}
            <div class='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
                <div class='grid gap-5 row-gap-10 lg:grid-cols-2'>
                    <div class='flex flex-col justify-center'>
                        <div class='max-w-xl mb-6'>
                            <h2 class='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
                                The quick, brown fox
                                <br class='hidden md:block' />
                                jumps over
                                <span class='relative px-1'>
                                    <div class='absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400'></div>
                                    <span class='relative inline-block text-deep-purple-accent-400'>a lazy dog</span>
                                </span>
                            </h2>
                            <p class='text-base text-gray-700 md:text-lg'>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae. explicabo.
                            </p>
                        </div>
                        <p class='mb-4 text-sm font-bold tracking-widest uppercase'>Features</p>
                        <div class='grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0'>
                            <ul class='space-y-3'>
                                <li class='flex'>
                                    <span class='mr-1'>
                                        <svg
                                            class='w-5 h-5 mt-px text-deep-purple-accent-400'
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
                                <li class='flex'>
                                    <span class='mr-1'>
                                        <svg
                                            class='w-5 h-5 mt-px text-deep-purple-accent-400'
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
                                <li class='flex'>
                                    <span class='mr-1'>
                                        <svg
                                            class='w-5 h-5 mt-px text-deep-purple-accent-400'
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
                            <ul class='space-y-3'>
                                <li class='flex'>
                                    <span class='mr-1'>
                                        <svg
                                            class='w-5 h-5 mt-px text-deep-purple-accent-400'
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
                                <li class='flex'>
                                    <span class='mr-1'>
                                        <svg
                                            class='w-5 h-5 mt-px text-deep-purple-accent-400'
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
                                <li class='flex'>
                                    <span class='mr-1'>
                                        <svg
                                            class='w-5 h-5 mt-px text-deep-purple-accent-400'
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
                    <div>
                        <img
                            class='object-cover w-full h-56 rounded shadow-lg sm:h-96'
                            src='https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260'
                            alt=''
                        />
                    </div>
                </div>
            </div>


            {/* SERVICIOS */}
            SERVICIOS
            <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
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

              <div class="grid gap-0 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">

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

            </div>

            {/* info extra */}
            <div class='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
                <div class='grid gap-5 row-gap-10 lg:grid-cols-2'>
                    <div>
                        <img
                            class='object-cover w-full h-56 rounded shadow-lg sm:h-96'
                            src='https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260'
                            alt=''
                        />
                    </div>
                    <div class='flex flex-col justify-center'>
                        <div class='max-w-xl mb-6'>
                            <h2 class='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
                                The quick, brown fox
                                <br class='hidden md:block' />
                                jumps over
                                <span class='relative px-1'>
                                    <div class='absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400'></div>
                                    <span class='relative inline-block text-deep-purple-accent-400'>a lazy dog</span>
                                </span>
                            </h2>
                            <p class='text-base text-gray-700 md:text-lg'>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae. explicabo.
                            </p>
                        </div>
                        <p class='mb-4 text-sm font-bold tracking-widest uppercase'>Features</p>
                        <div class='grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0'>
                            <ul class='space-y-3'>
                                <li class='flex'>
                                    <span class='mr-1'>
                                        <svg
                                            class='w-5 h-5 mt-px text-deep-purple-accent-400'
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
                                <li class='flex'>
                                    <span class='mr-1'>
                                        <svg
                                            class='w-5 h-5 mt-px text-deep-purple-accent-400'
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
                                <li class='flex'>
                                    <span class='mr-1'>
                                        <svg
                                            class='w-5 h-5 mt-px text-deep-purple-accent-400'
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
                            <ul class='space-y-3'>
                                <li class='flex'>
                                    <span class='mr-1'>
                                        <svg
                                            class='w-5 h-5 mt-px text-deep-purple-accent-400'
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
                                <li class='flex'>
                                    <span class='mr-1'>
                                        <svg
                                            class='w-5 h-5 mt-px text-deep-purple-accent-400'
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
                                <li class='flex'>
                                    <span class='mr-1'>
                                        <svg
                                            class='w-5 h-5 mt-px text-deep-purple-accent-400'
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
