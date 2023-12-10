import React from 'react'
import MagTitles from './magTitles'

function Mag() {
    return (
        <div className='h-[100vh] sm:h-[120vh] bg-white w-full relative flex content-evenly flex-wrap justify-center'>
            <h2 id='sliderTopHeader' className='absolute left-0 top-[10vh] w-full h-[15vh] text-[#061962] flex items-center justify-center text-[6vw] sm:text-[4vw]'>مجله اینترنتی دیجی پی</h2>
            <h3 className='absolute left-0 top-[20vh] sm:top-[25vh] w-full h-[7vh] text-[#061962] flex items-center justify-center font-bold text-[3vw] sm:text-[2vw]'>جدیدترین اخبار و مطالب حوزه مالی، پرداخت و فین‌تک</h3>
            <MagTitles/>
        </div>
    )
}

export default Mag