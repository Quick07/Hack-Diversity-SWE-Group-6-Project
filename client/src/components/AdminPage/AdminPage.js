import React from 'react';
import './AdminPage.css';

// This page allows access to create and edit exams
export default function AdminPage() {
  return <div className='header'>
    <h1>admin</h1>
    create and edit exam records.
    <div style={{display: "block"}}>
    <button className='adminButton'>create an exam</button> {/*Links to create exam form*/}
    <button className='adminButton'> edit an exam</button>{/*Links to table with all exams*/}
    </div>
  </div>;
}
