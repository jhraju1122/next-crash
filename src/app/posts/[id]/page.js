import React from 'react'
 

export async function PostPage ({params}) {
    const {id} = params;
    const post = await getPost(id);

  return (
    <div>
        <h2 className='text-red-400'>{post.title}</h2>
        <p>{post.body}</p>
    </div>
  )
}

export default page