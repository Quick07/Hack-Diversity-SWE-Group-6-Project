import React from 'react';
import './TablePage.css';
import { Link } from 'react-router-dom';
import Indextable from '../Exam/Examstable';
import 'semantic-ui-css/semantic.min.css';

// This page allows access to view all exam and patient information
export default function TablePage() {
  return (
    <div className='TablePage'>
      <div>
        <h1>
          exams |{' '}
          <Link to=''>
            <span className='inactive'>patients</span>
          </Link>{' '}
        </h1>
        <p>View all exams here.</p>
      </div>
      <div>
        <input className='examSearch' value='Search...' />
        <i class='sort icon' />
        <span className='current'>
          <i class='list ul icon' />
        </span>
        <i class='th icon' />
      </div>
      <Indextable className='table' />
    </div>
  );
}
