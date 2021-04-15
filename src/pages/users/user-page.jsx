
import AddUserForm from '../../components/forms/add-users-form/addusersForm';
import UserList from '../../components/list/user-list';
import UserProviderComponent from '../../components/providers/UserProvider';


function UserPage(props) {
  return (
    <UserProviderComponent>
      <div className="row">
        <h1>Users</h1>
        <div className="col-6">
          <AddUserForm />
        </div>
        <div className="col-6">
          <UserList />
        </div>
      </div>
    </UserProviderComponent>
  );
}

export default UserPage;
