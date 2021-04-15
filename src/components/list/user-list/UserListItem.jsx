import { useContext, useEffect } from 'react';
import API_SERVICE from '../../../services/users-api';
import '../../ui/list.css'



import { UserProvider } from '../../providers/UserProvider';

function UserListItem({ user }) {
  const { onUserUpdate } = useContext(UserProvider);

  useEffect(() => {
    (async () => {
      const item = await API_SERVICE.getUsersItemAsync(user.id);
      console.log('[UserListItem]', item);
    })();
  }, [user]);

  return (
    <div
      className={`list-group-item  ${
        user.completed ? 'list-group-item-primary' : ''
      }`}
      onClick={() => onUserUpdate(user)}>
      Name:{user.name}   Username:{user.username}   Email:{user.email}  Phone:{user.phone}  Website:{user.website}      
    </div>
  );
}

export default UserListItem;



