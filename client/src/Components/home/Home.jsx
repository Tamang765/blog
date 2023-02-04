import React, { useState } from 'react'
import './Home.css'
import Header from '../header/Header'
import Posts from '../posts/Posts'
import Sidebar from '../sidebar/Sidebar'
import TopBar from '../topbar/TopBar'

const Home = () => {
  return (
  <>
  <TopBar/>
  <Header/>
    <div className='home'>   
        <Posts/>
        <Sidebar/>        
    </div>
    </>)
}

export default Home