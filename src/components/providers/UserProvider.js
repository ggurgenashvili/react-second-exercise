import React, { useState, useEffect } from 'react';
import API_SERVICE from '../../services/users-api';


export const UserProvider = React.createContext(null);



function UserProviderComponent({ children }) {
  const [userList, setUserList] = useState([]);


  useEffect(() => {
    (async () => {
      const result = await API_SERVICE.getUsersAsync({ limit: 5 });
      setUserList(result);
    })();
  }, []);

  const onAddUser = (newUser) => {
 
    setUserList([...userList, newUser]);
  };

  const onUserUpdate = (user) => {
    if (!user.completed) {
      const index = userList.findIndex((el) => el.id === user.id);

      const newState = [
        ...userList.slice(0, index),
        {
          ...user,
          completed: !user.completed,
        },
        ...userList.slice(index + 1),
      ];

      setUserList(newState);
    } else {
      const newState = userList.filter((el) => el.id !== user.id);
      setUserList(newState);
    }
  };

  return (
    <UserProvider.Provider
      value={{
        userList,
        setUserList,
        onAddUser,
        onUserUpdate,
      }}>
      {children}
    </UserProvider.Provider>
  );
}

export default UserProviderComponent;
