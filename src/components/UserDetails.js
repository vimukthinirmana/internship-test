import React, { useEffect, useState } from 'react';
import { getUserDetails } from '../services/weavyService';

const UserDetails = ({ userId }) => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const response = await getUserDetails(userId);
      setUserDetails(response.data);
    };

    if (userId) {
      fetchUserDetails();
    }
  }, [userId]);

  if (!userDetails) return <div>Select a user to view details</div>;

  return (
    <div>
      <h2>{userDetails.name}</h2>
      <p>Email: {userDetails.email}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default UserDetails;
