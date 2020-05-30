import React, { useContext } from 'react';
import Post from './Post';
import AddPost from './AddPost';
import { PostContext } from '../providers/PostsProvider';

const Posts = () => {
  const posts = useContext(PostContext);
  return (
    <section className="Posts">
      <AddPost />
      {posts.map((post) => (
        <Post {...post} key={post.id} />
      ))}
    </section>
  );
};

export default Posts;
