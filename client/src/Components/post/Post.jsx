import React from 'react'
import  './Post.css'
import postimg from '../../assets/laurels.png'

const Post = () => {
  return (
   <> 
    <div className='post'>
        <img className='postImg' src={postimg} alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className='postCat'>Music</span>
                <span className='postCat'>Life</span>
            </div>
            <span className="postTitle">Sint nisi except.</span>
            <hr />
            <span className='postDate'>1 hour ago</span>
            <p className="postDesc">Duis Lorem occaecat velit ex veniam Lorem enim minim sit. Ad dolor duis excepteur voluptate deserunt amet commodo amet ea sint nulla consectetur. Ullamco est nostrud ullamco sint deserunt commodo sint nisi. Consectetur velit fugiat elit occaecat mollit. Esse do anim labore tempor in cillum esse. Id in incididunt reprehenderit proident ad magna.</p>
        </div>
    </div>
    </>
  )
}

export default Post