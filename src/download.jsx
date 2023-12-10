import React, { useEffect } from 'react'

import pic from './assets/downloadPic.svg'
import { useRef } from 'react'

function Download() {
    const titles = useRef()
    const contents = useRef()
    useEffect(()=>{
        let title = Object.entries(titles.current.children)
        let content = Object.entries(contents.current.children)
        console.log(title);

        title.forEach(function(val, i){
            if(val[1].classList.contains('active'))
            {
                val[1].style.backgroundColor = '#0040ff'
                val[1].style.border = 'none'
                let child =  val[1].children
                child = Object.entries(child)
                console.log(child);
                child.forEach(function(val, i){
                    val[1].style.color = 'white'
                    let _i = Object.entries(child[0][1].children)
                    _i = _i[0][1]
                    _i.style.color = 'white'
                })
                content[i][1].style.opacity = '1'
                content[i][1].style.visibility = 'visible'
                // console.log(content[i][1]);

            }
            val[1].addEventListener('click', ()=>{
                for(let j = 0;j<3;j++){
                    title[j][1].style.backgroundColor = 'transparent'
                    title[j][1].style.border = '1px solid #061962'
                    title[j][1].classList.remove('active')
                    let child = title[j][1].children
                    child = Object.entries(child)
                    child.forEach(function(val, i){
                        val[1].style.color = '#061962'
                        let _i = Object.entries(child[0][1].children)
                        _i = _i[0][1]
                        _i.style.color = '#061962'
                    })
                    content[j][1].style.opacity = '0'
                    content[j][1].style.visibility = 'hidden'
                    
                }
                val[1].classList.add('active')
                val[1].style.backgroundColor = '#0040ff'
                val[1].style.border = 'none'
                let child =  val[1].children
                child = Object.entries(child)
                console.log(child);
                child.forEach(function(val, i){
                    val[1].style.color = 'white'
                    let _i = Object.entries(child[0][1].children)
                    _i = _i[0][1]
                    _i.style.color = 'white'
                })
                content[i][1].style.opacity = '1'
                content[i][1].style.visibility = 'visible'
               
            })
        })


    }, [])

  return (
    <div className='flex flex-wrap bg-[#e7ecfd]  min-h-[100vh] w-full h-[140vh] sm:h-[180vh] lg:h-[90vh]'>
        <figure className='h-[50vh] sm:h-[50%] lg:h-full w-full lg:w-[50%]'>
            <img className='w-full h-full object-contain' src={pic} alt="downloadPic" />
        </figure>

        <div className='flex flex-wrap content-center justify-center h-[50%] lg:h-full w-full lg:w-[50%]'>
        <h2 id='sliderTopHeader' className='w-full h-[10%] text-[#061962] flex items-center justify-center text-[6vw] sm:text-[3.5vw]'>دانلود اپلیکیشن دیجی پی</h2>
        <span className='w-full h-[10%] text-[#061962] flex items-center justify-center text-[3vw] sm:text-[1.5vw] font-bold'>در دسترس برای همه گوشی ها</span>
        <div ref={titles} className='flex justify-center items-center w-full h-[10vh]'>
            <div className='w-[25%] cursor-pointer active h-[70%] mx-2 rounded-[30px] border-[1px] border-[#061962] flex justify-center items-center'>
                <span className='w-[30%] h-full'><i className="bi bi-android2 w-full h-full flex justify-end items-center text-[#061962] text-[3vw] sm:text-[1.5vw]"></i></span>
                <span className='w-[70%] h-full text-[3vw] sm:text-[1.5vw] text-[#061962] flex justify-center items-center font-bold'>اندروید</span>
            </div>
            <div className='w-[25%] cursor-pointer h-[70%] mx-2 rounded-[30px] border-[1px] border-[#061962] flex justify-center items-center'>
                <span className='w-[30%] h-full'><i className="bi bi-apple w-full h-full flex justify-end items-center text-[#061962] text-[3vw] sm:text-[1.5vw]"></i></span>
                <span className='w-[70%] h-full text-[3vw] sm:text-[1.5vw] text-[#061962] flex justify-center items-center font-bold'>آیفون</span>
            </div>
            <div className='w-[25%] cursor-pointer h-[70%] mx-2 rounded-[30px] border-[1px] border-[#061962] flex justify-center items-center'>
                <span className='w-[30%] h-full'><i className="bi bi-globe2 w-full h-full flex justify-end items-center text-[#061962] text-[3vw] sm:text-[1.5vw]"></i></span>
                <span className='w-[70%] h-full text-[3vw] sm:text-[1.5vw] text-[#061962] flex justify-center items-center font-bold'>نسخه وب</span>
            </div>
        </div>

        <div ref={contents} className='flex relative justify-center items-center w-full h-[30vh]'>
           <div className='absolute opacity-0 invisible w-[70%] bg-[#d0d9f5] h-[20vh] rounded-2xl left-1/2 translate-x-[-50%] top-0 flex flex-wrap justify-evenly content-evenly'>
                <span className='bg-[#0040ff] h-[2px] sm:h-[5px] flex w-[50px] absolute top-0 right-[5%] z-10'></span>
                <span className='bg-white cursor-pointer h-[30px] sm:h-[50px] px-3 min-w-[80px] rounded-2xl flex justify-center items-center text-[#0040ff] font-bold text-[2.5vw] sm:text-[1vw]'>گوگل پلی</span>
                <span className='bg-white cursor-pointer h-[30px] sm:h-[50px] px-3 min-w-[80px] rounded-2xl flex justify-center items-center text-[#0040ff] font-bold text-[2.5vw] sm:text-[1vw]'>کافه بازار</span>
                <span className='bg-white cursor-pointer h-[30px] sm:h-[50px] px-3 min-w-[80px] rounded-2xl flex justify-center items-center text-[#0040ff] font-bold text-[2.5vw] sm:text-[1vw]'>مایکت</span>
           </div>
           <div className='absolute opacity-0 invisible w-[70%] bg-[#d0d9f5] h-[40vh] rounded-2xl left-1/2 translate-x-[-50%] top-0 flex flex-wrap justify-evenly content-evenly'>
                <span className='bg-[#0040ff] h-[2px] sm:h-[5px] flex w-[50px] absolute top-0 right-[50%] translate-x-[50%] z-10'></span>
                <span className='bg-white h-[30px] sm:h-[50px] cursor-pointer px-3 min-w-[80px] rounded-2xl flex justify-center items-center text-[#0040ff] font-bold text-[2.5vw] sm:text-[1vw] mx-1'>وب اپلیکیشن</span>
                <span className='bg-white h-[30px] sm:h-[50px] cursor-pointer px-3 min-w-[80px] rounded-2xl flex justify-center items-center text-[#0040ff] font-bold text-[2.5vw] sm:text-[1vw] mx-1'>سیب اپ</span>
                <span className='bg-white h-[30px] sm:h-[50px] cursor-pointer px-3 min-w-[80px] rounded-2xl flex justify-center items-center text-[#0040ff] font-bold text-[2.5vw] sm:text-[1vw] mx-1'>سیب ایرانی</span>
                <span className='bg-white h-[30px] sm:h-[50px] cursor-pointer px-3 min-w-[80px] rounded-2xl flex justify-center items-center text-[#0040ff] font-bold text-[2.5vw] sm:text-[1vw] mx-1'>سیبچه</span>
                <span className='bg-white h-[30px] sm:h-[50px] cursor-pointer px-3 min-w-[80px] rounded-2xl flex justify-center items-center text-[#0040ff] font-bold text-[2.5vw] sm:text-[1vw] mx-1'>اناردونی</span>
                <span className='bg-white h-[30px] sm:h-[50px] cursor-pointer px-3 min-w-[80px] rounded-2xl flex justify-center items-center text-[#0040ff] font-bold text-[2.5vw] sm:text-[1vw] mx-1'>سیب بازار</span>
                <span className='bg-white h-[30px] sm:h-[50px] cursor-pointer px-3 min-w-[80px] rounded-2xl flex justify-center items-center text-[#0040ff] font-bold text-[2.5vw] sm:text-[1vw] mx-1'>آی اپس</span>
                <span className='bg-white h-[30px] sm:h-[50px] cursor-pointer px-3 min-w-[80px] rounded-2xl flex justify-center items-center text-[#0040ff] font-bold text-[2.5vw] sm:text-[1vw] mx-1'>سیب بانک</span>
                <span className='bg-white h-[30px] sm:h-[50px] cursor-pointer px-3 min-w-[80px] rounded-2xl flex justify-center items-center text-[#0040ff] font-bold text-[2.5vw] sm:text-[1vw] mx-1'>دانلود رایگان از اپ استور</span>
           </div>
           <div className='absolute opacity-0 invisible w-[70%] bg-[#d0d9f5] h-[20vh] rounded-2xl left-1/2 translate-x-[-50%] top-0 flex flex-wrap justify-evenly content-evenly'>
                <span className='bg-[#0040ff] h-[2px] sm:h-[5px] flex w-[50px] absolute top-0 left-[5%] z-10'></span>
                <span className='bg-white cursor-pointer h-[30px] sm:h-[50px] px-3 min-w-[80px] rounded-2xl flex justify-center items-center text-[#0040ff] font-bold text-[2.5vw] sm:text-[1vw]'>نسخه وب</span>
           </div>
        </div>
        </div>

    </div>
  )
}

export default Download