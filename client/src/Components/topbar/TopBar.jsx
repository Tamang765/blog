import React from 'react'
import person from '../../assets/chef.png'
import  './Topbar.css'
import {Link} from 'react-router-dom';

const TopBar = () => {
const user=true;
  return (
    <div className='top'>
        <div className="topleft">
            <i className="topIcon fa-brands fa-square-facebook"></i>
            <i className="topIcon fa-brands fa-square-twitter"></i>
            <i className="topIcon fa-brands fa-square-instagram"></i>
            <i className="topIcon fa-brands fa-square-pinterest"></i>

        </div>
        <div className="topcenter">
            <ul className='topList'>

                <li className='topListItem'>
                    <Link className='link' to="/">Home</Link>
                </li>
                <li className='topListItem'><Link className='link' to="/about">About</Link></li>
                <li className='topListItem'><Link className='link' to="/contact">Contact</Link></li>
                <li className='topListItem'><Link className='link' to="/write">Write</Link></li>
                <li className='topListItem'>{user && "Logout"}</li>
                <li></li>
            </ul>
        </div>
        <div className="topright">
            {
               user ? (
                <img className='topImg' src={person} alt="" />
               ) : (
                <ul className='topList'>
                    <li className='topListItem'>
                        <Link className='link' to='/login'>LOGIN</Link>
                    </li>
                    <li className='topListItem'>
                    <Link className='link' to='/register'>REGISTER</Link>
                    </li>
                </ul>
               )
            }
            
            <i className="topSearch fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default TopBar