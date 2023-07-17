import { comment } from 'postcss';
import React, { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log("Error: ", error));
  }, []);

  const handleCommentButtonClick = (postId) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(response => response.json())

      .then(comments => {
        const updatedUsers = users.map(user => {
          if (user.id === postId) {
            return {...user, comments };
          }
          return user;
        });
        setUsers(updatedUsers);
      })
      .catch(error => console.log("Error: ", error));
  };

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <div className='flex gap-2'>
            <h1 className='font-bold'>UserId:</h1>
            <p> {user.id}</p>
          </div>
          <div className='flex gap-2'>
            <h1 className='font-bold'>UserTitle:</h1>
            <p> {user.title}</p>
          </div>
          <div className='flex gap-2'>
            <h1 className='font-bold'>UserBody:</h1>
            <p> {user.body}</p>
          </div>

          <button
            className='border-black border-2 p-2 mt-3 mb-3'
            onClick={() => handleCommentButtonClick(user.id)}
          >
            Comment
          </button>

          {user.comments && (
            
              <>
              {user.comments.map(comment => (
                <>
                  <h3>{comment.name}</h3>
                  <p>{comment.body}</p>
                </>
              ))}
                </>
          )}


  {/* {user.comments && ( 
  <div> 
    {user.comments.map(comment=>{
     return <p>{comment.name}</p>
  })} </div>
  )} */}

          

          <hr className="border-black" />
        </div>
      ))}
    </div>
  );
}

export default App;
