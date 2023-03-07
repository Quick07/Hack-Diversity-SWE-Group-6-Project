import React from 'react';
import {exams, patients } from '../../data2';
import './ExamInfo.css';

//This page displays all the details of an exam
function ExamInfo() {
  var exam = exams[0];
  var patient = patients.find(e => e.patientId == exam.patientId);
  return (
    <div className='ExamInfoPage'>
      <div>
      <header className='header'>
        <h1> exam info</h1>
        View details about an exam here.
      </header>
      </div>
      <div className='Info' >
      <div>
        <img className='ExamImage' src={exam.imageURL} alt='' />
      </div>

      {/* Tables Containing patient and exam info from example Exams and Patients in Data.js   */}

      <div className='Tables'>
        <div className='InfoTable'>
          <div className='text3'> exam info </div>
          <div className='Text'>
            <div className='text2'>exam id</div>
            {exam.examId}
            <div className='text2'>brixia score</div>
            {exam.brixScore}
            <div className='text2'>key findings</div>
            {exam.keyFindings}
          </div>
        </div>
        <div className='PatientTable'>
          <div className='text3'> patient info </div>
          <div className='content'>
            <div className='id'>
              <div className='text2'>patient id</div>
              {patient.patientId}</div>
            <div className='Column'>
              <div className='text2'>age</div>
              {patient.age}
              <div className='text2'>sex</div>
              {patient.sex}
            </div>
            <div className='Column'>
              <div className='text2'>bmi</div>
              {patient.bmi}
              <div className='text2'>weight</div>
              {patient.weight} lbs
              {/* <div className='text2'>zip code</div>
              {patient.zip} */}
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default ExamInfo;