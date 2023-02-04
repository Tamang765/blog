import React from 'react'
import './Header.css'
import imgheader from '../../assets/gallery04.png'
const Header = () => {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className='headerTitleSm'>React & Node</span>
            <span className='headerTitleLg'>Blog</span>
        </div>
        <img className='headerImg' src={imgheader} alt="" />
    </div>
  )
}

export default Header