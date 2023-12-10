import React, { useRef } from 'react'
import banner from './assets/digiTop.webp'
import Menu from './menu'
import './assets/App.css'

import SliderTop from './sliderTop';
import JobServices from './jobServices';
import DigiService from './digiService';
import Download from './download';
import Mag from './mag';
import Footer from './footer';


function App() {
  return (
    <div id='page'>
      <figure className='w-full h-[10vh] duration-300'>
        <img src={banner} alt="banner" className='w-full h-full object-cover' />
      </figure>
      <Menu />
      <SliderTop/>
      <JobServices />
      <DigiService />
      <Download />
      <Mag />
      <Footer />
    </div>
  )
}

export default App