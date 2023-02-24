import React from 'react';
import './ExamPage.css';
import { Link } from 'react-router-dom';
import Indextable from '../Exam/Examstable';
import Button from '../Buttons/Button';
import ExamPageHero from '../Hero/ExamPageHero';

// This page allows access to view all exam and patient information
export default function IndexPage() {
  return (
    <div className='MainExamPage'>
      <div></div>
      <div className='table'>
        <Indextable />
      </div>
      <div className='MainHerobuttonContainer'>
        <Link to='/ExamPage/Exam'>
          <Button className='MainExamPageButton' button='View Exam' />
        </Link>
        <Link to='/ExamInfo'>
          <Button className='MainExamPageButton' button='View Patients' />
        </Link>
      </div>
    </div>
  );
}
