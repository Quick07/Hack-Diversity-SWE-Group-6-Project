import React from 'react';
import './MainExamPage.css';
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
          <Link to='/MainExamPage/Exam'>view exams</Link>
        </button>{' '}
        {/*Links to create exam form*/}
        <button className='MainExamPageButton'>view patients</button>
        {/*Links to table with all exams*/}
      </div>
      <div className='table'>
        <Indextable />
      </div>
    </div>
  );
}
