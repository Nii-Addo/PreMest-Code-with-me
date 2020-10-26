/*
 **Home.jsx has a function that maps through the postArray and Post component
 **
 **import {useState} from react to be able to use the react useState hook
 */

import React, { useState } from "react";
import { postArray } from "../components/PostArray"; //Import postArray from PostArray.js
import Post from "../components/Post"; // import Post component.It is the component that defines how a single post looks and behaves like

const Home = (props) => {
  // Create a new hook and call it posts,set its initial value to the postArray from PostArray.js
  const [posts, setPosts] = useState(postArray);
  return (
    <div>
      {/*Map through the posts (hook) and for each post,pass it down as a props
      ** to the component Post. *****Put the key props for each Post object for
      react to identify each item. */}
      {posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
};

export default Home;
