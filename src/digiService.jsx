import React from 'react'

import digi1 from './assets/digi1.webp'
import digi2 from './assets/digi2.webp'
import digi3 from './assets/digi3.webp'
import digi4 from './assets/digi4.webp'
import digi5 from './assets/digi5.webp'
import digi6 from './assets/digi6.webp'
import digiGame from './assets/dgiGame.webp'

function DigiService() {
    return (
        <div className='mt-[-10vh] sm:mt-0 h-[50vh] sm:h-[70vh] w-full flex flex-wrap content-evenly bg-white'>
            <h2 id='sliderTopHeader' className='w-full h-[15vh] text-[#061962] flex items-center justify-center text-[6vw] sm:text-[4vw]'>بزرگترین مشتریان خدمات کسب و کار ما</h2>
            <div className='h-[15vh] w-full flex flex-wrap justify-evenly cursor-pointer items-center relative'>
                <span className='absolute flex w-full h-full top-0 left-0 bg-white opacity-50 z-20'></span>
                <figure className='h-[45%] w-[30%] lg:w-[15%] lg:h-[90%]'>
                    <img className='w-full h-full object-contain' src={digi6} />
                </figure>
                <figure className='h-[45%] w-[30%] lg:w-[15%] lg:h-[90%]'>
                    <img className='w-full h-full object-contain' src={digi5} />
                </figure>
                <figure className='h-[45%] w-[30%] lg:w-[15%] lg:h-[90%]'>
                    <img className='w-full h-full object-contain' src={digi4} />
                </figure>
                <figure className='h-[45%] w-[30%] lg:w-[15%] lg:h-[90%]'>
                    <img className='w-full h-full object-contain' src={digi3} />
                </figure>
                <figure className='h-[45%] w-[30%] lg:w-[15%] lg:h-[90%]'>
                    <img className='w-full h-full object-contain' src={digi2} />
                </figure>
                <figure className='h-[45%] w-[30%] lg:w-[15%] lg:h-[90%]'>
                    <img className='w-full h-full object-contain' src={digi1} />
                </figure>
            </div>
            <figure className='h-[15vh] w-full cursor-pointer'>
                <img className='w-full h-full object-contain' src={digiGame} />
            </figure>
        </div>
    )
}

export default DigiService