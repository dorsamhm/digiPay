import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import service1 from './assets/service1.webp'
import service2 from './assets/service2.webp'
import service3 from './assets/service3.webp'
import servPic1 from './assets/servPic1.webp'
import servPic2 from './assets/servPic2.png'
import servPic3 from './assets/servPic3.webp'




function jobServices() {

    const services_ul = useRef()

    useEffect(() => {
        let _li = Object.entries(services_ul.current.children)
        // console.log(_li);

        _li.forEach(function (val, i) {
            if (val[1].classList.contains('active')) {
                let divs = val[1].children
                let thisTitle = divs[0]
                let thisContent = divs[1]
                thisTitle.style.backgroundColor = 'white'
                thisTitle.style.border = '1px solid #fbe68d'
                thisContent.style.opacity = '1'
                thisContent.style.visibility = 'visible'

            }
            val[1].addEventListener('click', () => {
                for (let j = 0; j < 3; j++) {
                    let title = _li[j][1].children
                    _li[j][1].classList.remove('active')
                    title = title[0]
                    let content = _li[j][1].children
                    content = content[1]
                    title.style.backgroundColor = '#f8f9fe'
                    title.style.border = 'none'
                    // console.log(title);
                    content.style.opacity = '0'
                    content.style.visibility = 'hidden'
                    // console.log(content);
                }
                let divs = val[1].children
                let thisTitle = divs[0]
                let thisContent = divs[1]
                val[1].classList.add('active')
                thisTitle.style.backgroundColor = 'white'
                thisTitle.style.border = '1px solid #fbe68d'
                thisContent.style.opacity = '1'
                thisContent.style.visibility = 'visible'
            })
        })

    }, [])

    return (
        <div className='flex flex-wrap content-center h-[130vh] w-full bg-white'>
            <h2 id='sliderTopHeader' className='w-full h-auto my-3 sm:my-0 sm:h-[15vh] text-[#061962] flex items-center justify-center text-[6vw] sm:text-[4vw]'>خدمات کسب و کارها</h2>
            <h3 className='w-full h-auto sm:h-[7vh] text-[#061962] flex items-center justify-center font-bold text-[2vw]'>شروع تحولی محسوس در کسب و کارتان</h3>

            <nav className='h-[90vh] w-full'>
                <ul className='w-full h-full relative flex flex-wrap content-evenly justify-evenly' ref={services_ul}>

                    <li className='w-[27%] h-[70px] sm:h-[130px] lg:h-[150px] flex group active'>
                        <div className='w-full h-full z-10 flex justify-center translate-y-[-30vh] bg-[#f8f9fe] rounded-2xl cursor-pointer duration-300 items-center'>
                            <figure className='w-[35%] h-full flex justify-center items-center'>
                                <img className='w-[50%] h-full object-contain' src={service1} />
                            </figure>
                            <div className='flex flex-wrap content-center w-[60%] h-full'>
                                <h4 className='w-full text-[#061962] text-[1.5vw] font-bold flex items-center'>درگاه پرداخت هوشمند</h4>
                                <span className='text-[#828cb1] text-[1vw] font-thin w-full flex items-center'>افزایش شانس پرداخت موفق</span>
                            </div>
                        </div>

                        <div className='servicesSub opacity-0 invisible absolute duration-300 border w-[90vw] sm:w-[80vw] rounded-lg h-[55vh] sm:h-[75vh] bg-white left-1/2 translate-x-[-50%] top-[60vh] translate-y-[-50%] flex flex-wrap items-center justify-around' data-status='closed'>
                            <div className='flex flex-wrap content-between sm:content-evenly w-[90%] sm:w-[60%] h-[50%] sm:h-full px-5'>
                                <h4 id='sliderH5' className='w-full text-[#828cb1] text-[4vw] sm:text-[3vw] font-extrathin flex items-center'>افزایش شانس پرداخت های اینترنتی کسب و کار شما</h4>
                                <div className='h-[5vh] w-full rounded-2xl flex justify-between border-[1px] items-center px-2 lg:px-0'>
                                    <div className='flex justify-center items-center w-[32%] h-full'>
                                        <span className='flex justify-center h-full w-[20%]'><i className="bi bi-check-circle-fill items-center flex justify-center text-[#f8d748] w-full h-full"></i></span>
                                        <span className='flex justify-start mx-1 sm:mx-0 h-full w-[80%] items-center text-[1.5vw] sm:text-[.8vw]'>پنل اختصاصی</span>
                                    </div>
                                    <div className='flex justify-center items-center w-[32%] h-full'>
                                        <span className='flex justify-center h-full w-[20%] '><i className="bi bi-check-circle-fill items-center flex justify-center text-[#f8d748] w-full h-full"></i></span>
                                        <span className='flex justify-start mx-1 sm:mx-0 h-full w-[80%] items-center text-[1.5vw] sm:text-[.8vw]'>پشتیبانی حرفه ای</span>
                                    </div>
                                    <div className='flex justify-center items-center w-[32%] h-full'>
                                        <span className='flex justify-center h-full w-[20%]'><i className="bi bi-check-circle-fill items-center flex justify-center text-[#f8d748] w-full h-full"></i></span>
                                        <span className='flex mx-1 sm:mx-0 justify-start h-full w-[80%] items-center text-[1.5vw] sm:text-[.8vw]'>قرارداد واحد</span>
                                    </div>
                                </div>
                                <p className='text-[#828cb1] text-[1.5vw] sm:text-[1vw] font-thin w-full flex items-center'>درگاه پرداخت هوشمند (Smart IPG) دیجی‌پی سرویسی است که می‌تواند عملکرد درگاه‌های پرداخت مختلف را مورد سنجش قرار دهد و از میان آنها بهترین درگـاه را انتخاب کند. درگاه پرداخت هوشـمند دیجی‌پی بر اساس مـعیارهای نـرم افزاری مخــتلف به درگاه‌های مختلف امتیاز می‌دهد و کیفیت عـملکرد آن‌هـا را به صـورت لحظه‌ای پایـش مـی‌کند </p>

                                <a className='min-w-[100px] sm:min-w-[150px] p-3 min-h-[30px] sm:min-h-[50px] rounded-lg bg-[#0040ff] text-white font-bold flex justify-center items-center text-[2vw] sm:text-[1vw] cursor-pointer'>درگاه پرداخت هوشمند</a>
                            </div>
                            <figure className='w-[90%] sm:w-[35%] h-[45%] sm:h-full flex justify-center items-center'>
                                <img className='w-[50%] h-full object-contain' src={servPic1} />
                            </figure>
                        </div>
                    </li>
                    <li className='w-[27%] h-[70px] sm:h-[130px] lg:h-[150px] flex group'>
                        <div className='w-full h-full z-10 flex justify-center translate-y-[-30vh] bg-[#f8f9fe] rounded-2xl cursor-pointer duration-300 items-center' >
                            <figure className='w-[35%] h-full flex justify-center items-center'>
                                <img className='w-[50%] h-full object-contain' src={service2} />
                            </figure>
                            <div className='flex flex-wrap content-center w-[60%] h-full'>
                                <h4 className='w-full text-[#061962] text-[1.5vw] font-bold flex items-center'>وام خرید کالا سازمانی</h4>
                                <span className='text-[#828cb1] text-[1vw] font-thin w-full flex items-center'>دریافت اعتبار برای کارمندان سازمان ها</span>
                            </div>
                        </div>

                        <div className='servicesSub absolute bg-white opacity-0 duration-300 invisible border  w-[90vw] sm:w-[80vw] rounded-lg h-[55vh] sm:h-[75vh] left-1/2 translate-x-[-50%] top-[60vh] translate-y-[-50%] flex flex-wrap items-center justify-around' data-status='closed'>
                            <div className='flex flex-wrap content-between sm:content-evenly w-[90%] sm:w-[60%] h-[50%] sm:h-full px-5'>
                                <h4 id='sliderH5' className='w-full text-[#828cb1] text-[4vw] sm:text-[3vw] font-extrathin flex items-center'>با اعتبار دیجی پی، از دیجی کالا قسطی خرید کنید</h4>
                                <div className='h-[5vh] w-full rounded-2xl flex justify-between border-[1px] items-center'>
                                    <div className='flex justify-center items-center w-[32%] h-full  px-2 lg:px-0'>
                                        <span className='flex justify-center h-full w-[20%]'><i className="bi bi-check-circle-fill items-center flex justify-center text-[#f8d748] w-full h-full"></i></span>
                                        <span className='flex mx-1 sm:mx-0 justify-start h-full w-[80%] items-center text-[1.5vw] sm:text-[.8vw]'>ثبت نام</span>
                                    </div>
                                    <div className='flex justify-center items-center w-[32%] h-full'>
                                        <span className='flex justify-center h-full w-[20%] '><i className="bi bi-check-circle-fill items-center flex justify-center text-[#f8d748] w-full h-full"></i></span>
                                        <span className='flex mx-1 sm:mx-0 justify-start h-full w-[80%] items-center text-[1.5vw] sm:text-[.8vw]'>بررسی درخواست</span>
                                    </div>
                                    <div className='flex justify-center items-center w-[32%] h-full'>
                                        <span className='flex justify-center h-full w-[20%]'><i className="bi bi-check-circle-fill items-center flex justify-center text-[#f8d748] w-full h-full"></i></span>
                                        <span className='flex mx-1 sm:mx-0 justify-start h-full w-[80%] items-center text-[1.5vw] sm:text-[.8vw]'>ادامه مراحل دریافت اعتبار</span>
                                    </div>
                                </div>
                                <p className='text-[#828cb1]  text-[1.5vw] sm:text-[1vw] font-thin w-full flex items-center'>شرکت دیجی‌پی امکان خرید با وام کارکنان سازمان‌ها روی دیجی‌کالا و با امکان انتخاب از بستری شامل ۱۰ میلیون کالا، در سرتاسر کشور فراهم نموده است. جهت استفاده از این سرویس کافیست سازمان‌ها با دیجی‌پی، تفاهم نامه همکاری داشته باشد. بدین‌ترتیب کارکنان، بدون نیاز به چک یا سفته ضمانت و فقط با ارائه مدارک هویتی و فیش حقوقی و ضمانت سازمان، امکان خرید تا سقف ۳۰ میلیون تومان و بازپرداخت در بلند مدت را خواهند داشت . </p>

                                <a className='min-w-[100px] sm:min-w-[150px] p-3 min-h-[30px] sm:min-h-[50px] rounded-lg bg-[#0040ff] text-white font-bold flex justify-center items-center text-[2vw] sm:text-[1vw] cursor-pointer'>اطلاعات بیشتر</a>
                            </div>
                            <figure className='w-[90%] sm:w-[35%] h-[45%] sm:h-full flex justify-center items-center'>
                                <img className='w-[50%] h-full object-contain' src={servPic2} />
                            </figure>
                        </div>
                    </li>
                    <li className='w-[27%] h-[70px] sm:h-[130px] lg:h-[150px] flex group'>
                        <div className='w-full h-full z-10 flex justify-center translate-y-[-30vh] bg-[#f8f9fe] rounded-2xl cursor-pointer duration-300 items-center' >
                            <figure className='w-[35%] h-full flex justify-center items-center' >
                                <img className='w-[50%] h-full object-contain' src={service3} />
                            </figure>
                            <div className='flex flex-wrap content-center w-[60%] h-full'>
                                <h4 className='w-full text-[#061962] text-[1.5vw] font-bold flex items-center'>درگاه پرداخت اشتراک</h4>
                                <span className='text-[#828cb1] text-[1vw] font-thin w-full flex items-center'>پرداخت خودکار اشتراک ها</span>
                            </div>
                        </div>

                        <div className='servicesSub absolute bg-white opacity-0 duration-300 invisible border  w-[90vw] sm:w-[80vw] rounded-lg h-[55vh] sm:h-[75vh] left-1/2 translate-x-[-50%] top-[60vh] translate-y-[-50%] flex flex-wrap items-center justify-around' data-status='closed'>
                            <div className='flex flex-wrap content-between sm:content-evenly w-[90%] sm:w-[60%] h-[50%] sm:h-full px-5'>
                                <h4 id='sliderH5' className='w-full text-[#828cb1] text-[4vw] sm:text-[3vw] font-extrathin flex items-center'>آسان شدن فرآیند تمدید سرویس های اشتراکی</h4>
                                <div className='h-[5vh] w-full rounded-2xl flex justify-between border-[1px] items-center'>
                                    <div className='flex justify-center items-center w-[32%] h-full  px-2 lg:px-0'>
                                        <span className='flex justify-center h-full w-[20%]'><i className="bi bi-check-circle-fill items-center flex justify-center text-[#f8d748] w-full h-full"></i></span>
                                        <span className='flex mx-1 sm:mx-0 justify-start h-full w-[80%] items-center text-[1.5vw] sm:text-[.8vw]'>دسترسی به پنل گزارش</span>
                                    </div>
                                    <div className='flex justify-center items-center w-[32%] h-full'>
                                        <span className='flex justify-center h-full w-[20%] '><i className="bi bi-check-circle-fill items-center flex justify-center text-[#f8d748] w-full h-full"></i></span>
                                        <span className='flex mx-1 sm:mx-0 justify-start h-full w-[80%] items-center text-[1.5vw] sm:text-[.8vw]'>تسهیل در عقد قرارداد های مشابه</span>
                                    </div>
                                    <div className='flex justify-center items-center w-[32%] h-full'>
                                        <span className='flex justify-center h-full w-[20%]'><i className="bi bi-check-circle-fill items-center flex justify-center text-[#f8d748] w-full h-full"></i></span>
                                        <span className='flex mx-1 sm:mx-0 justify-start h-full w-[80%] items-center text-[1.5vw] sm:text-[.8vw]'>دوره آزمایشی</span>
                                    </div>
                                </div>
                                <p className='text-[#828cb1]  text-[1.5vw] sm:text-[1vw] font-thin w-full flex items-center'>پرداخت حق عضویت یا درگاه پرداخت اشتراک، برای کسب و کارهایی که خدمات خود را در قالب بسته‌های اشتراک ارائه می‌دهند، طراحی شده است. این سرویس طی یک قرارداد سه جانبه، مجوز برداشت خودکار از کیف پول دیجی‌پی کاربر را با تأیید وی و به منظور پرداخت دوره‌ای خدمات مختلف دریافت می‌کند. </p>

                                <a className='min-w-[100px] sm:min-w-[150px] p-3 min-h-[30px] sm:min-h-[50px] rounded-lg bg-[#0040ff] text-white font-bold flex justify-center items-center text-[2vw] sm:text-[1vw] cursor-pointer'>درگاه پرداخت اشتراک</a>
                            </div>
                            <figure className='w-[90%] sm:w-[35%] h-[45%] sm:h-fulll flex justify-center items-center'>
                                <img className='w-[50%] h-full object-contain' src={servPic3} />
                            </figure>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default jobServices
