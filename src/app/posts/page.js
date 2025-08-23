import React from 'react';
import getAllPosts from '../../../lib/getAllPosts';

const Posts = async () => {
    const posts = await getAllPosts(); // ✅ wait for the data

    return (
        <div className='mt-6'>
            <h1>All Posts</h1>
            <ul className='mt-6'>
                {posts?.map(post => (
                    <li className='border-2' key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Posts;
