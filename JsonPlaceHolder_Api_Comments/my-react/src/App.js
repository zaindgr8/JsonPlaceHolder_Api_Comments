import React, { useEffect, useState } from 'react'

function App() {
  const handleComment=(postId)=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response=>response.json())

    .then(comments=>{
     const updatedUser = users.map(user=>{
        if (user.id===postId){
          return {...user, comments}
        }
        return user
      })
      setUsers(updatedUser)
    })

    .catch(error=>console.log("Error", error))
    
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
  <button onClick={()=>handleComment(user.id)} className='border-black border-2 p-2 mt-3 mb-3'>Comment</button>
  
  {user.comments && (
    <div>
      
      {user.comments.map(comment=>{
        return <>
        <p><h1 className='font-bold'>Name: </h1>{comment.name}</p>
        <p><h1 className='font-bold'>Email: </h1>{comment.email}</p>
        </>
      })}
    </div>
  )}

  <hr className="border-black"/>
  </>
))}
    </div>
  )
}

export default App