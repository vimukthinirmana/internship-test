import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';

function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  const refreshUsers = () => {
    setSelectedUser(null);
  };

  return (
    <div className="App">
      <UserForm selectedUser={selectedUser} refreshUsers={refreshUsers} />
      <UserList selectUser={setSelectedUser} />
      {selectedUser && <UserDetails userId={selectedUser.id} />}
    </div>
  );
}

export default App;
