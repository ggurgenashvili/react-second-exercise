import { useContext } from "react";
import UserListItem from "./UserListItem";
import { UserProvider } from "../../providers/UserProvider";

function UserList(props) {
  const { userList } = useContext(UserProvider);

  return (
    <div className="row">
      <h2>User List</h2>
      <div className="col-12">
        <div className="list-group">
          {userList.map((user) => {
            return <UserListItem user={user} key={user.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default UserList;
