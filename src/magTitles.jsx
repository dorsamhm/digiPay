import React, { useEffect, useRef } from 'react'


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';

import mag1 from './assets/1.webp'
import mag2 from './assets/2.webp'
import mag3 from './assets/3.webp'
import mag4 from './assets/4.webp'
import mag5 from './assets/5.webp'
import mag6 from './assets/6.webp'
import mag7 from './assets/7.webp'
import mag8 from './assets/8.webp'
import mag9 from './assets/9.webp'
import mag10 from './assets/10.webp'
import mag11 from './assets/11.webp'
import mag12 from './assets/12.webp'
import mag13 from './assets/13.webp'
import mag14 from './assets/14.webp'

import { Pagination } from 'swiper/modules';

function MagTitles() {

    const titles = useRef()
    const contents = useRef()

    useEffect(()=>{
        let title = Object.entries(titles.current.children)
        let content = Object.entries(contents.current.children)
        // console.log(title);

        title.forEach(function(val, i){
            if(val[1].classList.contains('active'))
            {
                val[1].style.backgroundColor = '#0040ff'
                val[1].style.border = 'none'
                val[1].style.color = 'white'
                content[i][1].style.opacity = '1'
                content[i][1].style.visibility = 'visible'
            }
            val[1].addEventListener('click', ()=>{
                for(let j = 0;j<4;j++){
                    title[j][1].style.backgroundColor = 'transparent'
                    title[j][1].style.border = '1px solid #061962'
                    title[j][1].style.color = '#061962'
                    title[j][1].classList.remove('active')
                    content[j][1].style.opacity = '0'
                    content[j][1].style.visibility = 'hidden'
                }
                val[1].classList.add('active')
                val[1].style.backgroundColor = '#0040ff'
                val[1].style.border = 'none'
                val[1].style.color = 'white'

                content[i][1].style.opacity = '1'
                content[i][1].style.visibility = 'visible'
                // console.log(window.innerWidth);
                if(window.innerWidth <= 992){
                    titles.current.style.right = -((i)*170) +'px'
                }
            })
        })


    }, [])

    return (
        <div className='relative w-full h-[70vh] top-[15vh] right-0 flex flex-wrap content-between'>
            <div ref={titles} className='h-[15vh] sm:h-[10vh] w-[2000px] absolute right-0 flex justify-start items-center top-[5vh]'>
                <span className='w-[190px] sm:w-[200px] cursor-pointer active h-[70%] mx-2 rounded-[30px] border-[1px] border-[#061962] flex justify-center items-center text-[3vw] sm:text-[1.5vw] text-[#061962] font-bold'>اخبار</span>
                <span className='w-[190px] sm:w-[200px] cursor-pointer h-[70%] mx-2 rounded-[30px] border-[1px] border-[#061962] flex justify-center items-center text-[3vw] sm:text-[1.5vw] text-[#061962]  font-bold'>پی کست</span>
                <span className='w-[190px] sm:w-[250px] cursor-pointer h-[70%] mx-2 rounded-[30px] border-[1px] border-[#061962] flex justify-center items-center text-[3vw] sm:text-[1.5vw] text-[#061962]  font-bold'>راهنمای خرید</span>
                <span className='w-[190px] sm:w-[200px] cursor-pointer h-[70%] mx-2 rounded-[30px] border-[1px] border-[#061962] flex justify-center items-center text-[3vw] sm:text-[1.5vw] text-[#061962]  font-bold'>آکادمی</span>
            </div>
            <div ref={contents} className='h-[55vh] w-full relative right-0 flex items-center top-[15vh]'>
                <Slider pic1={mag1} pic2={mag2} pic3={mag3} pic4={mag4} name="اخبار" time1="۲ ماه پیش" desc1="وضعیت دریافت وام دیجی پی در استان های مختلف کشور" time2="۶ ماه پیش" desc2="اعطای بیش از ۳هزار میلیارد ریال اعتبار به کاربران در اردیبهشت ماه" time3="۱ سال پیش" desc3="قرعه کشی خرید اقساطی آبان" time4="۱ سال پیش" desc4="بازدید وزیر اقتصاد و معاون علمی و فرهنگی رییس جمهور از غرفه دیجی پی در نمایشگاه خانه نوآوری"/>
                <Slider pic1={mag5} pic2={mag6} pic3={mag7} pic4={mag8} name="پی کست" time1="۱ سال پیش" desc1="پی کست قسمت پنجم: کدوم ارز دیجیتال آینده بهتری داره؟" time2="۲ سال پیش" desc2="پی کست قسمت چهارم: چرا ارز دیجیتال رو باید جدی بگیریم؟" time3="۲ سال پیش" desc3="پی کست قسمت سوم: گیمیفیکیشن و هک رشد" time4="۲ سال پیش" desc4="پی کست قسمت دوم: کاربرد گیمیفیکیشن در کسب و کارها"/>
                <Slider2 pic1={mag9} pic2={mag10} pic3={mag11} name="راهنمای خرید" time1="۲ سال پیش" desc1="آیا خودروی من به دزدگیر نیاز دارد؟" time2="۳ سال پیش" desc2="خرید نقدی یا خرید اقساطی، کدام یک منطقی تر است؟" time3="۳ سال پیش" desc3="خرید اقساطی چه مزایایی دارد؟" />
                <Slider2 pic1={mag13} pic2={mag14} pic3={mag12} name="آکادمی" time1="۱۱ ماه پیش" desc1="۱۴ راز مهم برای تبدیل شدن به یک کارآفرین موفق" time2="۱ سال پیش" desc2="ویژگی های شخصیتی و مهارت های کارآفرینان را بشناسیم" time3="۳ ماه پیش" desc3="دوره آموزشی فین تک برای مدیران آینده" />
            </div>
        </div>
    )
}


function Slider({pic1, pic2, pic3, pic4, name, time1, desc1, time2, desc2, time3, desc3, time4, desc4}) {
    return (
        <Swiper
            slidesPerView='2'
            pagination={false}
            grabCursor={true}
            modules={[Pagination]}
            className=" h-full w-full opacity-0 invisible flex absolute top-0 left-1/2 translate-x-[-50%]"
            style={{position:"absolute"}}
        >
            <SwiperSlide>
                <figure className='bg-[#b1bfef] absolute overflow-hidden bg-black shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-2xl w-[45vw] h-[30vh] sm:h-[40vh] lg:h-[300px] 2xl:h-[45vh] mx-3'>
                    <span className='flex justify-center absolute top-[5%] left-[5%] items-center font-bold opacity-[80%] text-white text-[2vw] sm:text-[1vw] bg-[#fae690] rounded-[30px] min-w-[60px] px-5 h-[25px] sm:h-[40px]'>{name}</span>
                    <img className='h-full w-full object-cover rounded-2xl' src={pic1} />
                    <figcaption className='h-[40%] absolute left-0 bottom-0 w-full flex flex-wrap content-center bg-[#0040ff] opacity-75 px-5'>
                        <span className='flex items-center w-full font-bold text-[2vw] sm:text-[1vw] text-[#8d99d0]'>{time1}</span>
                        <h5 className='flex justify-start items-center w-full font-bold text-white text-[2.2vw] sm:text-[1.5vw]'>{desc1}</h5>
                    </figcaption>
                </figure>
            </SwiperSlide>
            <SwiperSlide>
            <figure className='bg-[#b1bfef] absolute overflow-hidden bg-black shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-2xl w-[45vw] h-[30vh] sm:h-[40vh] lg:h-[300px] 2xl:h-[45vh] mx-3'>
                    <span className='flex justify-center absolute top-[5%] left-[5%] items-center font-bold opacity-[80%] text-white text-[2vw] sm:text-[1vw] bg-[#fae690] rounded-[30px] min-w-[60px] px-5 h-[25px] sm:h-[40px]'>{name}</span>
                    <img className='h-full w-full object-cover rounded-2xl' src={pic2} />
                    <figcaption className='h-[40%] absolute left-0 bottom-0 w-full flex flex-wrap content-center bg-[#0040ff] opacity-75 px-5'>
                        <span className='flex items-center w-full font-bold text-[2vw] sm:text-[1vw] text-[#8d99d0]'>{time2}</span>
                        <h5 className='flex justify-start items-center w-full font-bold text-white text-[2.2vw] sm:text-[1.5vw]'>{desc2}</h5>
                    </figcaption>
                </figure>
            </SwiperSlide>
            <SwiperSlide>
            <figure className='bg-[#b1bfef] absolute overflow-hidden bg-black shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-2xl w-[45vw] h-[30vh] sm:h-[40vh] lg:h-[300px] 2xl:h-[45vh] mx-3'>
                    <span className='flex justify-center absolute top-[5%] left-[5%] items-center font-bold opacity-[80%] text-white text-[2vw] sm:text-[1vw] bg-[#fae690] rounded-[30px] min-w-[60px] px-5 h-[25px] sm:h-[40px]'>{name}</span>
                    <img className='h-full w-full object-cover rounded-2xl' src={pic3} />
                    <figcaption className='h-[40%] absolute left-0 bottom-0 w-full flex flex-wrap content-center bg-[#0040ff] opacity-75 px-5'>
                        <span className='flex items-center w-full font-bold text-[2vw] sm:text-[1vw] text-[#8d99d0]'>{time3}</span>
                        <h5 className='flex justify-start items-center w-full font-bold text-white text-[2.2vw] sm:text-[1.5vw]'>{desc3}</h5>
                    </figcaption>
                </figure>
            </SwiperSlide>
            <SwiperSlide>
            <figure className='bg-[#b1bfef] absolute overflow-hidden bg-black shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-2xl w-[45vw] h-[30vh] sm:h-[40vh] lg:h-[300px] 2xl:h-[45vh] mx-3'>
                    <span className='flex justify-center absolute top-[5%] left-[5%] items-center font-bold opacity-[80%] text-white text-[2vw] sm:text-[1vw] bg-[#fae690] rounded-[30px] min-w-[60px] px-5 h-[25px] sm:h-[40px]'>{name}</span>
                    <img className='h-full w-full object-cover rounded-2xl' src={pic4} />
                    <figcaption className='h-[40%] absolute left-0 bottom-0 w-full flex flex-wrap content-center bg-[#0040ff] opacity-75 px-5'>
                        <span className='flex items-center w-full font-bold text-[2vw] sm:text-[1vw] text-[#8d99d0]'>{time4}</span>
                        <h5 className='flex justify-start items-center w-full font-bold text-white text-[2.2vw] sm:text-[1.5vw]'>{desc4}</h5>
                    </figcaption>
                </figure>
            </SwiperSlide>
        </Swiper>
    )
}
function Slider2({pic1, pic2, pic3, name, time1, desc1, time2, desc2, time3, desc3}) {
    return (
        <Swiper
            slidesPerView='2'
            pagination={false}
            grabCursor={true}
            modules={[Pagination]}
            className=" h-full w-full opacity-0 invisible flex absolute top-0 left-1/2 translate-x-[-50%]"
            style={{position:"absolute"}}
        >
            <SwiperSlide>
                <figure className='bg-[#b1bfef] absolute overflow-hidden bg-black shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-2xl w-[45vw] h-[30vh] sm:h-[40vh] lg:h-[300px] 2xl:h-[45vh] mx-3'>
                    <span className='flex justify-center absolute top-[5%] left-[5%] items-center font-bold opacity-[80%] text-white text-[2vw] sm:text-[1vw] bg-[#fae690] rounded-[30px] min-w-[60px] px-5 h-[25px] sm:h-[40px]'>{name}</span>
                    <img className='h-full w-full object-cover rounded-2xl' src={pic1} />
                    <figcaption className='h-[40%] absolute left-0 bottom-0 w-full flex flex-wrap content-center bg-[#0040ff] opacity-75 px-5'>
                        <span className='flex items-center w-full font-bold text-[2vw] sm:text-[1vw] text-[#8d99d0]'>{time1}</span>
                        <h5 className='flex justify-start items-center w-full font-bold text-white text-[2.2vw] sm:text-[1.5vw]'>{desc1}</h5>
                    </figcaption>
                </figure>
            </SwiperSlide>
            <SwiperSlide>
            <figure className='bg-[#b1bfef] absolute overflow-hidden bg-black shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-2xl w-[45vw] h-[30vh] sm:h-[40vh] lg:h-[300px] 2xl:h-[45vh] mx-3'>
                    <span className='flex justify-center absolute top-[5%] left-[5%] items-center font-bold opacity-[80%] text-white text-[2vw] sm:text-[1vw] bg-[#fae690] rounded-[30px] min-w-[60px] px-5 h-[25px] sm:h-[40px]'>{name}</span>
                    <img className='h-full w-full object-cover rounded-2xl' src={pic2} />
                    <figcaption className='h-[40%] absolute left-0 bottom-0 w-full flex flex-wrap content-center bg-[#0040ff] opacity-75 px-5'>
                        <span className='flex items-center w-full font-bold text-[2vw] sm:text-[1vw] text-[#8d99d0]'>{time2}</span>
                        <h5 className='flex justify-start items-center w-full font-bold text-white text-[2.2vw] sm:text-[1.5vw]'>{desc2}</h5>
                    </figcaption>
                </figure>
            </SwiperSlide>
            <SwiperSlide>
            <figure className='bg-[#b1bfef] absolute overflow-hidden bg-black shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-2xl w-[45vw] h-[30vh] sm:h-[40vh] lg:h-[300px] 2xl:h-[45vh] mx-3'>
                    <span className='flex justify-center absolute top-[5%] left-[5%] items-center font-bold opacity-[80%] text-white text-[2vw] sm:text-[1vw] bg-[#fae690] rounded-[30px] min-w-[60px] px-5 h-[25px] sm:h-[40px]'>{name}</span>
                    <img className='h-full w-full object-cover rounded-2xl' src={pic3} />
                    <figcaption className='h-[40%] absolute left-0 bottom-0 w-full flex flex-wrap content-center bg-[#0040ff] opacity-75 px-5'>
                        <span className='flex items-center w-full font-bold text-[2vw] sm:text-[1vw] text-[#8d99d0]'>{time3}</span>
                        <h5 className='flex justify-start items-center w-full font-bold text-white text-[2.2vw] sm:text-[1.5vw]'>{desc3}</h5>
                    </figcaption>
                </figure>
            </SwiperSlide>
        </Swiper>
    )
}
export default MagTitles