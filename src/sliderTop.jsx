import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './styles.css';

import sliderTop1 from './assets/sliderTop1.webp'
import sliderTop2 from './assets/sliderTop2.webp'
import sliderTop3 from './assets/sliderTop3.webp'
import sliderTop4 from './assets/sliderTop4.webp'
import sliderTop5 from './assets/sliderTop5.webp'
import sliderTop6 from './assets/sliderTop6.webp'
import sliderTop7 from './assets/sliderTop7.webp'
import sliderTop8 from './assets/sliderTop8.webp'
import sliderTop9 from './assets/sliderTop9.webp'


import { EffectCoverflow, Pagination } from 'swiper/modules';


function sliderTop() {
  return (
    <div className='flex flex-wrap content-center h-[100vh] w-full bg-[#e7ecfd]'>
        <h3 className='w-full h-auto sm:h-[7vh] my-3 sm:my-0 text-[#061962] flex items-center justify-center font-bold text-[2vw]'>تراکنش های هوشمندانه و سریع با</h3>
        <h1 id='sliderTopHeader' className='w-full h-auto sm:h-[15vh] text-[#061962] flex items-center justify-center text-[7vw] sm:text-[5vw]'>اپلیکیشن پرداخت موبایلی دیجی پی</h1>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={false}
          slidesPerView={'auto'}
          coverflowEffect={{
            // rotate: 50,
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <figure className='bg-[#b1bfef] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-2xl w-[320px] h-[300px]'>
                <img className='h-[70%] object-contain' src={sliderTop1}/>
                <figcaption className='h-[25%] w-full flex flex-wrap content-center'>
                    <h5 id='sliderH5' className='flex justify-center items-center w-full h-[55%] font-bold text-[#0040ff] text-[8vw] sm:text-[2vw] md:text-[2.7vw] 2xl:text-[2vw]'>وام خرید کالا</h5>
                    <span className='flex justify-center items-center w-full h-[40%] font-thin text-auto text-[#061962]'>بدون نیاز به ضامن</span>
                </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
          <figure className='bg-[#b1bfef] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-2xl w-[320px] h-[300px]'>
                <img className='h-[70%] object-contain' src={sliderTop2}/>
                <figcaption className='h-[25%] w-full flex flex-wrap content-center'>
                    <h5 id='sliderH5' className='flex justify-center items-center w-full h-[55%] font-bold text-[#0040ff] text-[8vw] sm:text-[2vw] md:text-[2.7vw] 2xl:text-[2vw]'>کارت به کارت</h5>
                    <span className='flex justify-center items-center w-full h-[40%] font-thin text-auto text-[#061962]'>با پوشش بیش از ۲۰ کارت بانکی</span>
                </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
          <figure className='bg-[#b1bfef] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-2xl w-[320px] h-[300px]'>
                <img className='h-[70%] object-contain' src={sliderTop3}/>
                <figcaption className='h-[25%] w-full flex flex-wrap content-center'>
                    <h5 id='sliderH5' className='flex justify-center items-center w-full h-[55%] font-bold text-[#0040ff] text-[8vw] sm:text-[2vw] md:text-[2.7vw] 2xl:text-[2vw]'>پرداخت قبوض</h5>
                    <span className='flex justify-center items-center w-full h-[40%] font-thin text-auto text-[#061962]'>با امکان یادآوری سررسید قبض</span>
                </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
          <figure className='bg-[#b1bfef] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-2xl w-[320px] h-[300px]'>
                <img className='h-[70%] object-contain' src={sliderTop4}/>
                <figcaption className='h-[25%] w-full flex flex-wrap content-center'>
                    <h5 id='sliderH5' className='flex justify-center items-center w-full h-[55%] font-bold text-[#0040ff] text-[8vw] sm:text-[2vw] md:text-[2.7vw] 2xl:text-[2vw]'>خرید بسته اینترنت</h5>
                    <span className='flex justify-center items-center w-full h-[40%] font-thin text-auto text-[#061962]'>طرح های متنوع از اپراتور های مختلف</span>
                </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
          <figure className='bg-[#b1bfef] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-2xl w-[320px] h-[300px]'>
                <img className='h-[70%] object-contain' src={sliderTop5}/>
                <figcaption className='h-[25%] w-full flex flex-wrap content-center'>
                    <h5 id='sliderH5' className='flex justify-center items-center w-full h-[55%] font-bold text-[#0040ff] text-[8vw] sm:text-[2vw] md:text-[2.7vw] 2xl:text-[2vw]'>خرید شارژ</h5>
                    <span className='flex justify-center items-center w-full h-[40%] font-thin text-auto text-[#061962]'>با امکان تنظیم یادآور</span>
                </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
          <figure className='bg-[#b1bfef] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-2xl w-[320px] h-[300px]'>
                <img className='h-[70%] object-contain' src={sliderTop6}/>
                <figcaption className='h-[25%] w-full flex flex-wrap content-center'>
                    <h5 id='sliderH5' className='flex justify-center items-center w-full h-[55%] font-bold text-[#0040ff] text-[8vw] sm:text-[2vw] md:text-[2.7vw] 2xl:text-[2vw]'>کیف پول دیجی پی</h5>
                    <span className='flex justify-center items-center w-full h-[40%] font-thin text-auto text-[#061962]'>تجربه پرداخت های امن و آسان</span>
                </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
          <figure className='bg-[#b1bfef] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-2xl w-[320px] h-[300px]'>
                <img className='h-[70%] object-contain' src={sliderTop7}/>
                <figcaption className='h-[25%] w-full flex flex-wrap content-center'>
                    <h5 id='sliderH5' className='flex justify-center items-center w-full h-[55%] font-bold text-[#0040ff] text-[8vw] sm:text-[2vw] md:text-[2.7vw] 2xl:text-[2vw]'>خیریه</h5>
                    <span className='flex justify-center items-center w-full h-[40%] font-thin text-auto text-[#061962]'>امکان کمک آنلاین به بیش از ۲۵ خیریه</span>
                </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
          <figure className='bg-[#b1bfef] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-2xl w-[320px] h-[300px]'>
                <img className='h-[70%] object-contain' src={sliderTop8}/>
                <figcaption className='h-[25%] w-full flex flex-wrap content-center'>
                    <h5 id='sliderH5' className='flex justify-center items-center w-full h-[55%] font-bold text-[#0040ff] text-[8vw] sm:text-[2vw] md:text-[2.7vw] 2xl:text-[1.7vw]'>بیمه تجهیزات الکترونیکی</h5>
                    <span className='flex justify-center items-center w-full h-[40%] font-thin text-auto text-[#061962]'>خرید بیمه گوشی موبایل</span>
                </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
          <figure className='bg-[#b1bfef] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-2xl w-[320px] h-[300px]'>
                <img className='h-[70%] object-contain' src={sliderTop9}/>
                <figcaption className='h-[25%] w-full flex flex-wrap content-center'>
                    <h5 id='sliderH5' className='flex justify-center items-center w-full h-[55%] font-bold text-[#0040ff] text-[8vw] sm:text-[2vw] md:text-[2.7vw] 2xl:text-[2vw]'>پرداخت کرایه تاکسی</h5>
                    <span className='flex justify-center items-center w-full h-[40%] font-thin text-auto text-[#061962]'>پرداخت آنلاین بدون نیاز به پول نقد</span>
                </figcaption>
            </figure>
          </SwiperSlide>
        </Swiper>
      </div>
  )
}

export default sliderTop

