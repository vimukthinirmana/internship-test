import React, { useState } from 'react';
import { createUser, updateUser } from '../services/weavyService';

const UserForm = ({ selectedUser, refreshUsers }) => {
  const [userData, setUserData] = useState(selectedUser || {});

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedUser) {
      await updateUser(selectedUser.id, userData);
    } else {
      await createUser(userData);
    }
    refreshUsers();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={userData.name || ''}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={userData.email || ''}
        onChange={handleChange}
        required
      />
      <button type="submit">{selectedUser ? 'Update' : 'Create'} User</button>
    </form>
  );
};

export default UserForm;
