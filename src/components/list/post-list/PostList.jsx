import { useContext } from "react";
import PostListItem from "./PostListItem";
import { PostProvider } from "../../providers/PostProvider";

function PostList(props) {
  const { postList } = useContext(PostProvider);

  return (
    <div className="row">
      <h2>Post List</h2>
      <div className="col-12">
        <div className="list-group">
          {postList.map((post) => {
            return <PostListItem post={post} key={post.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default PostList;
