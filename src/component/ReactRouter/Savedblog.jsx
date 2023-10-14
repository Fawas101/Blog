import React, { useContext } from 'react'
import { BlogContext } from './MainRouter'
import { Link } from 'react-router-dom';

const Savedblog = () => {

const   {post} = useContext(BlogContext);   

return (
    <>
    <div className='savehead'>
        <h2>Your Blogs</h2>
    </div>
    <br />
{
    
post.map((item) => {
    return(
        <div className='blogt' key={item.id} >
            <Link to={`/view/${item.id}`}>
                <h1>{item.title}</h1>
            </Link>
        </div>
        
)})

}
</>
)
}

export default Savedblog
