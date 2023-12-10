import React from 'react'

import logo from './assets/logo.svg'

function Footer() {
    return (
        <div className='bg-white h-auto flex flex-wrap content-center justify-center border-t-[1px]'>
            <div className='h-[50vh] w-[45%] lg:w-[30%] flex px-5 flex-wrap content-center justify-start'>
                <figure className='w-[100px] h-[100px]'>
                    <img className='h-full w-full object-contain' src={logo} alt="logoFoot" />
                </figure>
                <div className='socialFoot flex flex-wrap content-center w-full h-[30%]'>
                    <span className='flex justify-start items-center w-full font-bold text-[2.3vw] sm:text-[1vw] text-[#061962]'>شبکه های اجتماعی</span>
                    <div className='flex justify-start w-full h-[60%] items-center'>
                        <a href="https://instagram.com/dorsamhmdi.web?igshid=OGQ5ZDc2ODk2ZA==" target='_blank' className='flex justify-start items-center w-[20px] sm:w-[30px] h-[20px] sm:h-[30px] lg:w-[50px] lg:h-[50px] rounded-full border-[1px] ml-2 border-[#061962] font-bold text-[2vw] sm:text-[1vw] text-[#061962]'><i className="w-full h-full flex items-center justify-center bi bi-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/dorsa-mohammadi-692854284" target='_blank' className='flex justify-start items-center w-[20px] sm:w-[30px] h-[20px] sm:h-[30px] lg:w-[50px] lg:h-[50px] rounded-full border-[1px] border-[#061962] mx-2 font-bold text-[2vw] sm:text-[1vw] text-[#061962]'><i className="w-full h-full flex items-center justify-center bi bi-linkedin"></i></a>
                        <a href="https://github.com/dorsamhm" target='_blank' className='flex justify-start items-center w-[20px] sm:w-[30px] h-[20px] sm:h-[30px] lg:w-[50px] lg:h-[50px] rounded-full border-[1px] border-[#061962] font-bold text-[2vw] sm:text-[1vw] mx-2 text-[#061962]'><i className="w-full h-full flex items-center justify-center bi bi-github"></i></a>
                    </div>
                    <h3 className='flex justify-start items-center w-full font-bold text-[2.5vw] sm:text-[1vw] text-[#061962]'>بازنویسی شده توسط درسا محمدی</h3>
                </div>
            </div>
            <div className='flex justify-between items-center w-[45%] lg:w-[30%] h-[50vh] px-3'>
                <div className='w-[48%]  h-[90%] flex flex-wrap justify-start content-evenly py-16'>
                    <span className='flex justify-start items-center w-full font-bold text-[2.5vw] sm:text-[1.5vw] text-[#061962]'>درباره ما</span>
                    <div className='flex justify-start items-center w-full cursor-pointer'>
                        <span className='flex justify-start items-center w-auto font-bold text-[2vw] sm:text-[1vw] h-full text-[#061962]'>درباره دیجی پی</span>
                        <span className='flex justify-start items-center font-thin text-[2vw] sm:text-[1vw] h-full mx-2 w-auto text-[#061962]'><i className="w-full h-full flex items-center justify-center bi bi-caret-left-fill"></i></span>
                    </div>
                    <div className='flex justify-start items-center w-full cursor-pointer'>
                        <span className='flex justify-start items-center w-auto font-bold text-[2vw] sm:text-[1vw] h-full text-[#061962]'>تماس با ما</span>
                        <span className='flex justify-start items-center font-thin text-[2vw] sm:text-[1vw] h-full mx-2 w-auto text-[#061962]'><i className="w-full h-full flex items-center justify-center bi bi-caret-left-fill"></i></span>
                    </div>
                    <div className='flex justify-start items-center w-full cursor-pointer'>
                        <span className='flex justify-start items-center w-auto font-bold text-[2vw] sm:text-[1vw] h-full text-[#061962]'>مجله اینترنتی دیجی پی</span>
                        <span className='flex justify-start items-center font-thin text-[2vw] sm:text-[1vw] h-full mx-2 w-auto text-[#061962]'><i className="w-full h-full flex items-center justify-center bi bi-caret-left-fill"></i></span>
                    </div>
                    <div className='flex justify-start items-center w-full cursor-pointer'>
                        <span className='flex justify-start items-center w-auto font-bold text-[2vw] sm:text-[1vw] h-full text-[#061962]'>فرصت های شغلی</span>
                        <span className='flex justify-start items-center font-thin text-[2vw] sm:text-[1vw] h-full mx-2 w-auto text-[#061962]'><i className="w-full h-full flex items-center justify-center bi bi-caret-left-fill"></i></span>
                    </div>
                </div>
                <div className='w-[48%]  h-[90%] flex flex-wrap justify-start content-evenly py-16'>
                    <span className='flex justify-start items-center w-full font-bold text-[2.5vw] sm:text-[1.5vw] text-[#061962]'>خدمات ما</span>
                    <div className='flex justify-start items-center w-full cursor-pointer'>
                        <span className='flex justify-start items-center w-auto font-bold text-[2vw] sm:text-[1vw] h-full text-[#061962]'>خرید شارژ</span>
                        <span className='flex justify-start items-center font-thin text-[2vw] sm:text-[1vw] h-full mx-2 w-auto text-[#061962]'><i className="w-full h-full flex items-center justify-center bi bi-caret-left-fill"></i></span>
                    </div>
                    <div className='flex justify-start items-center w-full cursor-pointer'>
                        <span className='flex justify-start items-center w-auto font-bold text-[2vw] sm:text-[1vw] h-full text-[#061962]'>خرید اینترنت</span>
                        <span className='flex justify-start items-center font-thin text-[2vw] sm:text-[1vw] h-full mx-2 w-auto text-[#061962]'><i className="w-full h-full flex items-center justify-center bi bi-caret-left-fill"></i></span>
                    </div>
                    <div className='flex justify-start items-center w-full cursor-pointer'>
                        <span className='flex justify-start items-center w-auto font-bold text-[2vw] sm:text-[1vw] h-full text-[#061962]'>دریافت اعتبار</span>
                        <span className='flex justify-start items-center font-thin text-[2vw] sm:text-[1vw] h-full mx-2 w-auto text-[#061962]'><i className="w-full h-full flex items-center justify-center bi bi-caret-left-fill"></i></span>
                    </div>
                    <div className='flex justify-start items-center w-full cursor-pointer'>
                        <span className='flex justify-start items-center w-auto font-bold text-[2vw] sm:text-[1vw] h-full text-[#061962]'>پرداخت قبض</span>
                        <span className='flex justify-start items-center font-thin text-[2vw] sm:text-[1vw] h-full mx-2 w-auto text-[#061962]'><i className="w-full h-full flex items-center justify-center bi bi-caret-left-fill"></i></span>
                    </div>
                </div>
            </div>
            <div className='h-[30vh] sm:h-[50vh] w-[90%] lg:w-[33%] flex px-2 flex-wrap content-between py-3 sm:py-0 mt-[-10vh] sm:mt-0 sm:content-center justify-start '>
                <div className='flex flex-wrap content-center w-full h-[50%] px-5'>
                    <span className='flex justify-start items-center w-full font-bold text-[3vw] sm:text-[1.5vw] text-[#061962] my-3 sm:my-0'>دانلود سریع</span>
                    <div className='flex justify-start w-full h-[40%] sm:h-[60%] items-center '>
                        <div className='w-[30%] border-l-[1px] px-2 sm:px-0 h-full group flex flex-wrap cursor-pointer justify-start content-center'>
                            <span className='w-[30%] duration-300 h-full flex items-center  group-hover:text-[#d8227d]'><i className="h-full w-full flex justify-center items-center bi bi-google-play"></i></span>
                            <div className='flex h-full w-[70%] content-center flex-wrap'>
                                <h4 className='duration-300 w-full text-[#061962] text-[2.2vw] sm:text-[1vw] font-bold flex items-center justify-center sm:justify-start group-hover:text-[#061962]'>گوگل پلی</h4>
                                <span className='text-[#828cb1] justify-center sm:justify-start text-[1.5vw] sm:text-[.7vw] font-thin w-full flex items-center'>برای کاربران اندروید</span>
                            </div>
                        </div>
                        <div className='w-[33%] sm:w-[30%] px-2 sm:px-0 border-l-[1px] h-full group flex flex-wrap cursor-pointer justify-start content-center'>
                            <span className='w-[30%] duration-300 h-full flex items-center  group-hover:text-[#02b75d]'><i className="h-full w-full flex justify-center items-center bi bi-android2"></i></span>
                            <div className='flex h-full w-[70%] content-center flex-wrap'>
                                <h4 className='duration-300 w-full text-[#061962] text-[2.2vw] sm:text-[1vw] font-bold flex items-center justify-center sm:justify-start group-hover:text-[#02b75d]'>کافه بازار</h4>
                                <span className='text-[#828cb1] justify-center sm:justify-start text-[1.5vw] sm:text-[.7vw] font-thin w-full flex items-center'>برای کاربران اندروید</span>
                            </div>
                        </div>
                        <div className='w-[33%] sm:w-[30%] px-2 sm:px-0 h-full group flex flex-wrap cursor-pointer justify-start content-center'>
                            <span className='w-[30%] duration-300 h-full flex items-center  group-hover:text-[#0040ff]'><i className="h-full w-full flex justify-center items-center bi bi-globe2"></i></span>
                            <div className='flex h-full w-[70%] content-center flex-wrap'>
                                <h4 className='duration-300 w-full text-[#061962] text-[2.2vw] sm:text-[1vw] font-bold flex items-center justify-center sm:justify-start group-hover:text-[#0040ff]'>وب اپلیکیشن</h4>
                                <span className='text-[#828cb1] justify-center sm:justify-start text-[1.5vw] sm:text-[.7vw] font-thin w-full flex items-center'>همه کاربران</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center w-full h-[30%] rounded-2xl bg-[#f5f8ff] px-5'>
                    <div className='flex h-full w-[60%] content-center flex-wrap'>
                        <h4 className=' w-full text-[#061962] text-[2.2vw] sm:text-[1.2vw] font-bold flex items-center'>مشاهده لینک دانلود اپلیکیشن</h4>
                        <span className='text-[#061962] text-[2vw] sm:text-[1vw] font-thin w-full flex items-center'>پشتیبانی از همه پلتفرم ها</span>
                    </div>
                    <a className='text-white text-[1.5vw] sm:text-[1vw] font-bold cursor-pointer w-[30%] bg-[#061962] h-[50%] justify-center rounded-2xl flex items-center'>دانلود اپلیکیشن</a>
                </div>
            </div>
        </div>
    )
}

export default Footer