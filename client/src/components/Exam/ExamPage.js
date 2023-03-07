import React from 'react';
import './ExamPage.css';
import { Link } from 'react-router-dom';

// This page allows access to view all exam and patient information
export default function MainExamPage() {
  return <div className='MainExamPage'>
    <div>
    <h1>exams</h1>
    <h2>view all exam records.</h2>
    </div>
    <div>
    <button className='indexButton'><Link to='/Exams/ViewList'>view exams</Link></button>
    <button className='indexButton'><Link to='/Exams/ViewPatients'>view patients</Link></button>
    </div>
  </div>;
}
