import React from 'react';
import './ExamPage.css';
import { Link } from 'react-router-dom';
import Indextable from '../Exams/Examstable';
import Button from '../Buttons/Button';

// This page allows access to view all exam and patient information
export default function IndexPage() {
  return (
    <div className='MainExamPage'>
      <div>
        <h1>Index</h1>
        <h2>view all exam records.</h2>
      </div>
      <div>
        <Link to='/ExamPage/Exam'>
          <Button className='MainExamPageButton' button='View Exam' />
        </Link>
        <Link to='/ExamPage/Exam'>
          <Button className='MainExamPageButton' button='View Patients' />
        </Link>
      </div>

      <div className='table'>
        <Indextable />
      </div>
    </div>
  );
}
