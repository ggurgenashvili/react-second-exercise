import { useContext, useEffect } from 'react';

import '../../ui/list.css'
import { PostProvider } from '../../providers/PostProvider';
import API_SERVICE from '../../../services/posts-api';

function PostListItem({ post }) {
  const { onPostUpdate } = useContext(PostProvider);

  useEffect(() => {
    (async () => {
      const item = await API_SERVICE.getPostItemAsync(post.id);
      console.log('[PostListItem]', item);
    })();
  }, [post]);

  return (
    <div
      className={`list-group-item  ${
        post.completed ? 'list-group-item-primary' : ''
      }`}
      onClick={() => onPostUpdate(post)}>
      Title: {post.title} <br></br>
      Body: {post.body} 
      
    </div>
  );
}

export default PostListItem;



