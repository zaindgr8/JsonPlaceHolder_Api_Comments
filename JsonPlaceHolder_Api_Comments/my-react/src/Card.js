import React from 'react'

const Card = ({user, handleComment})=> {
  return (
    <>
    <div className='flex gap-2'><h1 className='font-bold'>UserId:</h1><p> {user.id}</p></div>
  <div className='flex gap-2'><h1 className='font-bold'>UserTitle:</h1><p> {user.title}</p></div>
  <div className='flex gap-2'><h1 className='font-bold'>UserBody:</h1><p> {user.body}</p></div>
  <button onClick={(e)=>handleComment(e,user.id)} className='border-black border-2 p-2 mt-3 mb-3'>Comment</button>
  </>
  )
}

export default Card