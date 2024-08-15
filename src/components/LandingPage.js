import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserActions = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">User Actions</h1>
        <div className="flex space-x-4">
          <button
            onClick={() => navigate('/add-user')}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Add User
          </button>
          <button
            onClick={() => navigate('/users')}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
          >
            Edit User
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserActions;

