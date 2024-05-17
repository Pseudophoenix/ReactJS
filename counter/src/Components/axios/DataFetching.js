import { useState,useEffect } from 'react'
import React from 'react'
import axios from './../../Services/instance'
// import axios fromaxios
function DataFetching() {
    const [posts,setPosts]=useState([])
    const [id,setId]=useState(1)
    const [idFromButtonClick,setidFromButtonClick]=useState(1)
    useEffect(()=>{
        axios.get(`/posts/${idFromButtonClick}`).then((response)=>{
            setPosts(response.data);
        console.log(response);
        }).catch((error)=>{
            console.log(error);
        })
    },[idFromButtonClick])
    const handleClick=()=>{
        setidFromButtonClick(id)
    }
  return (
    <div className='card m-5'>
        <input type="text" value={id} className='form-control' onChange={(e)=>{
            setId(e.target.value)
        }}/>
        <button type="button" className='btn btn-primary m-3' onClick={handleClick}>Fetch Post</button>
        <ul className='list-group'>
            {/* <li className='list-group-item'>{posts.data[1].id}</li>
            <li className='list-group-item'>{posts.data[0].id}</li> */
            // posts.map(item=>
                <li key={posts.id}>
                {posts.title}   
                </li>
            // )
            }
            {/* <li className='list-group-item'>C</li> */}
        </ul>
    </div>
  )
}

export default DataFetching