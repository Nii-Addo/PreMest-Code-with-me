/*
 **This component holds functionality and form for
 **each blog post.You can style it as you want,can implememt other functions within it
 **Charle do what you can do
 */
import React from "react";

const Post = (props) => {
  const post = props.post;
  return (
    <div>
      <div>{post.title}</div>
      <div>{post.author}</div>
      <div>{post.content}</div>
    </div>
  );
};

export default Post;
