import React, { useEffect, useState } from 'react'

function App() {
  const handleComment=()=>{
    
  }
  const [users, setUsers]=useState([])
  useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response=>response.json())
      .then(data=>setUsers(data))
      .catch(error=>console.log("Error: ", error))
  }, [])
  return (
    <div>
      
{users.map (user=>(
  <>
  <div className='flex gap-2'><h1 className='font-bold'>UserId:</h1><p> {user.id}</p></div>
  <div className='flex gap-2'><h1 className='font-bold'>UserTitle:</h1><p> {user.title}</p></div>
  <div className='flex gap-2'><h1 className='font-bold'>UserBody:</h1><p> {user.body}</p></div>
  <button onClick={handleComment} className='border-black border-2 p-2 mt-3 mb-3'>Comment</button>
  <hr className="border-black"/>
  </>
))}
    </div>
  )
}

export default App