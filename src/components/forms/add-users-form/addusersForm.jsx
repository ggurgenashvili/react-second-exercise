import { useState, useContext } from 'react';
import { UserProvider } from '../../providers/UserProvider';



function AddUserForm(props) {
  const { onAddUser } = useContext(UserProvider);

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');  
  const [website, setWebsite] = useState(''); 
  

  const onSubmit = (event) => {
    event.preventDefault();
    console.log('FORM SUBMIT');
    onAddUser({
      name,
      username,
      email,
      phone,
      website,
      id: Math.random().toString(),
    });
    setName('');
    setUsername('');
    setEmail('');
    setPhone('');
    setWebsite('');
    
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="addUser" className="form-label">Add User</label>
        <input
          type="text"
          className="form-control"
          id="addUser"
          required
          value={name}
          onChange={({ target }) => {
            setName(target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="addUser" className="form-label">Add Username</label>
        <input
          type="text"
          className="form-control"
          id="addUser"
          required
          value={username}
          onChange={({ target }) => {
            setUsername(target.value);
          }}
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Add Email</label>
        <input type="email" 
        class="form-control" 
        id="addEmail" 
        placeholder="name@example.com" 
        required
        value={email}
        onChange={({ target }) => {
        setEmail(target.value);
          }}
        />
        </div>

        <div className="mb-3">
        <label htmlFor="addPhone" className="form-label">Add Phone</label>
        <input
          type="number"
          className="form-control"
          id="addPhone"
          required
          value={phone}
          onChange={({ target }) => {
            setPhone(target.value);
          }}
        />
      </div>  
      <div className="mb-3">
        <label htmlFor="addWebsite" className="form-label">Add Website</label>
        <input
          type="text"
          className="form-control"
          id="addWebsite"
          required
          value={website}
          onChange={({ target }) => {
            setWebsite(target.value);
          }}
        />
      </div>  

      
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default AddUserForm;
