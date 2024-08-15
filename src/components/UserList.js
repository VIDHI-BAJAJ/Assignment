import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const UserList = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter(user =>
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4 p-8 mx-11 my-16 bg-white rounded-none border border-gray-400" style={{ borderWidth: '5px' }}>
      <div className='flex flex-row'>
        <h2 className='text-green-600 text-2xl'>Manage Users</h2>
       <div className='ml-auto'>
       <FontAwesomeIcon icon={faSearch} className="text-gray-500 mr-5"/>
        <button
            onClick={() => navigate('/add-user')}
            className="ml-auto bg-green-500 text-white py-2 px-4 rounded inline-flex items-center justify-center hover:bg-green-600 transition duration-300 space-x-2">
             <span className="bg-white text-blue-500 rounded-full w-6 h-6 flex items-center justify-center mr-2">
             <FontAwesomeIcon icon={faPlus} />
             </span>
            Add User
          </button>
       </div>
      </div>
      <div className="bg-gray-300 h-20">
  <SearchBar setSearchTerm={setSearchTerm} />
</div>
<div>
<div className='flex justify-between text-gray-500'>
    <h4 className="w-1/5 text-left mr-12">NAME</h4>
    <h4 className="w-1/5 text-left ml-9">PHONE NO.</h4>
    <h4 className="w-1/5 text-left ml-12">ROLE</h4>
    <h4 className="w-1/5 text-left ml-10">LOCATION</h4>
    <h4 className="w-1/5 text-left ml-10">FUNCTION</h4>
    <h4 className="w-1/5 text-right">EDIT USER</h4>
  </div>
  <hr/>
  <ul className="space-y-2">
    {filteredUsers.map(user => (
      <React.Fragment key={user.id}>
        <li className="flex justify-between items-center text-black-500 py-2">
          <span className='w-1/5 font-bold'>{user.firstName} {user.lastName}</span>
          <span className="w-1/5  ml-12">{user.phone}</span>
          <span className='w-1/5  font-bold ml-3'>{user.role}</span>
          <span className="w-1/5  break-words">{user.location}</span>
          <span className="w-1/5 mr-14 break-words">{user.department}</span>
          <Link to={`/edit-user/${user.id}`} className="text-right bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition duration-300">
            Edit
          </Link>
        </li>
        <hr />
      </React.Fragment>
    ))}
  </ul>
</div>


</div>
  );
};

export default UserList;
