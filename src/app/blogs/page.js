import Link from 'next/link';
import React from 'react';

export const Blogs = () => {
    const blogs = [{
id: 1,
title: "blog 1",
description: "blog 1 description"
},
{
id: 1,
title: "blog 2",
description: "blog 2 description"
}];
    return (
        <main>
            <div className='mt-6'>blogs page</div>
            <ul>
                {blogs.map(blog =><li className='mb-4' key={blog.id}> 
                    <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                </li>
            
            )}
            </ul>
        </main>
    );
};

export default Blogs;