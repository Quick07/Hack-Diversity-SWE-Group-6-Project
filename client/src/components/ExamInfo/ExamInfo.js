import React from 'react';
import './ExamInfo.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//This page displays all the details of an exam
function ExamInfo() {
  const [allPatients, setAllPatients] = useState('');
  const { _id } = useParams();
  useEffect(() => {
    fetch('https://projectx-b17q.onrender.com/patients')
      .then(response => response.json())
      .then(data => setAllPatients(data))
      .catch(error => {
        console.log(error);
        setError('Failed to fetch patient data.');
      });
  }, []);

  //exams data
  const [allExams, setAllExams] = useState('');
  useEffect(() => {
    fetch('https://projectx-b17q.onrender.com/exams')
      .then(response => response.json())
      .then(data => setAllExams(data))
      .catch(error => {
        console.log(error);
        setError('Failed to fetch exams data.');
      });
  }, []);

  if (!allPatients || !allExams) {
    return <div></div>;
  }
  var exam = allExams.find(e => e._id == _id);

  var patient = allPatients.find(e => e.PATIENT_ID == exam.PATIENT_ID);

  return (
    <div className='ExamInfoPage'>
      <div>
        <header className='header'>
          <h1> Exam info</h1>
          View details about an exam here.
        </header>
      </div>
      <div className='Info'>
        <div>
          <img className='ExamImage' src={exam.xray_url} alt='' />
        </div>

        {/* Tables Containing patient and exam info from example Exams and Patients in Data.js   */}

        <div className='Tables'>
          <div className='InfoTable'>
            <div className='text3'> Exam info </div>
            <div className='Text'>
              <div className='text2'>exam id</div>
              {exam.exam_Id}
              <div className='text2'>brixia score</div>
              {exam.brixia_scores}
              <div className='text2'>key findings</div>
              {exam.key_findings}
            </div>
          </div>
          <div className='PatientTable'>
            <div className='text3'> Patient info </div>
            <div className='content'>
              <div className='id'>
                <div className='text2'>patient id</div>
                {patient.PATIENT_ID}
              </div>
              <div className='Column'>
                <div className='text2'>age</div>
                {patient.AGE}
                <div className='text2'>sex</div>
                {patient.SEX}
              </div>
              <div className='Column'>
                <div className='text2'>bmi</div>
                {patient.LATEST_BMI}
                <div className='text2'>weight</div>
                {patient.LATEST_WEIGHT} lbs
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
