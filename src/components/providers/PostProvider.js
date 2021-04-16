import React, { useState, useEffect } from 'react';
import API_SERVICE from '../../services/posts-api';


export const PostProvider = React.createContext(null);



function PostProviderComponent({ children }) {
  const [postList, setPostList] = useState([]);


  useEffect(() => {
    (async () => {
      const result = await API_SERVICE.getPostsAsync({ limit: 5 });
      setPostList(result);
    })();
  }, []);

  const onAddPost = (newPost) => {
 
    setPostList([...postList, newPost]);
  };

  const onPostUpdate = (post) => {
    if (!post.completed) {
      const index = postList.findIndex((el) => el.id === post.id);

      const newState = [
        ...postList.slice(0, index),
        {
          ...post,
          completed: !post.completed,
        },
        ...postList.slice(index + 1),
      ];

      setPostList(newState);
    } else {
      const newState = postList.filter((el) => el.id !== post.id);
      setPostList(newState);
    }
  };

  return (
    <PostProvider.Provider
      value={{
        postList,
        setPostList,
        onAddPost,
        onPostUpdate,
      }}>
      {children}
    </PostProvider.Provider>
  );
}

export default PostProviderComponent;
