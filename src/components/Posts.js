import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='list-group mb-4 posts'>
      {posts.map(post => (
        <li key={post.id} className='list-group-item'>
          <h4>{post.title}</h4>
          {post.body}
        </li>
      ))}
    </ul>
  );
};

export default Posts;