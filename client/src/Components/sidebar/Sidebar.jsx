import React from 'react'
import './Sidebar.css'
import chef from '../../assets/award01.png'
const Sidebar = () => {
  return (
   <> 
   <div className='sidebar'>
        <div className="sidebarItem">
            <span className='sidebarTitle'>
                About Me
            </span>
            <img src={chef} alt="" />
            <p>Laborum laborum ad deserunt reprehenderit consectetur est cupidatat esse sunt exercitation nostrud ipsum in. Nulla cillum et excepteur minim do culpa est duis velit exercitation. Tempor adipisicing do magna aliquip. Irure laborum deserunt laboris aute dolore tempor cillum nulla nostrud.</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className='sidebarlist'>
                <li className='sidebarlistItem'>Life</li>
                <li className='sidebarlistItem'>Music</li>
                <li className='sidebarlistItem'>Style</li>
                <li className='sidebarlistItem'>Sports</li>
                <li className='sidebarlistItem'>Tech</li>
                <li className='sidebarlistItem'>Cinema</li>
            </ul>
        </div>  
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
            <i className="sidebarsocialIcon fa-brands fa-square-facebook"></i>
            <i className="sidebarsocialIcon fa-brands fa-square-twitter"></i>
            <i className="sidebarsocialIcon fa-brands fa-square-instagram"></i>
            <i className="sidebarsocialIcon fa-brands fa-square-pinterest"></i>
            </div>
        </div>
    </div>
       
    </>
  )
}

export default Sidebar