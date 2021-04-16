import AddPostsForm from "../../components/forms/add-posts-form";
import PostList from '../../components/list/post-list';
import PostProviderComponent from '../../components/providers/PostProvider';


function PostPage(props) {
    return (
        <PostProviderComponent>
          <div className="row">
            <h1>Posts</h1>
            <div className="col-6">
              <AddPostsForm />
            </div>
            <div className="col-6">
              <PostList />
            </div>
          </div>
        </PostProviderComponent>
      );
    }
    
export default PostPage;
  