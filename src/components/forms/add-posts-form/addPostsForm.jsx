import { useState, useContext } from 'react';
import { PostProvider } from '../../providers/PostProvider';


function AddPostsForm(props){
    const { onAddPost } = useContext(PostProvider);

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

  
    const onSubmit = (event) => {
      event.preventDefault();
      console.log('FORM SUBMIT');
      onAddPost({
        title,
        body,
        id: Math.random().toString(),
      });
      setTitle('');
      setBody('');    
    };
  
    return (
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="addTitle" className="form-label">Add Title</label>
          <input
            type="text"
            className="form-control"
            id="addTitle"
            required
            value={title}
            onChange={({ target }) => {
              setTitle(target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="addBody" className="form-label">Add Body</label>
          <input
            type="text"
            className="form-control"
            id="addBody"
            required
            value={body}
            onChange={({ target }) => {
              setBody(target.value);
            }}
          />
        </div>
        
        
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }

export default AddPostsForm;