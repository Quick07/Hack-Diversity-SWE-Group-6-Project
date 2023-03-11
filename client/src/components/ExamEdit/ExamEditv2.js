import React from 'react';
import { Link } from 'react-router-dom';
import { exams, patients } from '../../data2';
import './ExamEdit.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//This page displays all the details of an exam
function ExamEdit() {
  const [allPatients, setAllPatients] = useState('');
  const { _id } = useParams();
  useEffect(() => {
    fetch('http://localhost:9000/patients')
      .then(response => response.json())
      .then(data => setAllPatients(data))
      .catch(error => {
        console.log(error);
        setError('Failed to fetch patient data.');
      });
  }, [allPatients]);

  //exams data
  const [allExams, setAllExams] = useState('');
  useEffect(() => {
    fetch('http://localhost:9000/exams')
      .then(response => response.json())
      .then(data => setAllExams(data))
      .catch(error => {
        console.log(error);
        setError('Failed to fetch exams data.');
      });
  }, [allExams]);

  if (!allPatients || !allExams) {
    return <div></div>;
  }

  var exam = allExams.find(e => e._id == _id); // var exam = exams[0];

  // var patient = allPatients.find(e => e.PATIENT_ID == exam.PATIENT_ID); // var patient = patients.find(e => e.patientId == exam.patientId);

  const [xrayUrl, onChangeXrayUrl] = React.useState(exam.xray_url);
  const [examId, onChangeId] = React.useState(exam.exam_Id);
  const [brixScore, onChangeBrixScore] = React.useState(exam.brixia_scores);
  const [keyFindings, onChangeKeyFindings] = React.useState(exam.key_findings);

  return (
    <div className='ExamEditPage'>
      <div>
        <h1> edit exam</h1>
        Edit details about an exam here.
      </div>
      <div className='Info'>
        <div>
          <img className='ExamImage' src={xrayUrl} alt='' />
          <div className='text2'>xray url</div>
          <input
            className='urlInput'
            value={xrayUrl}
            onChange={e => onChangeXrayUrl(e.target.value)}
          />
        </div>
        <div className='Tables'>
          <div className='InfoTable'>
            <div className='text3'> exam info </div>
            <div className='Text'>
              <div className='text2'>exam id</div>
              <input
                className='inputId'
                onChangeText={onChangeId}
                value={examId}
                readOnly={true}
              />
              <div className='text2'>brixia score</div>
              <input
                value={brixScore}
                onChange={e => onChangeBrixScore(e.target.value)}
              />
              <div className='text2'>key findings</div>
              <textarea
                value={keyFindings}
                onChange={e => onChangeKeyFindings(e.target.value)}
              />
            </div>
          </div>
          <div className='PatientTable'>
            <div className='text3'> patient info </div>
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
        <div className='buttons'>
          {/* <button
          className='Button'
          onClick={() => {
            exam.id = examId;
            exam.brixScore = brixScore;
            exam.keyFindings = keyFindings;
            exam.imageURL = xrayUrl;
          }}
        >
          <Link to='../Exams/ViewExam'>save</Link>
        </button> */}
          <button className='Button'>
            <Link to='../Exams/ViewExam'>cancel</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExamEdit;

