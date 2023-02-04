import React from 'react'
import './SinglePst.css'
import singlepstimg from '../../assets/gallery03.png'
import TopBar from '../topbar/TopBar'

const SinglePst = () => {
  return (
   
    <>
    <div className='singlepost'>
        <div className="singlePostWrapper">
            <img className='singlePostImg' src={singlepstimg} alt="" />
            <h1 className="singlePostTitle">Ex qui consectetur sunt tempor.
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span>Author:<b>Pradeep</b></span>
                <span className='singlePostDate'>1 hour ago</span>
            </div>
            <p className="singlePostDesc">Do esse qui ut in ut nulla magna fugiat enim ex laborum id sint qui. Ea nisi culpa proident voluptate laboris minim commodo adipisicing et ullamco. Aliqua commodo Lorem aute enim excepteur mollit in eu consectetur deserunt pariatur. Duis laborum dolore sit nulla eu ex in consequat. Enim do commodo pariatur proident amet. Proident id non nostrud veniam aliqua adipisicing elit adipisicing do consequat.
                Officia ipsum ex laboris non sint. Ullamco sunt sit laboris nulla aliqua amet do nostrud esse in. Sit irure consectetur voluptate aute.
                Laboris qui laboris velit cillum adipisicing nulla eiusmod sunt do quis. Cillum occaecat ex laboris commodo. Occaecat eu commodo amet nostrud nulla et velit nisi aliquip fugiat ipsum. Est velit cillum labore sit ex id tempor elit occaecat pariatur sunt ipsum. Adipisicing aliquip duis dolor consectetur occaecat labore pariatur labore aliquip id commodo laborum.
                Aliqua et veniam ex aliqua quis eiusmod. Nostrud irure dolor officia cupidatat est pariatur ullamco laboris adipisicing consectetur ea. Sit aute ut ad occaecat do adipisicing qui id.
                Fugiat elit excepteur ex deserunt commodo aliqua magna laborum ad. Velit veniam dolor eiusmod fugiat excepteur voluptate id magna non pariatur. Nisi laborum eiusmod amet adipisicing sit commodo. Ut id quis esse magna. Eiusmod nostrud officia qui reprehenderit deserunt proident incididunt mollit adipisicing ad sint tempor ea commodo.
            </p>

            
        </div>
    </div>
 
    </>
     )
}

export default SinglePst