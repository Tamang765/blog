import React from 'react'
import Sidebar from '../../sidebar/Sidebar'
import './Setting.css'
import chef from '../../../assets/chef.png'
const Setting = () => {
  return (
  <> 
  <div className="setting">
    <div className='settingWrapper'>
        <div className="settingTitle">
            <span className='settingUpdateTitle'>Update Your Account</span>
            <span className='settingDeleteTitle'>Delete Your Account</span>
        </div>
        <form action="" className="settingForm">
            <label>Profile Picture</label>
            <div className="settingProfile">
                <img src={chef} alt="" />
                <label htmlFor="fileInput">
                    <i className='settingPpIcon far fa-user-circle'></i>
                </label>
                <input type="file" id='fileInput' style={{display:"none"}}/>
            </div>
            <label> UserName</label>
            <input type="text" placeholder='Pradeep' />
            <label> Email</label>
            <input type="email" placeholder='tmg@gmail.com' />
            <label> Password</label>
            <input type="password" placeholder='password' />
            <button className='settingSubmit'>Update</button>

        </form>
    </div>
    <Sidebar/>
  </div>

    </>
  )
}

export default Setting