import React from 'react';
import './IndexPage.css';
import { Link } from 'react-router-dom';

// This page allows access to view all exam and patient information
export default function IndexPage() {
  return <div className='header'>
    <h1>index</h1>
    view all exam records.
    <div style={{display: "block"}}>
    <button className='indexButton'> <Link to='/IndexPage/Exam'>view exams</Link></button> {/* FIXME: Button height is wonky. should link to table with all exams*/}
    <button className='indexButton'> view patients</button> {/*Links to table with all patients*/}
    </div>
  </div>;
}
