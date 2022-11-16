import React from 'react'
import TrollFace from '../../img/trollface.jpg'

const Header = () => {
  return (
    <header className={`flex justify-center items-center bg-gradient-to-r from-purple-900 to-purple-600 p-4 text-white px-8 sm:justify-between`}>
        <div id="header-left" className={`flex`}>
            <img src={TrollFace} alt="" className="w-12 mr-4" />
            <h1 id="title" className={`text-2xl font-bold font-karla tracking-tight`}>Meme Generator</h1>
        </div>
        <h3 id="header-right" className={`hidden font-inter font-thin text-sm sm:block`}>Simple React Project</h3>
    </header>
  )
}

export default Header