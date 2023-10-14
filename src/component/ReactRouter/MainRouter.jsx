import React from 'react'
import Creatblog from './pages/Creatblog'
import { Routes,Route } from 'react-router-dom'
import Savedblog from './Savedblog'
import Viewblog from './Viewblog'
import { createContext, useState } from 'react'
export const BlogContext=createContext();

const MainRouter = () => {
  
  const [post,setPost]=useState([]);

  return (
    <div>
      <BlogContext.Provider value={{post,setPost}}>
        <Routes>
            <Route path="/" element={ <Creatblog/> } />
            <Route path="/saved" element={ <Savedblog/> } />
            <Route path="/view/:id" element={ <Viewblog/> } />
        </Routes>
      </BlogContext.Provider>
    </div>
  )
}


export default MainRouter
