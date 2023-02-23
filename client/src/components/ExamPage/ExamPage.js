import React from 'react';
import './ExamPage.css';
import { Link } from 'react-router-dom';
import Indextable from '../Exams/Examstable';

// This page allows access to view all exam and patient information
export default function IndexPage() {
  return (
    <div className='MainExamPage'>
      <div>
        <h1>Index</h1>
        <h2>view all exam records.</h2>
      </div>
      <div>
        <button className='MainExamPageButton'>
          <Link to='/ExamPage/Exam'>view exams</Link>
        </button>

        <button className='MainExamPageButton'><Link to='/ExamPage/Exam'>view patients</Link></button>
      </div>

      <div className='table'>
        <Indextable />
      </div>
    </div>
  );
}
