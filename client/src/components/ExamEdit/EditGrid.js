import * as React from 'react';
import './ExamEdit';
import { Link } from 'react-router-dom';

export default function EditGrid(props) {
  const { exams } = props;
  return (
    <div> 
      
      {exams.length < 1 ? (
      <p>No exams found.</p> ): (
      <div className='grid'>
        {exams.map(e => 
    <div className='Card'>
      <Link to={`../Admin/EditExam/${e._id}`}>
    <div>
        <img className='CardImage' src= {e.xray_url} alt={e.xray_url}/>
        </div>
        <div className='CardText'>
            <h2>Exam ID</h2>     
            {e.exam_Id} 
            <h2>Patient ID</h2> 
            {e.PATIENT_ID}
        </div>
        </Link>
      </div>
          )}
        </div>
        )}
      </div>
  );
      }