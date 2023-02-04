import React from 'react'
import  './Write.css'
import writeImg from '../../assets/gallery03.png'

const Write = () => {
  return (
    <div className='write'>
      <img className='writeImg' src={writeImg} alt="" />
        <form className='writeForm'>
            <div className="writeFormGroup">
                <label htmlFor="fileinput">
                <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id='fileinput' style={{display:"none"}}/>
                <input type="text" placeholder='title' className='writeInput' autoFocus={true} />
            </div> 
            <div className="writeFormGroup">
              <textarea placeholder='tell your story.....' typeof='text' className='writeInput writeText'></textarea>
              <button className='writeSubmit' type='submit'>Publish</button>
            </div>
        </form>
    </div>
  )
}

export default Write