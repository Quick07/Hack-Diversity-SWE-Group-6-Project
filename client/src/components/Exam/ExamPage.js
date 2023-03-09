import React from 'react';
import './ExamPage.css';
import { Link } from 'react-router-dom';

// This page allows access to view all exam and patient information
export default function MainExamPage() {
  return (
    <div className='MainExamPage'>
      <div>
        <h1>Exams</h1>
        <h2>View All Exam Records.</h2>
      </div>
      <div>
        <button className='indexButton'>
          <Link to='/Exams/ViewList'>View Exams</Link>
        </button>
        <button className='indexButton'>
          <Link to='/Exams/ViewPatients'>View Patients</Link>
        </button>
      </div>
    </div>
  );
}
