import React from 'react';
import './AdminPage.css';
import Button from '../Buttons/Button';
import { Link } from 'react-router-dom';

export default function AdminPage() {
  return (
    <div className='AdminPage'>
      <div>
        <h1>admin</h1>
        <h2>create and edit exam records.</h2>
      </div>
      <div className='adminbuttons'>
        <Link to='/AdminPage/CreateExam'>
          <Button className='MainExamPageButton' button='Create An Exam' />
          <Button className='adminButton' button='Edit An Exam' />
        </Link>
      </div>
    </div>
  );
}
