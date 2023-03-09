import React from 'react';
import './AdminPage.css';
import { Link } from 'react-router-dom';

export default function AdminPage() {
  return (
    <div className='AdminPage'>
      <div>
        <h1>Admin</h1>
        <h2>Create and edit Exam records.</h2>
      </div>
      <div>
        <Link to='/Admin/CreateExam'>
          <button className='adminButton'> Create an Exam</button>
        </Link>
        <Link to='/Admin/EditExam'>
          <button className='adminButton'> Edit an Exam</button>
        </Link>
      </div>
    </div>
  );
}
