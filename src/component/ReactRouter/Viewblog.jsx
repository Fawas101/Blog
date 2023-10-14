import React, { useContext } from 'react'
import { BlogContext } from './MainRouter'
import { useParams } from 'react-router-dom';

const Viewblog = () => {
 const  {post}=useContext(BlogContext);
 const {id}=useParams()
const   findId=post.find((item)=>item.id===parseInt(id))
    return (
    <div>
      <h1>{findId.title}</h1>
        <br />
        <p>{findId.body}</p>
    </div>
  )
}

export default Viewblog
