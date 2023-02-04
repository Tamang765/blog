import React from 'react'
import Sidebar from '../../sidebar/Sidebar'
import SinglePst from '../../singlePost/SinglePst'
import TopBar from '../../topbar/TopBar'
import './single.css'

const single = () => {
  return (
    <>
    <TopBar/>
    <div className='single'>
        <SinglePst/>
        <Sidebar/>
    </div>
    </> )
}

export default single