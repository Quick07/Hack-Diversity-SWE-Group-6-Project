
import * as React from 'react';
import './ViewPatient.css';
import { Link } from 'react-router-dom';

export default function ExamGrid(props) {
  const { exams } = props;
  return (
    <div> 
      
      {exams.length < 1 ? (
      <p>No exams found.</p> ): (
      <div className='grid'>
        {exams.map(e => 
    <div className='Card'>
      <Link to={`../Exams/ViewExam/${e._id}`}>
    <div>
        <img className='CardImage' src= {e.xray_url} alt={e.xray_url}/>
        </div>
        <div className='CardText'>
            <h2>exam id</h2> 
            {e.exam_Id}
            <h2>brixia score</h2>
            {e.brixia_scores}
            <h2>key findings</h2>
            <div className='kf'>
            {e.key_findings}
            </div>
        </div>
        </Link>
      </div>
          )}
        </div>
        )}
      </div>
  );
      }