import React from 'react';
import { useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';

const UserForm = ({ mode }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const userToEdit = users.find(user => user.id === id);

  const formik = useFormik({
    initialValues: mode === 'edit' ? userToEdit : { firstName: '', lastName: '', email: '', phone: '', role: '', location: '', department: '' },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      lastName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phone: Yup.string().matches(/^\d{10}$/, 'Must be exactly 10 digits').required('Required'),
      role: Yup.string().required('Required'),
      location: Yup.string().required('Required'),
      department: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      if (mode === 'add') {
        if (users.some(user => user.email === values.email)) {
          alert('Email already exists!');
          return;
        }
        const newUser = { ...values, id: new Date().getTime().toString() };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
      } else {
        const updatedUsers = users.map(user => 
          user.id === id ? { ...user, ...values } : user
        );
        localStorage.setItem('users', JSON.stringify(updatedUsers));
      }
      navigate('/users');
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4 p-8 mx-11 my-16 bg-white rounded-none border border-gray-400" style={{ borderWidth: '5px' }}>
       <h5 className='text-gray-500 text-right'>All fileds are mandatory</h5>
       <div className="flex space-x-4 mb-4">
       <div className="flex-1">
        <label className="block text-gray-700">First Name <span className="text-red-500">*</span></label>
        <input type="text" {...formik.getFieldProps('firstName')} 
        placeholder='First Name'
        className="mt-1 p-2 pl-4 border border-gray-300 rounded w-full placeholder-gray-400"
        />
        {formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
      </div>
      <div className="flex-1">
        <label className="block text-gray-700">Last Name <span className="text-red-500">*</span></label>
        <input type="text" {...formik.getFieldProps('lastName')}
        placeholder='Last Name'
        className="mt-1 p-2 pl-4 border border-gray-300 rounded w-full placeholder-gray-400" />
        {formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
      </div>
      </div>
      <div className="flex space-x-4 mb-4">
      <div  className="flex-1">
        <label className="block text-gray-700">Phone <span className="text-red-500">*</span></label>
        <input type="text" {...formik.getFieldProps('phone')}
         placeholder='Phone Number'
         className="mt-1 p-2 pl-4 border border-gray-300 rounded w-full placeholder-gray-400" 
        />
        {formik.touched.phone && formik.errors.phone ? <div>{formik.errors.phone}</div> : null}
      </div>
      <div className="flex-1">
        <label className="block text-gray-700">Email <span className="text-red-500">*</span></label>
        <input type="text" {...formik.getFieldProps('email')} 
         placeholder='Email'
         className="mt-1 p-2 pl-4 border border-gray-300 rounded w-full placeholder-gray-400" 
        />
        {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
      </div>
      </div>
      <div className="flex space-x-4 mb-4">
      <div  className="flex-1">
        <label className="block text-gray-700">Role <span className="text-red-500">*</span></label>
        <input type="text" {...formik.getFieldProps('role')}
         placeholder='Role'
         className="mt-1 p-2 pl-4 border border-gray-300 rounded w-full placeholder-gray-400" 
        />
        {formik.touched.role && formik.errors.role ? <div>{formik.errors.role}</div> : null}
      </div>
      <div  className="flex-1">
        <label className="block text-gray-700">Location <span className="text-red-500">*</span></label>
        <input type="text" {...formik.getFieldProps('location')}
         placeholder='Location'
         className="mt-1 p-2 pl-4 border border-gray-300 rounded w-full placeholder-gray-400" 
        />
        {formik.touched.location && formik.errors.location ? <div>{formik.errors.location}</div> : null}
      </div>
      </div>
      <div className="flex space-x-4 mb-4">
      <div  className="flex-1">
        <label className="block text-gray-700">Department <span className="text-red-500">*</span></label>
        <input type="text" {...formik.getFieldProps('department')} 
         placeholder='Department'
         className="mt-1 p-2 pl-4 border border-gray-300 rounded w-3/6 placeholder-gray-400" 
        />
        {formik.touched.department && formik.errors.department ? <div>{formik.errors.department}</div> : null}
      </div>
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">{mode === 'add' ? 'Add User' : 'Edit User'}</button>
       </form>
    
  );
};

export default UserForm;
