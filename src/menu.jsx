import React, { useEffect, useRef, useState } from 'react'

import logo from './assets/logo.svg'
import digi99 from './assets/digipayBlue.webp'
import digi400 from './assets/digi1400.webp'
import digi401 from './assets/digi1401.webp'
import vaamTop from './assets/vaamTop.webp'
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
import loginPic from './assets/loginPic.svg'

function Menu() {
    const toggleSub = useRef()

    let i = 1;
    function toggle(e) {
        if (i % 2) {
            toggleSub.current.style.opacity = '1'
            toggleSub.current.style.visibility = 'visible'
            e.target.classList.remove('bi-list')
            e.target.classList.add('bi-x-lg')

        }
        else {
            toggleSub.current.style.opacity = '0'
            toggleSub.current.style.visibility = 'hidden'
            e.target.classList.add('bi-list')
            e.target.classList.remove('bi-x-lg')
        }
        i++
    }

    let j = 1
    function categoryToggle(e) {
        if (j % 2) {
            e.target.innerHTML = '-'
            e.target.nextElementSibling.style.height = '40vh'
            e.target.nextElementSibling.style.opacity = '1'
            e.target.style.alignItems = 'start'
            e.target.style.paddingTop = '20px'
            e.target.previousElementSibling.style.alignItems = 'start'
            e.target.previousElementSibling.style.paddingTop = '20px'
            e.target.parentElement.style.height = '50vh'
        }
        else {
            e.target.innerHTML = '+'
            e.target.nextElementSibling.style.height = '0'
            e.target.nextElementSibling.style.opacity = '0'
            e.target.previousElementSibling.style.alignItems = 'center'
            e.target.previousElementSibling.style.paddingTop = '0%'
            e.target.style.alignItems = 'center'
            e.target.style.paddingTop = '0%'
            e.target.parentElement.style.height = '10vh'
        }
        j++
    }



    const [fixed, setFixed] = useState(false)

    window.addEventListener('scroll', function () {
        let temp = window.scrollY
        if (temp >= (70)) {
            setFixed(true)
        }
        else {
            setFixed(false)
        }
    })

    const login = useRef()
    const inputNumber = useRef()
    const closeButton = useRef()
    const openButton = useRef()
    const bgBack = useRef()
    const send = useRef()
    const [module, setModule] = useState(false)
    useEffect(() => {
        closeButton.current.addEventListener('click', function () {
            setModule(false)
        })
        openButton.current.addEventListener('click', function () {
            setModule(true)
        })
        bgBack.current.addEventListener('click', function () {
            setModule(false)
        })

        inputNumber.current.addEventListener('keyup', function (val) {
            // console.log(inputNumber.current.value);
            function checkPattern() {
                let re = /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/;
                return re.test(inputNumber.current.value);
            }
            if (checkPattern()) {
                send.current.style.color = 'white'
                send.current.style.backgroundColor = '#0040ff'
                // alert('true')
            }
            else{
                send.current.style.color = '#b2b2b2'
                send.current.style.backgroundColor = '#e6e6e6'
            }
        })
        send.current.addEventListener('click', function(val) {
            let bg = window.getComputedStyle(send.current).backgroundColor
            if(bg == 'rgb(0, 64, 255)'){
                alert('ارسال شد')
                inputNumber.current.value = ''
            }
            else{
                alert('لطفا درست وارد کنید')
                inputNumber.current.value = ''
                inputNumber.current.focus()
            }
        })

    }, [])

    return (
        <div className={fixed ? 'h-[15vh] shadow-[0_35px_30px_-15px_rgba(0,0,0,0.1)] w-full bg-white flex top-0 z-50 justify-evenly duration-300 items-center fixed' : 'h-[15vh] shadow-[0_35px_30px_-15px_rgba(0,0,0,0.1)] duration-300 w-full bg-white flex top-0 z-50 justify-evenly items-center relative'}>
            <div ref={login} className={fixed ? 'absolute fixed w-[100vw] h-[110vh] top-0 left-0' : 'absolute fixed w-[100vw] h-[110vh] top-[-10vh] left-0'} style={module ? { opacity: '1', visibility: 'visible' } : { opacity: '0', visibility: 'hidden' }}>
                <span ref={bgBack} className='absolute w-full h-full top-0 left-0 backdrop-blur-sm z-10'></span>
                <div className='absolute w-[30vw] h-[30vw] min-w-[300px] min-h-[300px] rounded-2xl top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white flex flex-wrap content-center justify-center z-50'>
                    <span ref={closeButton} className='w-[50px] absolute top-[5%] left-[5%] h-[50px] rounded-full bg-[#f2f5f8] text-[#6e798d] text-[3vw] sm:text-[1.5vw] font-bold'><i className="w-full h-full flex justify-center items-center bi bi-x-lg cursor-pointer"></i></span>
                    <figure className='w-[20%] h-[20%] flex absolute top-[10%] left-1/2 translate-x-[-50%]'>
                        <img className='w-full h-full object-contain' src={loginPic} alt="loginPic" />
                    </figure>
                    <div className='w-full h-[65%] absolute left-1/2 translate-x-[-50%] top-[30%] flex flex-wrap content-evenly justify-center'>
                        <h4 id='sliderH5' className='w-full text-[5vw] sm:text-[3vw] text-black font-extrathin text-center'>ورود و ثبت نام</h4>
                        <span className='w-full text-[3vw] sm:text-[1vw] text-black font-bold text-center'>لطفا شماره موبایل خود را وارد کنید</span>
                        <input type="text" name="number" id="num" ref={inputNumber} className='flex w-[70%] rounded-md h-[25%] p-3 text-[3vw] md:text-[1vw] font-thin text-[#b0b8c3] border-[1px] duration-300 focus:placeholder-[#0040ff] focus:bg-[#f0f5ff]' placeholder='شماره موبایل' />
                        <a ref={send} className='cursor-pointer w-[70%] flex justify-center items-center h-[25%] text-[#b2b2b2] font-bold rounded-lg bg-[#e6e6e6] '>ارسال کد یکبار مصرف</a>
                        <span className='w-full text-[2vw] sm:text-[.8vw] text-[#5f6775] font-bold text-center'>ورود شما به معنای پذیرش شرایط و قوانین  <strong className='cursor-pointer text-[#0040ff]'>دیجی پی </strong> است</span>
                    </div>
                </div>
            </div>
            <div id='toggleMenu' className='w-[10%] flex xl:hidden h-full'>
                <span className='w-full h-full flex cursor-pointer' >
                    <i onClick={toggle} className="duration-300 bi bi-list w-full h-full flex justify-center items-center text-[5vw] sm:text-[3vw]"></i>
                </span>
                <div ref={toggleSub} className=' absolute top-[15vh] left-[0] w-[100vw] opacity-0  h-auto bg-white z-50 invisible duration-300'>
                    <ul className='w-[100vw] h-auto flex flex-wrap justify-center content-start'>
                        <li className='w-[100vw] relative left-0 border-b-[1px] justify-evenly flex items-center h-[10vh]'>
                            <a className='font-bold font-[20px] w-[70%] cursor-pointer h-full flex text-[#061962] duration-100 items-center hover:text-[#0040ff] hover:font-bold'>خدمات</a>
                            <span className='w-auto duration-100 h-full text-[5vw] sm:text-[3vw] font-bold cursor-pointer text-[#0040ff] flex items-center' onClick={categoryToggle}>+</span>
                            <ul id='catMenu' className='border-t-[1px] absolute top-[10vh] left-0 w-[100vw] flex flex-wrap content-start h-0 opacity-0 duration-300'>
                                <li className='w-full h-[10vh] border-b-[1px] px-[5%] py-[5px] cursor-pointer rounded-md duration-300 hover:bg-[#e7ecfd] flex flex-wrap content-center group/li'>
                                    <div className='flex flex-wrap justify-center content-center w-[80%] h-full'>
                                        <h4 className='font-bold w-full text-[3vw] sm:text-[1.2vw] text-[#0b1e65]'>خدمات مالی و پرداختی</h4>
                                        <span className='font-thin w-full text-[2.5vw] sm:text-[1vw] text-[#768194]'>انجام تراکنش های روزمره</span>
                                    </div>
                                    <span className='h-full w-[20%] flex duration-100 opacity-0 group-hover/li:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#0b1e65] justify-center items-center flex'></i></span>
                                </li>
                                <li className='w-full h-[10vh] border-b-[1px] px-[5%] py-[5px] cursor-pointer rounded-md duration-300 hover:bg-[#e7ecfd] flex flex-wrap content-center group/li'>
                                    <div className='flex flex-wrap justify-center content-center w-[80%] h-full'>
                                        <h4 className='font-bold w-full text-[3vw] sm:text-[1.2vw] text-[#0b1e65]'>خدمات سازمانی</h4>
                                        <span className='font-thin w-full text-[2.5vw] sm:text-[1vw] text-[#768194]'>برای کارمندان سازمان شما</span>
                                    </div>
                                    <span className='h-full w-[20%] flex duration-100 opacity-0 group-hover/li:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#0b1e65] justify-center items-center flex'></i></span>
                                </li>
                                <li className='w-full h-[10vh] border-b-[1px] px-[5%] py-[5px] cursor-pointer rounded-md duration-300 hover:bg-[#e7ecfd] flex flex-wrap content-center group/li'>
                                    <div className='flex flex-wrap justify-center content-center w-[80%] h-full'>
                                        <h4 className='font-bold w-full text-[3vw] sm:text-[1.2vw] text-[#0b1e65]'>خدمات کسب و کار های آنلاین</h4>
                                        <span className='font-thin w-full text-[2.5vw] sm:text-[1vw] text-[#768194]'>برای صاحبان سایت های فروشگاهی </span>
                                    </div>
                                    <span className='h-full w-[20%] flex duration-100 opacity-0 group-hover/li:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#0b1e65] justify-center items-center flex'></i></span>
                                </li>
                                <li className='w-full h-[10vh] border-b-[1px] px-[5%] py-[5px] cursor-pointer rounded-md duration-300 hover:bg-[#e7ecfd] flex flex-wrap content-center group/li'>
                                    <div className='flex flex-wrap justify-center content-center w-[80%] h-full'>
                                        <h4 className='font-bold w-full text-[3vw] sm:text-[1.2vw] text-[#0b1e65]'>دریافت وام خرید کالا</h4>
                                    </div>
                                    <span className='h-full w-[20%] flex duration-100 opacity-0 group-hover/li:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#0b1e65] justify-center items-center flex'></i></span>
                                </li>
                            </ul>
                        </li>

                        <li className='w-full relative h-[10vh] border-b-[1px] justify-evenly flex items-center'>
                            <a className='font-bold font-[20px] w-[80%] cursor-pointer flex text-[#061962] justify-start duration-100'>دریافت وام</a>
                        </li>

                        <li className='w-[100vw] relative left-0 border-b-[1px] justify-evenly flex items-center h-[10vh]'>
                            <a className='font-bold font-[20px] w-[70%] cursor-pointer h-full flex text-[#061962] duration-100 items-center hover:text-[#0040ff] hover:font-bold'>گزارش سالانه</a>
                            <span className='w-auto duration-100 h-full text-[5vw] sm:text-[3vw] font-bold cursor-pointer text-[#0040ff] flex items-center' onClick={categoryToggle}>+</span>
                            <ul id='catMenu' className='border-t-[1px] absolute top-[10vh] left-0 w-[100vw] flex flex-wrap content-between h-0 opacity-0 duration-300'>
                                <li className='w-full h-[13vh] border-b-[1px] px-[5%] py-[5px] cursor-pointer rounded-md duration-300 hover:bg-[#e7ecfd] flex flex-wrap content-center group/li'>
                                    <div className='flex flex-wrap justify-center content-center w-[80%] h-full'>
                                        <h4 className='font-bold w-full text-[3vw] sm:text-[1.2vw] text-[#0b1e65]'>سال ۹۹</h4>
                                    </div>
                                    <span className='h-full w-[20%] flex duration-100 opacity-0 group-hover/li:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#0b1e65] justify-center items-center flex'></i></span>
                                </li>
                                <li className='w-full h-[13vh] border-b-[1px] px-[5%] py-[5px] cursor-pointer rounded-md duration-300 hover:bg-[#e7ecfd] flex flex-wrap content-center group/li'>
                                    <div className='flex flex-wrap justify-center content-center w-[80%] h-full'>
                                        <h4 className='font-bold w-full text-[3vw] sm:text-[1.2vw] text-[#0b1e65]'>سال ۱۴۰۰</h4>
                                    </div>
                                    <span className='h-full w-[20%] flex duration-100 opacity-0 group-hover/li:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#0b1e65] justify-center items-center flex'></i></span>
                                </li>
                                <li className='w-full h-[13vh] border-b-[1px] px-[5%] py-[5px] cursor-pointer rounded-md duration-300 hover:bg-[#e7ecfd] flex flex-wrap content-center group/li'>
                                    <div className='flex flex-wrap justify-center content-center w-[80%] h-full'>
                                        <h4 className='font-bold w-full text-[3vw] sm:text-[1.2vw] text-[#0b1e65]'>سال ۱۴۰۱</h4>
                                    </div>
                                    <span className='h-full w-[20%] flex duration-100 opacity-0 group-hover/li:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#0b1e65] justify-center items-center flex'></i></span>
                                </li>
                            </ul>
                        </li>

                        <li className='w-[100vw] relative left-0 border-b-[1px] justify-evenly flex items-center h-[10vh]'>
                            <a className='font-bold font-[20px] w-[70%] cursor-pointer h-full flex text-[#061962] duration-100 items-center hover:text-[#0040ff] hover:font-bold'>مجله اینترنتی دیجی پی</a>
                            <span className='w-auto duration-100 h-full text-[5vw] sm:text-[3vw] font-bold cursor-pointer text-[#0040ff] flex items-center' onClick={categoryToggle}>+</span>
                            <ul id='catMenu' className='border-t-[1px] absolute top-[10vh] left-0 w-[100vw] flex flex-wrap content-between h-0 opacity-0 duration-300'>
                                <li className='w-full h-[10vh] border-b-[1px] px-[5%] py-[5px] cursor-pointer rounded-md duration-300 hover:bg-[#e7ecfd] flex flex-wrap content-center group/li'>
                                    <div className='flex flex-wrap justify-center content-center w-[80%] h-full'>
                                        <h4 className='font-bold w-full text-[3vw] sm:text-[1.2vw] text-[#0b1e65]'>اخبار</h4>
                                    </div>
                                    <span className='h-full w-[20%] flex duration-100 opacity-0 group-hover/li:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#0b1e65] justify-center items-center flex'></i></span>
                                </li>
                                <li className='w-full h-[10vh] border-b-[1px] px-[5%] py-[5px] cursor-pointer rounded-md duration-300 hover:bg-[#e7ecfd] flex flex-wrap content-center group/li'>
                                    <div className='flex flex-wrap justify-center content-center w-[80%] h-full'>
                                        <h4 className='font-bold w-full text-[3vw] sm:text-[1.2vw] text-[#0b1e65]'>پی کست</h4>
                                    </div>
                                    <span className='h-full w-[20%] flex duration-100 opacity-0 group-hover/li:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#0b1e65] justify-center items-center flex'></i></span>
                                </li>
                                <li className='w-full h-[10vh] border-b-[1px] px-[5%] py-[5px] cursor-pointer rounded-md duration-300 hover:bg-[#e7ecfd] flex flex-wrap content-center group/li'>
                                    <div className='flex flex-wrap justify-center content-center w-[80%] h-full'>
                                        <h4 className='font-bold w-full text-[3vw] sm:text-[1.2vw] text-[#0b1e65]'>راهنمای خرید</h4>
                                    </div>
                                    <span className='h-full w-[20%] flex duration-100 opacity-0 group-hover/li:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#0b1e65] justify-center items-center flex'></i></span>
                                </li>
                                <li className='w-full h-[10vh] border-b-[1px] px-[5%] py-[5px] cursor-pointer rounded-md duration-300 hover:bg-[#e7ecfd] flex flex-wrap content-center group/li'>
                                    <div className='flex flex-wrap justify-center content-center w-[80%] h-full'>
                                        <h4 className='font-bold w-full text-[3vw] sm:text-[1.2vw] text-[#0b1e65]'>آکادمی</h4>
                                    </div>
                                    <span className='h-full w-[20%] flex duration-100 opacity-0 group-hover/li:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#0b1e65] justify-center items-center flex'></i></span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <figure className='w-[15%] sm:w-[10%] h-full flex justify-center items-center'>
                <img src={logo} alt="logoTop" className='w-full xl:w-1/2' />
            </figure>
            <nav className='w-[40%] hidden xl:flex h-full'>
                <ul className='w-full h-full flex justify-between items-center'>
                    <li className='w-[20%] h-full p-[10%] flex justify-center group items-center'>
                        <a className='font-thin text-[1vw] w-auto cursor-pointer flex text-[#0b1e65] duration-100 hover:text-[#0040ff] hover:font-bold'>خدمات</a>
                        <div id='subMenu' className='opacity-0 invisible group-hover:opacity-100 duration-500 group-hover:visible w-full absolute left-0 top-[15vh] bg-white h-[50vh] border-t-[1px] border-[#fab38f]'>
                            <div className='w-[20%] h-[80%] p-[20px] flex flex-wrap content-center justify-center'>
                                <div className='absolute w-[80vw] left-0 top-0 h-[80%] border-r-[1px]'>
                                    <ul className='w-full h-full flex flex-wrap justify-start content-start'>
                                        <li className='w-[22%] mx-[1%] h-[25%] flex justify-center items-center '>
                                            <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center'>
                                                <span className='h-full w-[15%] flex opacity-100'><i className='bi bi-credit-card-2-back w-full h-[60%] rounded-md my-auto text-[#69dcae] bg-[#eefff6] justify-center items-center flex'></i></span>
                                                <div className='flex flex-wrap peer px-[5%] justify-center content-center w-[70%] h-full'>
                                                    <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>کارت به کارت</h4>
                                                    <span className='font-thin w-full text-[.7vw] text-[#768194]'>پشتیبانی از بانک های ایران</span>
                                                </div>
                                                <span className='h-full w-[10%] flex duration-100 opacity-0 peer-hover:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#69dcae] justify-center items-center flex'></i></span>
                                            </div>
                                        </li>
                                        <li className='w-[22%] mx-[1%] h-[25%] flex justify-center items-center '>
                                            <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center'>
                                                <span className='h-full w-[15%] flex opacity-100'><i className='bi bi-wifi w-full h-[60%] rounded-md my-auto text-[#fba965] bg-[#fbf3f1] justify-center items-center flex'></i></span>
                                                <div className='flex peer flex-wrap px-[5%] justify-center content-center w-[70%] h-full'>
                                                    <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>خرید بسته اینترنت</h4>
                                                    <span className='font-thin w-full text-[.7vw] text-[#768194]'>ایرانسل همراه اول و رایتل</span>
                                                </div>
                                                <span className='h-full w-[10%] flex duration-100 opacity-0 peer-hover:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#fba965] justify-center items-center flex'></i></span>
                                            </div>
                                        </li>
                                        <li className='w-[22%] mx-[1%] h-[25%] flex justify-center items-center '>
                                            <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center '>
                                                <span className='h-full w-[15%] flex opacity-100'><i className='bi bi-car-front-fill w-full h-[60%] rounded-md my-auto text-[#7598ff] bg-[#f6f8ff] justify-center items-center flex'></i></span>
                                                <div className='flex flex-wrap peer px-[5%] justify-center content-center w-[70%] h-full'>
                                                    <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>پرداخت عوارض جاده ای</h4>
                                                    <span className='font-thin w-full text-[.7vw] text-[#768194]'>استعلام و پرداخت عوارض</span>
                                                </div>
                                                <span className='h-full w-[10%] flex duration-100 opacity-0 peer-hover:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#7598ff] justify-center items-center flex'></i></span>
                                            </div>
                                        </li>
                                        <li className='w-[22%] mx-[1%] h-[25%] flex justify-center items-center '>
                                            <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center '>
                                                <span className='h-full w-[15%] flex opacity-100'><i className='bi bi-credit-card-2-front-fill w-full h-[60%] rounded-md my-auto text-[#fba965] bg-[#fbf3f1] justify-center items-center flex'></i></span>
                                                <div className='flex peer flex-wrap px-[5%] justify-center content-center w-[70%] h-full'>
                                                    <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>پرداخت قبوض خدماتی</h4>
                                                    <span className='font-thin w-full text-[.7vw] text-[#768194]'>پرداخت اینترنتی قبوض (آب برق گاز)</span>
                                                </div>
                                                <span className='h-full w-[10%] flex duration-100 opacity-0 peer-hover:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#fba965] justify-center items-center flex'></i></span>
                                            </div>
                                        </li>
                                        <li className='w-[22%] mx-[1%] h-[25%] flex justify-center items-center '>
                                            <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center '>
                                                <span className='h-full w-[15%] flex opacity-100'><i className='bi bi-sim-fill w-full h-[60%] rounded-md my-auto text-[#fba965] bg-[#fbf3f1] justify-center items-center flex'></i></span>
                                                <div className='flex peer flex-wrap px-[5%] justify-center content-center w-[70%] h-full'>
                                                    <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>خرید شارژ</h4>
                                                    <span className='font-thin w-full text-[.7vw] text-[#768194]'>ایرانسل همراه اول و رایتل</span>
                                                </div>
                                                <span className='h-full w-[10%] flex duration-100 opacity-0 peer-hover:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#fba965] justify-center items-center flex'></i></span>
                                            </div>
                                        </li>
                                        <li className='w-[22%] mx-[1%] h-[25%] flex justify-center items-center '>
                                            <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center '>
                                                <span className='h-full w-[15%] flex opacity-100'><i className='bi bi-wallet w-full h-[60%] rounded-md my-auto text-[#69dcae] bg-[#eefff6] justify-center items-center flex'></i></span>
                                                <div className='flex peer flex-wrap px-[5%] justify-center content-center w-[70%] h-full'>
                                                    <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>کیف پول</h4>
                                                    <span className='font-thin w-full text-[.7vw] text-[#768194]'>انتقال خرید با یک کلیک</span>
                                                </div>
                                                <span className='h-full w-[10%] flex duration-100 opacity-0 peer-hover:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#69dcae] justify-center items-center flex'></i></span>
                                            </div>
                                        </li>
                                        <li className='w-[22%] mx-[1%] h-[25%] flex justify-center items-center '>
                                            <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center '>
                                                <span className='h-full w-[15%] flex opacity-100'><i className='bi bi-calendar2-week w-full h-[60%] rounded-md my-auto text-[#caa3fa] bg-[#f9f6fe] justify-center items-center flex'></i></span>
                                                <div className='flex peer flex-wrap px-[5%] justify-center content-center w-[70%] h-full'>
                                                    <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>خرید اقساطی از دیجی کالا</h4>
                                                    <span className='font-thin w-full text-[.7vw] text-[#768194]'>پرداخت اعتباری</span>
                                                </div>
                                                <span className='h-full w-[10%] flex duration-100 opacity-0 peer-hover:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#caa3fa] justify-center items-center flex'></i></span>
                                            </div>
                                        </li>
                                        <li className='w-[22%] mx-[1%] h-[25%] flex justify-center items-center '>
                                            <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center '>
                                                <span className='h-full w-[15%] flex opacity-100'><i className='bi bi-umbrella-fill w-full h-[60%] rounded-md my-auto text-[#7598ff] bg-[#f6f8ff] justify-center items-center flex'></i></span>
                                                <div className='flex peer flex-wrap px-[5%] justify-center content-center w-[70%] h-full'>
                                                    <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>بیمه تجهیزات الکترونیک</h4>
                                                    <span className='font-thin w-full text-[.7vw] text-[#768194]'>محصولات دیجیتالی دیجی کالا</span>
                                                </div>
                                                <span className='h-full w-[10%] flex duration-100 opacity-0 peer-hover:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#7598ff] justify-center items-center flex'></i></span>
                                            </div>
                                        </li>
                                        <li className='w-[22%] mx-[1%] h-[25%] flex justify-center items-center '>
                                            <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center '>
                                                <span className='h-full w-[15%] flex opacity-100'><i className='bi bi-phone w-full h-[60%] rounded-md my-auto text-[#fba965] bg-[#fbf3f1] justify-center items-center flex'></i></span>
                                                <div className='flex peer flex-wrap px-[5%] justify-center content-center w-[70%] h-full'>
                                                    <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>پرداخت قبض موبایل</h4>
                                                    <span className='font-thin w-full text-[.7vw] text-[#768194]'>ایرانسل همراه اول و رایتل</span>
                                                </div>
                                                <span className='h-full w-[10%] flex duration-100 opacity-0 peer-hover:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#fba965] justify-center items-center flex'></i></span>
                                            </div>
                                        </li>
                                        <li className='w-[22%] mx-[1%] h-[25%] flex justify-center items-center '>
                                            <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center '>
                                                <span className='h-full w-[15%] flex opacity-100'><i className='bi bi-stopwatch-fill w-full h-[60%] rounded-md my-auto text-[#7598ff] bg-[#f6f8ff] justify-center items-center flex'></i></span>
                                                <div className='flex peer flex-wrap px-[5%] justify-center content-center w-[70%] h-full'>
                                                    <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>الان بخر بعدا پرداخت کن</h4>
                                                    <span className='font-thin w-full text-[.7vw] text-[#768194]'>بازپرداخت یکم تا پنجم ماه بعد</span>
                                                </div>
                                                <span className='h-full w-[10%] flex duration-100 opacity-0 peer-hover:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#7598ff] justify-center items-center flex'></i></span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <li className='w-full h-[25%] flex justify-center items-center group/li bg-white'>
                                    <div className='w-full h-full px-[5%] py-[5px] cursor-pointer rounded-md duration-300 hover:bg-[#e7ecfd] flex flex-wrap content-center'>
                                        <div className='flex flex-wrap justify-center content-center w-[80%] h-full'>
                                            <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>خدمات مالی و پرداختی</h4>
                                            <span className='font-thin w-full text-[.7vw] text-[#768194]'>انجام تراکنش های روزمره</span>
                                        </div>
                                        <span className='h-full w-[10%] flex duration-100 opacity-0 group-hover/li:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#0b1e65] justify-center items-center flex'></i></span>
                                    </div>
                                    <div className='absolute w-[80vw] left-0 top-0 h-[80%] duration-300 border-r-[1px] bg-white invisible opacity-0 group-hover/li:opacity-100 group-hover/li:visible'>
                                        <ul className='w-full h-full flex flex-wrap justify-start content-start'>
                                            <li className='w-[22%] mx-[1%] h-[25%] flex justify-center items-center '>
                                                <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center'>
                                                    <span className='h-full w-[15%] flex opacity-100'><i className='bi bi-credit-card-2-back w-full h-[60%] rounded-md my-auto text-[#69dcae] bg-[#eefff6] justify-center items-center flex'></i></span>
                                                    <div className='flex flex-wrap peer px-[5%] justify-center content-center w-[70%] h-full'>
                                                        <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>کارت به کارت</h4>
                                                        <span className='font-thin w-full text-[.7vw] text-[#768194]'>پشتیبانی از بانک های ایران</span>
                                                    </div>
                                                    <span className='h-full w-[10%] flex duration-100 opacity-0 peer-hover:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#69dcae] justify-center items-center flex'></i></span>
                                                </div>
                                            </li>
                                            <li className='w-[22%] mx-[1%] h-[25%] flex justify-center items-center '>
                                                <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center'>
                                                    <span className='h-full w-[15%] flex opacity-100'><i className='bi bi-wifi w-full h-[60%] rounded-md my-auto text-[#fba965] bg-[#fbf3f1] justify-center items-center flex'></i></span>
                                                    <div className='flex peer flex-wrap px-[5%] justify-center content-center w-[70%] h-full'>
                                                        <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>خرید بسته اینترنت</h4>
                                                        <span className='font-thin w-full text-[.7vw] text-[#768194]'>ایرانسل همراه اول و رایتل</span>
                                                    </div>
                                                    <span className='h-full w-[10%] flex duration-100 opacity-0 peer-hover:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#fba965] justify-center items-center flex'></i></span>
                                                </div>
                                            </li>
                                            <li className='w-[22%] mx-[1%] h-[25%] flex justify-center items-center '>
                                                <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center '>
                                                    <span className='h-full w-[15%] flex opacity-100'><i className='bi bi-car-front-fill w-full h-[60%] rounded-md my-auto text-[#7598ff] bg-[#f6f8ff] justify-center items-center flex'></i></span>
                                                    <div className='flex flex-wrap peer px-[5%] justify-center content-center w-[70%] h-full'>
                                                        <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>پرداخت عوارض جاده ای</h4>
                                                        <span className='font-thin w-full text-[.7vw] text-[#768194]'>استعلام و پرداخت عوارض</span>
                                                    </div>
                                                    <span className='h-full w-[10%] flex duration-100 opacity-0 peer-hover:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#7598ff] justify-center items-center flex'></i></span>
                                                </div>
                                            </li>
                                            <li className='w-[22%] mx-[1%] h-[25%] flex justify-center items-center '>
                                                <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center '>
                                                    <span className='h-full w-[15%] flex opacity-100'><i className='bi bi-credit-card-2-front-fill w-full h-[60%] rounded-md my-auto text-[#fba965] bg-[#fbf3f1] justify-center items-center flex'></i></span>
                                                    <div className='flex peer flex-wrap px-[5%] justify-center content-center w-[70%] h-full'>
                                                        <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>پرداخت قبوض خدماتی</h4>
                                                        <span className='font-thin w-full text-[.7vw] text-[#768194]'>پرداخت اینترنتی قبوض (آب برق گاز)</span>
                                                    </div>
                                                    <span className='h-full w-[10%] flex duration-100 opacity-0 peer-hover:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#fba965] justify-center items-center flex'></i></span>
                                                </div>
                                            </li>
                                            <li className='w-[22%] mx-[1%] h-[25%] flex justify-center items-center '>
                                                <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center '>
                                                    <span className='h-full w-[15%] flex opacity-100'><i className='bi bi-sim-fill w-full h-[60%] rounded-md my-auto text-[#fba965] bg-[#fbf3f1] justify-center items-center flex'></i></span>
                                                    <div className='flex peer flex-wrap px-[5%] justify-center content-center w-[70%] h-full'>
                                                        <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>خرید شارژ</h4>
                                                        <span className='font-thin w-full text-[.7vw] text-[#768194]'>ایرانسل همراه اول و رایتل</span>
                                                    </div>
                                                    <span className='h-full w-[10%] flex duration-100 opacity-0 peer-hover:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#fba965] justify-center items-center flex'></i></span>
                                                </div>
                                            </li>
                                            <li className='w-[22%] mx-[1%] h-[25%] flex justify-center items-center '>
                                                <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center '>
                                                    <span className='h-full w-[15%] flex opacity-100'><i className='bi bi-wallet w-full h-[60%] rounded-md my-auto text-[#69dcae] bg-[#eefff6] justify-center items-center flex'></i></span>
                                                    <div className='flex peer flex-wrap px-[5%] justify-center content-center w-[70%] h-full'>
                                                        <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>کیف پول</h4>
                                                        <span className='font-thin w-full text-[.7vw] text-[#768194]'>انتقال خرید با یک کلیک</span>
                                                    </div>
                                                    <span className='h-full w-[10%] flex duration-100 opacity-0 peer-hover:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#69dcae] justify-center items-center flex'></i></span>
                                                </div>
                                            </li>
                                            <li className='w-[22%] mx-[1%] h-[25%] flex justify-center items-center '>
                                                <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center '>
                                                    <span className='h-full w-[15%] flex opacity-100'><i className='bi bi-calendar2-week w-full h-[60%] rounded-md my-auto text-[#caa3fa] bg-[#f9f6fe] justify-center items-center flex'></i></span>
                                                    <div className='flex peer flex-wrap px-[5%] justify-center content-center w-[70%] h-full'>
                                                        <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>خرید اقساطی از دیجی کالا</h4>
                                                        <span className='font-thin w-full text-[.7vw] text-[#768194]'>پرداخت اعتباری</span>
                                                    </div>
                                                    <span className='h-full w-[10%] flex duration-100 opacity-0 peer-hover:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#caa3fa] justify-center items-center flex'></i></span>
                                                </div>
                                            </li>
                                            <li className='w-[22%] mx-[1%] h-[25%] flex justify-center items-center '>
                                                <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center '>
                                                    <span className='h-full w-[15%] flex opacity-100'><i className='bi bi-umbrella-fill w-full h-[60%] rounded-md my-auto text-[#7598ff] bg-[#f6f8ff] justify-center items-center flex'></i></span>
                                                    <div className='flex peer flex-wrap px-[5%] justify-center content-center w-[70%] h-full'>
                                                        <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>بیمه تجهیزات الکترونیک</h4>
                                                        <span className='font-thin w-full text-[.7vw] text-[#768194]'>محصولات دیجیتالی دیجی کالا</span>
                                                    </div>
                                                    <span className='h-full w-[10%] flex duration-100 opacity-0 peer-hover:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#7598ff] justify-center items-center flex'></i></span>
                                                </div>
                                            </li>
                                            <li className='w-[22%] mx-[1%] h-[25%] flex justify-center items-center '>
                                                <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center '>
                                                    <span className='h-full w-[15%] flex opacity-100'><i className='bi bi-phone w-full h-[60%] rounded-md my-auto text-[#fba965] bg-[#fbf3f1] justify-center items-center flex'></i></span>
                                                    <div className='flex peer flex-wrap px-[5%] justify-center content-center w-[70%] h-full'>
                                                        <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>پرداخت قبض موبایل</h4>
                                                        <span className='font-thin w-full text-[.7vw] text-[#768194]'>ایرانسل همراه اول و رایتل</span>
                                                    </div>
                                                    <span className='h-full w-[10%] flex duration-100 opacity-0 peer-hover:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#fba965] justify-center items-center flex'></i></span>
                                                </div>
                                            </li>
                                            <li className='w-[22%] mx-[1%] h-[25%] flex justify-center items-center '>
                                                <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center '>
                                                    <span className='h-full w-[15%] flex opacity-100'><i className='bi bi-stopwatch-fill w-full h-[60%] rounded-md my-auto text-[#7598ff] bg-[#f6f8ff] justify-center items-center flex'></i></span>
                                                    <div className='flex peer flex-wrap px-[5%] justify-center content-center w-[70%] h-full'>
                                                        <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>الان بخر بعدا پرداخت کن</h4>
                                                        <span className='font-thin w-full text-[.7vw] text-[#768194]'>بازپرداخت یکم تا پنجم ماه بعد</span>
                                                    </div>
                                                    <span className='h-full w-[10%] flex duration-100 opacity-0 peer-hover:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#7598ff] justify-center items-center flex'></i></span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='w-full h-[25%] flex justify-center items-center group/li'>
                                    <div className='w-full h-full px-[5%] py-[5px] cursor-pointer rounded-md duration-300 hover:bg-[#e7ecfd] flex flex-wrap content-center'>
                                        <div className='flex flex-wrap justify-center content-center w-[80%] h-full'>
                                            <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>خدمات سازمانی</h4>
                                            <span className='font-thin w-full text-[.7vw] text-[#768194]'>برای کارمندان سازمان شما</span>
                                        </div>
                                        <span className='h-full w-[10%] flex duration-100 opacity-0 group-hover/li:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#0b1e65] justify-center items-center flex'></i></span>
                                    </div>
                                    <div className='absolute w-[80vw] left-0 top-0 h-[80%] duration-300 border-r-[1px] bg-white invisible opacity-0 group-hover/li:opacity-100 group-hover/li:visible'>
                                        <ul className='w-full h-full flex flex-wrap justify-start content-start'>
                                            <li className='w-[22%] mx-[1%] h-[25%] flex justify-center items-center '>
                                                <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center '>
                                                    <span className='h-full w-[15%] flex opacity-100'><i className='bi bi-stopwatch-fill w-full h-[60%] rounded-md my-auto text-[#7598ff] bg-[#f6f8ff] justify-center items-center flex'></i></span>
                                                    <div className='flex peer flex-wrap px-[5%] justify-center content-center w-[70%] h-full'>
                                                        <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>الان بخر بعدا پرداخت کن</h4>
                                                        <span className='font-thin w-full text-[.7vw] text-[#768194]'>پرداخت ماه بعد توسط کارمندان</span>
                                                    </div>
                                                    <span className='h-full w-[10%] flex duration-100 opacity-0 peer-hover:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#7598ff] justify-center items-center flex'></i></span>
                                                </div>
                                            </li>
                                            <li className='w-[22%] mx-[1%] h-[25%] flex justify-center items-center '>
                                                <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center '>
                                                    <span className='h-full w-[15%] flex opacity-100'><i className='bi bi-wallet w-full h-[60%] rounded-md my-auto text-[#69dcae] bg-[#eefff6] justify-center items-center flex'></i></span>
                                                    <div className='flex peer flex-wrap px-[5%] justify-center content-center w-[70%] h-full'>
                                                        <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>کیف پول</h4>
                                                        <span className='font-thin w-full text-[.7vw] text-[#768194]'>کیف پول برای کارمندان</span>
                                                    </div>
                                                    <span className='h-full w-[10%] flex duration-100 opacity-0 peer-hover:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#69dcae] justify-center items-center flex'></i></span>
                                                </div>
                                            </li>
                                            <li className='w-[22%] mx-[1%] h-[25%] flex justify-center items-center '>
                                                <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center '>
                                                    <span className='h-full w-[15%] flex opacity-100'><i className='bi bi-calendar2-week w-full h-[60%] rounded-md my-auto text-[#caa3fa] bg-[#f9f6fe] justify-center items-center flex'></i></span>
                                                    <div className='flex peer flex-wrap px-[5%] justify-center content-center w-[70%] h-full'>
                                                        <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>خرید اقساطی از دیجی کالا</h4>
                                                        <span className='font-thin w-full text-[.7vw] text-[#768194]'>دریافت اعتبار برای کارکنان سازمان ها</span>
                                                    </div>
                                                    <span className='h-full w-[10%] flex duration-100 opacity-0 peer-hover:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#caa3fa] justify-center items-center flex'></i></span>
                                                </div>
                                            </li>
                                            <li className='w-[22%] mx-[1%] h-[25%] flex justify-center items-center '>
                                                <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center '>
                                                    <span className='h-full w-[15%] flex opacity-100'><i className='bi bi-life-preserver w-full h-[60%] rounded-md my-auto text-[#fba965] bg-[#fbf3f1] justify-center items-center flex'></i></span>
                                                    <div className='flex peer flex-wrap px-[5%] justify-center content-center w-[70%] h-full'>
                                                        <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>کارت زندگی</h4>
                                                        <span className='font-thin w-full text-[.7vw] text-[#768194]'>کارت اعتباری فیزیکی ایران خودرو</span>
                                                    </div>
                                                    <span className='h-full w-[10%] flex duration-100 opacity-0 peer-hover:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#fba965] justify-center items-center flex'></i></span>
                                                </div>
                                            </li>
                                            <li className='w-[22%] mx-[1%] h-[25%] flex justify-center items-center '>
                                                <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center '>
                                                    <span className='h-full w-[15%] flex opacity-100'><i className='bi bi-emoji-smile-fill w-full h-[60%] rounded-md my-auto text-[#7598ff] bg-[#f6f8ff] justify-center items-center flex'></i></span>
                                                    <div className='flex peer flex-wrap px-[5%] justify-center content-center w-[70%] h-full'>
                                                        <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>آسان خرید</h4>
                                                        <span className='font-thin w-full text-[.7vw] text-[#768194]'>پرداخت اعتباری کارمندان تجارت</span>
                                                    </div>
                                                    <span className='h-full w-[10%] flex duration-100 opacity-0 peer-hover:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#7598ff] justify-center items-center flex'></i></span>
                                                </div>
                                            </li>
                                            <li className='w-[22%] mx-[1%] h-[25%] flex justify-center items-center '>
                                                <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center '>
                                                    <span className='h-full w-[15%] flex opacity-100'><i className='bi bi-emoji-smile-fill w-full h-[60%] rounded-md my-auto text-[#f9697e] bg-[#ffeef3] justify-center items-center flex'></i></span>
                                                    <div className='flex peer flex-wrap px-[5%] justify-center content-center w-[70%] h-full'>
                                                        <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>کارت خرید ملت</h4>
                                                        <span className='font-thin w-full text-[.7vw] text-[#768194]'>کارت اعتباری ملت</span>
                                                    </div>
                                                    <span className='h-full w-[10%] flex duration-100 opacity-0 peer-hover:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#f9697e] justify-center items-center flex'></i></span>
                                                </div>
                                            </li>
                                            <li className='w-[22%] mx-[1%] h-[25%] flex justify-center items-center '>
                                                <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center '>
                                                    <span className='h-full w-[15%] flex opacity-100'><i className='bi bi-credit-card-2-front-fill w-full h-[60%] rounded-md my-auto text-[#caa3fa] bg-[#f9f6fe] justify-center items-center flex'></i></span>
                                                    <div className='flex peer flex-wrap px-[5%] justify-center content-center w-[70%] h-full'>
                                                        <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>کارت خرید ملی</h4>
                                                        <span className='font-thin w-full text-[.7vw] text-[#768194]'>کارت اعتباری بانک ملی</span>
                                                    </div>
                                                    <span className='h-full w-[10%] flex duration-100 opacity-0 peer-hover:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#caa3fa] justify-center items-center flex'></i></span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='w-full h-[25%] flex justify-center items-center group/li'>
                                    <div className='w-full h-full px-[5%] py-[5px] cursor-pointer rounded-md duration-300 hover:bg-[#e7ecfd] flex flex-wrap content-center'>
                                        <div className='flex flex-wrap justify-center content-center w-[80%] h-full'>
                                            <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>خدمات کسب و کار های آنلاین</h4>
                                            <span className='font-thin w-full text-[.7vw] text-[#768194]'>برای صاحبان سایت های فروشگاهی</span>
                                        </div>
                                        <span className='h-full w-[10%] flex duration-100 opacity-0 group-hover/li:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#0b1e65] justify-center items-center flex'></i></span>
                                    </div>
                                    <div className='absolute w-[80vw] left-0 top-0 h-[80%] duration-300 border-r-[1px] bg-white invisible opacity-0 group-hover/li:opacity-100 group-hover/li:visible'>
                                        <ul className='w-full h-full flex flex-wrap justify-start content-start'>
                                            <li className='w-[22%] mx-[1%] h-[25%] flex justify-center items-center '>
                                                <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center '>
                                                    <span className='h-full w-[15%] flex opacity-100'><i className='bi bi-wallet-fill w-full h-[60%] rounded-md my-auto text-[#7598ff] bg-[#f6f8ff] justify-center items-center flex'></i></span>
                                                    <div className='flex peer flex-wrap px-[5%] justify-center content-center w-[70%] h-full'>
                                                        <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>درگاه پرداخت هوشمند</h4>
                                                        <span className='font-thin w-full text-[.7vw] text-[#768194]'>افزایش شانس پرداخت موفق</span>
                                                    </div>
                                                    <span className='h-full w-[10%] flex duration-100 opacity-0 peer-hover:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#7598ff] justify-center items-center flex'></i></span>
                                                </div>
                                            </li>
                                            <li className='w-[22%] mx-[1%] h-[25%] flex justify-center items-center '>
                                                <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center '>
                                                    <span className='h-full w-[15%] flex opacity-100'><i className='bi bi-cash w-full h-[60%] rounded-md my-auto text-[#69dcae] bg-[#eefff6] justify-center items-center flex'></i></span>
                                                    <div className='flex peer flex-wrap px-[5%] justify-center content-center w-[70%] h-full'>
                                                        <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>پرداخت یار</h4>
                                                        <span className='font-thin w-full text-[.7vw] text-[#768194]'>بدون نیاز به مجوز</span>
                                                    </div>
                                                    <span className='h-full w-[10%] flex duration-100 opacity-0 peer-hover:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#69dcae] justify-center items-center flex'></i></span>
                                                </div>
                                            </li>
                                            <li className='w-[22%] mx-[1%] h-[25%] flex justify-center items-center '>
                                                <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center '>
                                                    <span className='h-full w-[15%] flex opacity-100'><i className='bi bi-tablet-fill w-full h-[60%] rounded-md my-auto text-[#caa3fa] bg-[#f9f6fe] justify-center items-center flex'></i></span>
                                                    <div className='flex peer flex-wrap px-[5%] justify-center content-center w-[70%] h-full'>
                                                        <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>درگاه پرداخت اشتراک</h4>
                                                        <span className='font-thin w-full text-[.7vw] text-[#768194]'>افزایش شانس پرداخت موفق</span>
                                                    </div>
                                                    <span className='h-full w-[10%] flex duration-100 opacity-0 peer-hover:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#caa3fa] justify-center items-center flex'></i></span>
                                                </div>
                                            </li>
                                            <li className='w-[22%] mx-[1%] h-[25%] flex justify-center items-center '>
                                                <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center '>
                                                    <span className='h-full w-[15%] flex opacity-100'><i className='bi bi-stopwatch-fill w-full h-[60%] rounded-md my-auto text-[#7598ff] bg-[#f6f8ff] justify-center items-center flex'></i></span>
                                                    <div className='flex peer flex-wrap px-[5%] justify-center content-center w-[70%] h-full'>
                                                        <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>درگاه پرداخت اعتباری</h4>
                                                        <span className='font-thin w-full text-[.7vw] text-[#768194]'>خرید اعتباری برای کسب و کارها</span>
                                                    </div>
                                                    <span className='h-full w-[10%] flex duration-100 opacity-0 peer-hover:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#7598ff] justify-center items-center flex'></i></span>
                                                </div>
                                            </li>
                                            <li className='w-[22%] mx-[1%] h-[25%] flex justify-center items-center '>
                                                <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center '>
                                                    <span className='h-full w-[15%] flex opacity-100'><i className='bi bi-calendar-event-fill w-full h-[60%] rounded-md my-auto text-[#fba965] bg-[#fbf3f1] justify-center items-center flex'></i></span>
                                                    <div className='flex peer flex-wrap px-[5%] justify-center content-center w-[70%] h-full'>
                                                        <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>تسویه زودهنگام</h4>
                                                        <span className='font-thin w-full text-[.7vw] text-[#768194]'>مخصوص فروشندگان دیجی کالا</span>
                                                    </div>
                                                    <span className='h-full w-[10%] flex duration-100 opacity-0 peer-hover:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#fba965] justify-center items-center flex'></i></span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                <li className='w-full h-[25%] flex justify-center items-center group/li'>
                                    <div className='w-full h-full px-[5%] py-[5px] cursor-pointer rounded-md duration-300 hover:bg-[#e7ecfd] flex flex-wrap content-center'>
                                        <div className='flex flex-wrap justify-center content-center w-[80%] h-full'>
                                            <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>دریافت وام خرید کالا</h4>
                                        </div>
                                        <span className='h-full w-[10%] flex duration-100 opacity-0 group-hover/li:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#0b1e65] justify-center items-center flex'></i></span>
                                    </div>
                                    <div className='absolute w-[80vw] left-0 top-0 h-[80%] duration-300 bg-white border-r-[1px] invisible opacity-0 group-hover/li:opacity-100 group-hover/li:visible'>
                                        <ul className='w-full h-full flex flex-wrap justify-start content-start'>
                                            <li className='w-[22%] mx-[1%] h-[25%] flex justify-center items-center '>
                                                <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center '>
                                                    <span className='h-full w-[15%] flex opacity-100'><i className='bi bi-calendar-event-fill w-full h-[60%] rounded-md my-auto text-[#caa3fa] bg-[#f9f6fe] justify-center items-center flex'></i></span>
                                                    <div className='flex peer flex-wrap px-[5%] justify-center content-center w-[70%] h-full'>
                                                        <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>وام خرید کالا</h4>
                                                        <span className='font-thin w-full text-[.7vw] text-[#768194]'>خرید اعتباری</span>
                                                    </div>
                                                    <span className='h-full w-[10%] flex duration-100 opacity-0 peer-hover:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#caa3fa] justify-center items-center flex'></i></span>
                                                </div>
                                            </li>
                                            <li className='w-[22%] mx-[1%] h-[25%] flex justify-center items-center '>
                                                <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center '>
                                                    <span className='h-full w-[15%] flex opacity-100'><i className='bi bi-emoji-smile-fill w-full h-[60%] rounded-md my-auto text-[#f9697e] bg-[#ffeef3] justify-center items-center flex'></i></span>
                                                    <div className='flex peer flex-wrap px-[5%] justify-center content-center w-[70%] h-full'>
                                                        <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>وام دیجی کالا</h4>
                                                        <span className='font-thin w-full text-[.7vw] text-[#768194]'>دریافت وام خرید کالا از دیجی کالا</span>
                                                    </div>
                                                    <span className='h-full w-[10%] flex duration-100 opacity-0 peer-hover:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#f9697e] justify-center items-center flex'></i></span>
                                                </div>
                                            </li>
                                            <li className='w-[22%] mx-[1%] h-[25%] flex justify-center items-center '>
                                                <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center '>
                                                    <span className='h-full w-[15%] flex opacity-100'><i className='bi bi-calendar-event w-full h-[60%] rounded-md my-auto text-[#caa3fa] bg-[#f9f6fe] justify-center items-center flex'></i></span>
                                                    <div className='flex peer flex-wrap px-[5%] justify-center content-center w-[70%] h-full'>
                                                        <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>دریافت وام برای سازمان ها</h4>
                                                        <span className='font-thin w-full text-[.6vw] text-[#768194]'>دریافت وام خرید کالا برای کارمندان سازمان ها</span>
                                                    </div>
                                                    <span className='h-full w-[10%] flex duration-100 opacity-0 peer-hover:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#caa3fa] justify-center items-center flex'></i></span>
                                                </div>
                                            </li>
                                            <li className='w-[22%] mx-[1%] h-[25%] flex justify-center items-center '>
                                                <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center '>
                                                    <span className='h-full w-[15%] flex opacity-100'><i className='bi bi-bank w-full h-[60%] rounded-md my-auto text-[#69dcae] bg-[#eefff6] justify-center items-center flex'></i></span>
                                                    <div className='flex peer flex-wrap px-[5%] justify-center content-center w-[70%] h-full'>
                                                        <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>وام خرید کالا بانک تجارت</h4>
                                                        <span className='font-thin w-full text-[.7vw] text-[#768194]'>دریافت اعتبار خرید کالا بانک تجارت</span>
                                                    </div>
                                                    <span className='h-full w-[10%] flex duration-100 opacity-0 peer-hover:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#69dcae] justify-center items-center flex'></i></span>
                                                </div>
                                            </li>
                                            <li className='w-[22%] mx-[1%] h-[25%] flex justify-center items-center '>
                                                <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center '>
                                                    <span className='h-full w-[15%] flex opacity-100'><i className='bi bi-bank2 w-full h-[60%] rounded-md my-auto text-[#f9697e] bg-[#ffeef3] justify-center items-center flex'></i></span>
                                                    <div className='flex peer flex-wrap px-[5%] justify-center content-center w-[70%] h-full'>
                                                        <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>وام خرید کالا بانک ملت</h4>
                                                        <span className='font-thin w-full text-[.7vw] text-[#768194]'>دریافت اعتبار خرید کالا بانک ملت</span>
                                                    </div>
                                                    <span className='h-full w-[10%] flex duration-100 opacity-0 peer-hover:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#f9697e] justify-center items-center flex'></i></span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </div>
                            <div className='bg-[#f2f5f8] h-[20%] px-5 w-full flex flex-wrap content-center'>
                                <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>دریافت اعتبار پنجاه میلیونی</h4>
                                <span className='font-thin w-full text-[12px] text-[#768194]'>با دریافت اعتبار پنجاه میلیونی می توانید از دیجیکالا با بیش از ده میلیون تنوع محصولات خرید کنید</span>
                            </div>
                        </div>
                    </li>

                    <li className='w-[20%] h-full p-[10%] flex justify-center group items-center'>
                        <a className='font-thin text-[1vw] min-w-[150px] justify-center cursor-pointer flex text-[#0b1e65] duration-100 hover:text-[#0040ff] hover:font-bold'>دریافت وام</a>
                        <div id='subMenu' className='opacity-0 invisible group-hover:opacity-100 duration-500 group-hover:visible w-full absolute left-0 top-[15vh] bg-white h-[50vh] border-t-[1px] border-[#fab38f]'>
                            <div className='w-[20%] h-[80%] p-[20px] flex flex-wrap content-center justify-center'>
                                <div className='absolute w-[100vw] flex justify-center items-center left-0 top-0 h-[80%] border-r-[1px]'>
                                    <div className='w-[60%] h-[90%] flex flex-wrap content-evenly'>
                                        <h4 className='font-bold w-full text-[1vw] text-[#0b1e65]'>دریافت وام ۵۰ میلیون تومانی</h4>
                                        <span className='font-thin w-full text-[14px] text-[#768194]'>تا ۵۰ میلیون تومان اعتبار بعد از ثبت نام در دیجی پی برای خرید اقساطی کالا از بین ۱۰ میلیون کالا متنوع از برترین برند ها در بزرگترین فروشگاه اینترنتی دیجی کالا</span>
                                        <a className='w-full text-[14px] cursor-pointer font-bold text-[#0040ff] h-[10%]'>دریافت اعتبار</a>
                                    </div>
                                    <figure className='w-[35%] h-[90%] flex'>
                                        <img className='w-full h-full rounded-lg object-cover flex' src={vaamTop} alt="vaamTop" />
                                    </figure>
                                </div>
                            </div>
                            <div className='bg-[#f2f5f8] h-[20%] px-5 w-full flex flex-wrap content-center'>
                                <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>دریافت اعتبار پنجاه میلیونی</h4>
                                <span className='font-thin w-full text-[12px] text-[#768194]'>با دریافت اعتبار پنجاه میلیونی می توانید از دیجیکالا با بیش از ده میلیون تنوع محصولات خرید کنید</span>
                            </div>
                        </div>
                    </li>
                    <li className='w-[20%] h-full p-[10%] flex justify-center group items-center'>
                        <a className='font-thin text-[1vw] w-auto min-w-[150px] justify-center cursor-pointer flex text-[#0b1e65] duration-100 hover:text-[#0040ff] hover:font-bold'>گزارش سالانه</a>
                        <div id='subMenu' className='opacity-0 invisible group-hover:opacity-100 duration-500 group-hover:visible w-full absolute left-0 top-[15vh] bg-white h-[50vh] border-t-[1px] border-[#fab38f]'>
                            <div className='w-[20%] h-[80%] p-[20px] flex flex-wrap content-center justify-center'>
                                <div className='absolute w-[80vw] flex justify-center items-center left-0 top-0 h-[80%] border-r-[1px]'>
                                    <div className='w-[60%] h-[90%] flex flex-wrap content-evenly'>
                                        <h4 className='font-bold w-full text-[1vw] text-[#0b1e65]'>گزارش سالانه ۱۳۹۹ دیجی پی</h4>
                                        <span className='font-thin w-full text-[14px] text-[#768194]'>گزارش حاضر گزیده ای شفاف از عملکرد دیجی پی در سال ۱۳۹۹ است که با استناد به آمار ارایه شده از سوی واحد های کسب و کار، تجربه مشتریان، بازاریابی، پشتیبانی مشتریان، تکنولوژی و دیتا گردآوری شده است.</span>
                                        <a className='w-full text-[14px] cursor-pointer font-bold text-[#0040ff] h-[10%]'>مطالعه بیشتر</a>
                                    </div>
                                    <figure className='w-[35%] h-[90%] flex'>
                                        <img className='w-full h-full rounded-lg object-cover flex' src={digi99} alt="digi99" />
                                    </figure>
                                </div>
                                <li className='w-full h-[25%] flex justify-center items-center bg-white'>
                                    <div className='w-full h-full px-[5%] py-[5px] flex flex-wrap content-center'>
                                        <div className='flex flex-wrap justify-center content-center w-[80%] h-full'>
                                            <h4 className='font-bold w-full text-[1vw] cursor-default text-[#0b1e65]'>گزارش سالانه دیجی پی</h4>
                                        </div>
                                    </div>
                                </li>
                                <li className='w-full h-[25%] flex justify-center items-center group/li'>
                                    <div className='w-full h-full px-[5%] py-[5px] cursor-pointer rounded-md flex flex-wrap content-center'>
                                        <div className='flex flex-wrap justify-center content-center w-[80%] h-full'>
                                            <h4 className='font-thin w-full text-[1vw] text-[#0b1e65] duration-100 hover:text-[#0040ff] hover:font-bold'>سال ۹۹</h4>
                                        </div>
                                        <span className='h-full w-[20%] flex duration-100 opacity-0 group-hover/li:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#0b1e65] justify-center items-center flex'></i></span>
                                    </div>
                                    <div className='absolute w-[80vw] flex justify-center items-center left-0 top-0 h-[80%] duration-300 border-r-[1px] bg-white invisible opacity-0 group-hover/li:opacity-100 group-hover/li:visible'>
                                        <div className='w-[60%] h-[90%] flex flex-wrap content-evenly'>
                                            <h4 className='font-bold w-full text-[1vw] text-[#0b1e65]'>گزارش سالانه ۱۳۹۹ دیجی پی</h4>
                                            <span className='font-thin w-full text-[14px] text-[#768194]'>گزارش حاضر گزیده ای شفاف از عملکرد دیجی پی در سال ۱۳۹۹ است که با استناد به آمار ارایه شده از سوی واحد های کسب و کار، تجربه مشتریان، بازاریابی، پشتیبانی مشتریان، تکنولوژی و دیتا گردآوری شده است.</span>
                                            <a className='w-full text-[14px] cursor-pointer font-bold text-[#0040ff] h-[10%]'>مطالعه بیشتر</a>
                                        </div>
                                        <figure className='w-[35%] h-[90%] flex'>
                                            <img className='w-full h-full rounded-lg object-cover flex' src={digi99} alt="digi99" />
                                        </figure>
                                    </div>
                                </li>
                                <li className='w-full h-[25%] flex justify-center items-center group/li'>
                                    <div className='w-full h-full px-[5%] py-[5px] cursor-pointer rounded-md flex flex-wrap content-center'>
                                        <div className='flex flex-wrap justify-center content-center w-[80%] h-full'>
                                            <h4 className='font-thin w-full text-[1vw] text-[#0b1e65] duration-100 hover:text-[#0040ff] hover:font-bold'>سال ۱۴۰۰</h4>
                                        </div>
                                        <span className='h-full w-[20%] flex duration-100 opacity-0 group-hover/li:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#0b1e65] justify-center items-center flex'></i></span>
                                    </div>
                                    <div className='absolute w-[80vw] flex justify-center items-center left-0 top-0 h-[80%] duration-300 border-r-[1px] bg-white invisible opacity-0 group-hover/li:opacity-100 group-hover/li:visible'>
                                        <div className='w-[60%] h-[90%] flex flex-wrap content-evenly'>
                                            <h4 className='font-bold w-full text-[1vw] text-[#0b1e65]'>گزارش سالانه ۱۴۰۰ دیجی پی</h4>
                                            <span className='font-thin w-full text-[14px] text-[#768194]'>گزارش حاضر گزیده ای شفاف از عملکرد دیجی پی در سال ۱۴۰۰ است که با استناد به آمار ارایه شده از سوی واحد های کسب و کار، تجربه مشتریان، بازاریابی، پشتیبانی مشتریان، تکنولوژی و دیتا گردآوری شده است.</span>
                                            <a className='w-full text-[14px] cursor-pointer font-bold text-[#0040ff] h-[10%]'>مطالعه بیشتر</a>
                                        </div>
                                        <figure className='w-[35%] h-[90%] flex'>
                                            <img className='w-full h-full rounded-lg object-cover flex' src={digi400} alt="digi400" />
                                        </figure>
                                    </div>
                                </li>
                                <li className='w-full h-[25%] flex justify-center items-center group/li'>
                                    <div className='w-full h-full px-[5%] py-[5px] cursor-pointer rounded-md flex flex-wrap content-center'>
                                        <div className='flex flex-wrap justify-center content-center w-[80%] h-full'>
                                            <h4 className='font-thin w-full text-[1vw] text-[#0b1e65] duration-100 hover:text-[#0040ff] hover:font-bold'>سال ۱۴۰۱</h4>
                                        </div>
                                        <span className='h-full w-[20%] flex duration-100 opacity-0 group-hover/li:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#0b1e65] justify-center items-center flex'></i></span>
                                    </div>
                                    <div className='absolute w-[80vw] flex justify-center items-center left-0 top-0 h-[80%] duration-300 border-r-[1px] bg-white invisible opacity-0 group-hover/li:opacity-100 group-hover/li:visible'>
                                        <div className='w-[60%] h-[90%] flex flex-wrap content-evenly'>
                                            <h4 className='font-bold w-full text-[1vw] text-[#0b1e65]'>گزارش سالانه ۱۴۰۱ دیجی پی</h4>
                                            <span className='font-thin w-full text-[14px] text-[#768194]'>گزارش حاضر گزیده ای شفاف از عملکرد دیجی پی در سال ۱۴۰۱ است که با استناد به آمار ارایه شده از سوی واحد های کسب و کار، تجربه مشتریان، بازاریابی، پشتیبانی مشتریان، تکنولوژی و دیتا گردآوری شده است.</span>
                                            <a className='w-full text-[14px] cursor-pointer font-bold text-[#0040ff] h-[10%]'>مطالعه بیشتر</a>
                                        </div>
                                        <figure className='w-[35%] h-[90%] flex'>
                                            <img className='w-full h-full rounded-lg object-cover flex' src={digi401} alt="digi401" />
                                        </figure>
                                    </div>
                                </li>
                            </div>
                            <div className='bg-[#f2f5f8] h-[20%] px-5 w-full flex flex-wrap content-center'>
                                <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>دریافت اعتبار پنجاه میلیونی</h4>
                                <span className='font-thin w-full text-[12px] text-[#768194]'>با دریافت اعتبار پنجاه میلیونی می توانید از دیجیکالا با بیش از ده میلیون تنوع محصولات خرید کنید</span>
                            </div>
                        </div>
                    </li>
                    <li className='w-[20%] h-full p-[10%] flex justify-center group items-center'>
                        <a className='font-thin text-[1vw] w-auto min-w-[250px] justify-center cursor-pointer flex text-[#0b1e65] duration-100 hover:text-[#0040ff] hover:font-bold'>مجله اینترنتی دیجی پی</a>
                        <div id='subMenu' className='opacity-0 invisible group-hover:opacity-100 duration-500 group-hover:visible w-full absolute left-0 top-[15vh] bg-white h-[50vh] border-t-[1px] border-[#fab38f]'>
                            <div className='w-[20%] h-[80%] p-[20px] flex flex-wrap content-center justify-center'>
                                <div className='absolute w-[80vw] left-0 top-0 h-[80%] duration-300 border-r-[1px]'>
                                    <ul className='w-full h-full flex flex-wrap justify-evenly content-start'>
                                        <li className='w-[45%] mx-[1%] h-[45%] flex justify-center items-center '>
                                            <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center'>
                                                <figure className='w-[30%] h-full'>
                                                    <img src={mag1} className='w-full h-full rounded-md' />
                                                </figure>
                                                <div className='flex flex-wrap peer px-[5%] justify-center content-center w-[70%] h-full'>
                                                    <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>وضعیت دریافت وام دیجی پی در استان های مختلف</h4>
                                                    <span className='font-thin w-full text-[14px] text-[#768194]'>۲ ماه پیش</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className='w-[45%] mx-[1%] h-[45%] flex justify-center items-center '>
                                            <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center'>
                                                <figure className='w-[30%] h-full'>
                                                    <img src={mag2} className='w-full h-full rounded-md' />
                                                </figure>
                                                <div className='flex flex-wrap peer px-[5%] justify-center content-center w-[70%] h-full'>
                                                    <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>اعطای بیش از ۳ هزار میلیارد ریال اعتبار به کاربران در اردیبهشت ماه</h4>
                                                    <span className='font-thin w-full text-[14px] text-[#768194]'>۶ ماه پیش</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className='w-[45%] mx-[1%] h-[45%] flex justify-center items-center '>
                                            <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center'>
                                                <figure className='w-[30%] h-full'>
                                                    <img src={mag3} className='w-full h-full rounded-md' />
                                                </figure>
                                                <div className='flex flex-wrap peer px-[5%] justify-center content-center w-[70%] h-full'>
                                                    <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>قرعه کشی خرید اقساطی آبان</h4>
                                                    <span className='font-thin w-full text-[14px] text-[#768194]'>۱ سال پیش</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className='w-[45%] mx-[1%] h-[45%] flex justify-center items-center '>
                                            <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center'>
                                                <figure className='w-[30%] h-full'>
                                                    <img src={mag4} className='w-full h-full rounded-md' />
                                                </figure>
                                                <div className='flex flex-wrap peer px-[5%] justify-center content-center w-[70%] h-full'>
                                                    <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>بازدید وزیر اقتصاد و معاون علمی و فرهنگی رییس جمهور از غرفه دیجی پی در نمایشگاه خانه نوآوری</h4>
                                                    <span className='font-thin w-full text-[14px] text-[#768194]'>۱ سال پیش</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <li className='w-full h-[25%] flex justify-center items-center group/li bg-white'>
                                    <div className='w-full h-full px-[5%] py-[5px] cursor-pointer flex flex-wrap content-center'>
                                        <div className='flex flex-wrap justify-center content-center w-[80%] h-full'>
                                            <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]  duration-100 hover:text-[#0040ff] hover:font-bold'>اخبار</h4>
                                        </div>
                                        <span className='h-full w-[20%] flex duration-100 opacity-0 group-hover/li:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#0b1e65] justify-center items-center flex'></i></span>
                                    </div>
                                    <div className='absolute w-[80vw] left-0 top-0 h-[80%] duration-300 border-r-[1px] bg-white invisible opacity-0 group-hover/li:opacity-100 group-hover/li:visible'>
                                        <ul className='w-full h-full flex flex-wrap justify-evenly content-start'>
                                            <li className='w-[45%] mx-[1%] h-[45%] flex justify-center items-center '>
                                                <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center'>
                                                    <figure className='w-[30%] h-full'>
                                                        <img src={mag1} className='w-full h-full rounded-md' />
                                                    </figure>
                                                    <div className='flex flex-wrap peer px-[5%] justify-center content-center w-[70%] h-full'>
                                                        <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>وضعیت دریافت وام دیجی پی در استان های مختلف</h4>
                                                        <span className='font-thin w-full text-[14px] text-[#768194]'>۲ ماه پیش</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className='w-[45%] mx-[1%] h-[45%] flex justify-center items-center '>
                                                <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center'>
                                                    <figure className='w-[30%] h-full'>
                                                        <img src={mag2} className='w-full h-full rounded-md' />
                                                    </figure>
                                                    <div className='flex flex-wrap peer px-[5%] justify-center content-center w-[70%] h-full'>
                                                        <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>اعطای بیش از ۳ هزار میلیارد ریال اعتبار به کاربران در اردیبهشت ماه</h4>
                                                        <span className='font-thin w-full text-[14px] text-[#768194]'>۶ ماه پیش</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className='w-[45%] mx-[1%] h-[45%] flex justify-center items-center '>
                                                <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center'>
                                                    <figure className='w-[30%] h-full'>
                                                        <img src={mag3} className='w-full h-full rounded-md' />
                                                    </figure>
                                                    <div className='flex flex-wrap peer px-[5%] justify-center content-center w-[70%] h-full'>
                                                        <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>قرعه کشی خرید اقساطی آبان</h4>
                                                        <span className='font-thin w-full text-[14px] text-[#768194]'>۱ سال پیش</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className='w-[45%] mx-[1%] h-[45%] flex justify-center items-center '>
                                                <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center'>
                                                    <figure className='w-[30%] h-full'>
                                                        <img src={mag4} className='w-full h-full rounded-md' />
                                                    </figure>
                                                    <div className='flex flex-wrap peer px-[5%] justify-center content-center w-[70%] h-full'>
                                                        <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>بازدید وزیر اقتصاد و معاون علمی و فرهنگی رییس جمهور از غرفه دیجی پی در نمایشگاه خانه نوآوری</h4>
                                                        <span className='font-thin w-full text-[14px] text-[#768194]'>۱ سال پیش</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='w-full h-[25%] flex justify-center items-center group/li bg-white'>
                                    <div className='w-full h-full px-[5%] py-[5px] cursor-pointer flex flex-wrap content-center'>
                                        <div className='flex flex-wrap justify-center content-center w-[80%] h-full'>
                                            <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]  duration-100 hover:text-[#0040ff] hover:font-bold'>پی کست</h4>
                                        </div>
                                        <span className='h-full w-[20%] flex duration-100 opacity-0 group-hover/li:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#0b1e65] justify-center items-center flex'></i></span>
                                    </div>
                                    <div className='absolute w-[80vw] left-0 top-0 h-[80%] duration-300 border-r-[1px] bg-white invisible opacity-0 group-hover/li:opacity-100 group-hover/li:visible'>
                                        <ul className='w-full h-full flex flex-wrap justify-evenly content-start'>
                                            <li className='w-[45%] mx-[1%] h-[45%] flex justify-center items-center '>
                                                <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center'>
                                                    <figure className='w-[30%] h-full'>
                                                        <img src={mag5} className='w-full h-full rounded-md' />
                                                    </figure>
                                                    <div className='flex flex-wrap peer px-[5%] justify-center content-center w-[70%] h-full'>
                                                        <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>پی کست قسمت هفتم: دنیای دیجیتال چه تاثیری روی زندگی ما داشته؟</h4>
                                                        <span className='font-thin w-full text-[14px] text-[#768194]'>۱ سال پیش</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className='w-[45%] mx-[1%] h-[45%] flex justify-center items-center '>
                                                <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center'>
                                                    <figure className='w-[30%] h-full'>
                                                        <img src={mag6} className='w-full h-full rounded-md' />
                                                    </figure>
                                                    <div className='flex flex-wrap peer px-[5%] justify-center content-center w-[70%] h-full'>
                                                        <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>پی کست قسمت ششم: تاثیر ارز دیجیتال در کسب و کارها</h4>
                                                        <span className='font-thin w-full text-[14px] text-[#768194]'>۱ سال پیش</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className='w-[45%] mx-[1%] h-[45%] flex justify-center items-center '>
                                                <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center'>
                                                    <figure className='w-[30%] h-full'>
                                                        <img src={mag7} className='w-full h-full rounded-md' />
                                                    </figure>
                                                    <div className='flex flex-wrap peer px-[5%] justify-center content-center w-[70%] h-full'>
                                                        <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>پی کست قسمت پنجم: کدوم ارز دیجیتال آینده بهتری داره؟</h4>
                                                        <span className='font-thin w-full text-[14px] text-[#768194]'>۱ سال پیش</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className='w-[45%] mx-[1%] h-[45%] flex justify-center items-center '>
                                                <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center'>
                                                    <figure className='w-[30%] h-full'>
                                                        <img src={mag8} className='w-full h-full rounded-md' />
                                                    </figure>
                                                    <div className='flex flex-wrap peer px-[5%] justify-center content-center w-[70%] h-full'>
                                                        <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>پی کست قسمت چهارم: چرا ارز دیجیتال رو باید جدی بگیریم؟</h4>
                                                        <span className='font-thin w-full text-[14px] text-[#768194]'>۱ سال پیش</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='w-full h-[25%] flex justify-center items-center group/li bg-white'>
                                    <div className='w-full h-full px-[5%] py-[5px] cursor-pointer flex flex-wrap content-center'>
                                        <div className='flex flex-wrap justify-center content-center w-[80%] h-full'>
                                            <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]  duration-100 hover:text-[#0040ff] hover:font-bold'>راهنمای خرید</h4>
                                        </div>
                                        <span className='h-full w-[20%] flex duration-100 opacity-0 group-hover/li:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#0b1e65] justify-center items-center flex'></i></span>
                                    </div>
                                    <div className='absolute w-[80vw] left-0 top-0 h-[80%] duration-300 border-r-[1px] bg-white invisible opacity-0 group-hover/li:opacity-100 group-hover/li:visible'>
                                        <ul className='w-full h-full flex flex-wrap justify-start content-start'>
                                            <li className='w-[45%] mx-[1%] h-[45%] flex justify-center items-center '>
                                                <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center'>
                                                    <figure className='w-[30%] h-full'>
                                                        <img src={mag9} className='w-full h-full rounded-md' />
                                                    </figure>
                                                    <div className='flex flex-wrap peer px-[5%] justify-center content-center w-[70%] h-full'>
                                                        <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>آیا خودروی من به دزدگیر نیاز دارد؟</h4>
                                                        <span className='font-thin w-full text-[14px] text-[#768194]'>۲ سال پیش</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className='w-[45%] mx-[1%] h-[45%] flex justify-center items-center '>
                                                <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center'>
                                                    <figure className='w-[30%] h-full'>
                                                        <img src={mag10} className='w-full h-full rounded-md' />
                                                    </figure>
                                                    <div className='flex flex-wrap peer px-[5%] justify-center content-center w-[70%] h-full'>
                                                        <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>خرید نقدی یا خرید اقساطی، کدام یک منطقی تر است؟</h4>
                                                        <span className='font-thin w-full text-[14px] text-[#768194]'>۳ سال پیش</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className='w-[45%] mx-[1%] h-[45%] flex justify-center items-center '>
                                                <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center'>
                                                    <figure className='w-[30%] h-full'>
                                                        <img src={mag11} className='w-full h-full rounded-md' />
                                                    </figure>
                                                    <div className='flex flex-wrap peer px-[5%] justify-center content-center w-[70%] h-full'>
                                                        <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>خرید اقساطی چه مزایایی دارد؟</h4>
                                                        <span className='font-thin w-full text-[14px] text-[#768194]'>۳ سال پیش</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='w-full h-[25%] flex justify-center items-center group/li bg-white'>
                                    <div className='w-full h-full px-[5%] py-[5px] cursor-pointer flex flex-wrap content-center'>
                                        <div className='flex flex-wrap justify-center content-center w-[80%] h-full'>
                                            <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]  duration-100 hover:text-[#0040ff] hover:font-bold'>آکادمی</h4>
                                        </div>
                                        <span className='h-full w-[20%] flex duration-100 opacity-0 group-hover/li:opacity-100'><i className='bi bi-arrow-left w-full h-full text-[#0b1e65] justify-center items-center flex'></i></span>
                                    </div>
                                    <div className='absolute w-[80vw] left-0 top-0 h-[80%] duration-300 border-r-[1px] bg-white invisible opacity-0 group-hover/li:opacity-100 group-hover/li:visible'>
                                        <ul className='w-full h-full flex flex-wrap justify-start content-start'>
                                            <li className='w-[45%] mx-[1%] h-[45%] flex justify-center items-center '>
                                                <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center'>
                                                    <figure className='w-[30%] h-full'>
                                                        <img src={mag12} className='w-full h-full rounded-md' />
                                                    </figure>
                                                    <div className='flex flex-wrap peer px-[5%] justify-center content-center w-[70%] h-full'>
                                                        <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>دوره آموزشی فین تک برای مدیران آینده</h4>
                                                        <span className='font-thin w-full text-[14px] text-[#768194]'>۳ ماه پیش</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className='w-[45%] mx-[1%] h-[45%] flex justify-center items-center '>
                                                <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center'>
                                                    <figure className='w-[30%] h-full'>
                                                        <img src={mag13} className='w-full h-full rounded-md' />
                                                    </figure>
                                                    <div className='flex flex-wrap peer px-[5%] justify-center content-center w-[70%] h-full'>
                                                        <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>۱۴ راز مهم برای تبدیل شدن به یک کارآفرین موفق</h4>
                                                        <span className='font-thin w-full text-[14px] text-[#768194]'>۱۱ ماه پیش</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className='w-[45%] mx-[1%] h-[45%] flex justify-center items-center '>
                                                <div className='w-full h-full py-[5px] cursor-pointer rounded-md flex flex-wrap content-center'>
                                                    <figure className='w-[30%] h-full'>
                                                        <img src={mag14} className='w-full h-full rounded-md' />
                                                    </figure>
                                                    <div className='flex flex-wrap peer px-[5%] justify-center content-center w-[70%] h-full'>
                                                        <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>ویژگی های شخصیتی و مهارت های کارآفرینان را بشناسیم</h4>
                                                        <span className='font-thin w-full text-[14px] text-[#768194]'>۱ سال پیش</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </div>
                            <div className='bg-[#f2f5f8] h-[20%] px-5 w-full flex flex-wrap content-center'>
                                <h4 className='font-thin w-full text-[1vw] text-[#0b1e65]'>دریافت اعتبار پنجاه میلیونی</h4>
                                <span className='font-thin w-full text-[12px] text-[#768194]'>با دریافت اعتبار پنجاه میلیونی می توانید از دیجیکالا با بیش از ده میلیون تنوع محصولات خرید کنید</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
            <div className=' w-[10%] h-full flex flex-wrap group/login'>
                <span className='w-full h-full flex justify-center items-center'>
                    <i className="bi bi-person text-[#0b1e65] text-[24px] 2xl:text-[1.5vw] cursor-pointer flex justify-center items-center w-full h-full"></i>
                </span>
                <div className='absolute top-[15vh] left-[10%] opacity-0 flex flex-wrap content-center justify-center invisible duration-300 group-hover/login:opacity-100 group-hover/login:visible shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] border-t-[1px] border-t-[#fba965] w-[120px] sm:w-[200px] h-[100px] sm:h-[150px] bg-white z-20 '>
                    <span className='w-full h-[50%] flex justify-center items-center'>
                        <i className="bi bi-person text-[#0040ff] text-[30px] flex justify-center items-center w-full h-full"></i>
                    </span>
                    <h4 ref={openButton} className='w-full h-[20%] cursor-pointer font-bold text-center text-[2.5vw] sm:text-[1vw] text-[#0040ff]'>ورود به دیجی پی</h4>
                </div>
            </div>
        </div>
    )
}

export default Menu