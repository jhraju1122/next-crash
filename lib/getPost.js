import React from 'react';

export const getPost = (id) => {
    const result = fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
    )
    return result.json();
};

 