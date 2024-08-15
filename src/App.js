import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage.js';
import UserForm from './components/UserForm';
import UserList from './components/UserList';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/add-user" element={<UserForm mode="add" />} />
      <Route path="/edit-user/:id" element={<UserForm mode="edit" />} />
      <Route path="/users" element={<UserList />} />
    </Routes>
  );
};

export default App;
