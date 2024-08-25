import React, { useEffect, useState } from 'react';
import { listUsers, deleteUser } from '../services/weavyService';

const UserList = ({ selectUser }) => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await listUsers();
    setUsers(response.data);
  };

  const handleDelete = async (userId) => {
    await deleteUser(userId);
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} ({user.email})
          <button onClick={() => selectUser(user)}>Edit</button>
          <button onClick={() => handleDelete(user.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
