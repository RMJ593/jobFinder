import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [userData, setUserData] = useState(null);

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/user/profile'); // Adjust the URL as needed
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      {userData ? (
        <div>
          <h1>Profile</h1>
          <div>
            <label><strong>Name:</strong></label>
            <p>{userData.name}</p>
          </div>
          <div>
            <label><strong>Email:</strong></label>
            <p>{userData.email}</p>
          </div>
          <div>
            <label><strong>Phone:</strong></label>
            <p>{userData.phone}</p>
          </div>
          <div>
            <label><strong>Resume:</strong></label>
            {userData.resume ? (
              <a href={`http://localhost:5000/${userData.resume}`} target="_blank" rel="noopener noreferrer">View Resume</a>
            ) : (
              <p>No resume uploaded</p>
            )}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
