import React, { useContext, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import { BlogContext } from '../MainRouter'

const Creatblog = () => {
  
  const {post,setPost}=useContext(BlogContext);
  const titleref=useRef({});
  const savedref=useRef({})
  
  const handleClick=()=>{
    const newTitle=titleref.current.value;
    const newBlog=savedref.current.value;
    const value={title:newTitle, body:newBlog, id: Date.now()};
    
    setPost([...post,value]);
    console.log(value)
  }
  
  return (
    <div>
      <form>
        <div className='blogsheet'>      
        <strong><h2 className='pt-5 '>Ready to Write?<br/> Let's Create Your Blog Together!</h2></strong>
       <i> <h4 className='py-5 mt-4'> "Blogs are the perfect platform for sharing the things you love." - Siobhan Curham</h4></i>
        <textarea className='box1' cols="80" placeholder='Write the title ' ref={titleref}></textarea>
        <br />
        <textarea className=' box2 mt-5' cols="100" rows="20  " placeholder='Write your blog' ref={savedref}></textarea>
        <br />
        <Link to='/saved'>
        <button type="button" class="btn btn-primary my-4 " onClick={handleClick}> Submit </button>
        </Link>
        </div>
      </form>
    </div>
  )
} 

export default Creatblog
