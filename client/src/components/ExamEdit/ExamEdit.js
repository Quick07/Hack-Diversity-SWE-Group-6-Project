import React from 'react';
import { Link } from 'react-router-dom';
import { exams, patients } from '../../data2';
import './ExamEdit.css';

//This page displays all the details of an exam
function ExamEdit() {
    var exam = exams[0];
    var patient = patients.find(e => e.patientId == exam.patientId);
    
  const [xrayUrl, onChangeXrayUrl] = React.useState((exam.imageURL));
  const [examId, onChangeId] = React.useState(exam.examId);
  const [brixScore, onChangeBrixScore] = React.useState(exam.brixScore);
  const [keyFindings, onChangeKeyFindings] = React.useState(exam.keyFindings);

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
      <div className='Tables' >
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
      <div className='buttons'>
        <button
          className='Button'
          onClick={() => {
            exam.id = examId;
            exam.brixScore = brixScore;
            exam.keyFindings = keyFindings;
            exam.imageURL = xrayUrl;
          }}
        >
          <Link to='../Exams/ViewExam'>save</Link>
        </button>
        <button className='Button'>
          <Link to='../Exams/ViewExam'>cancel</Link>
        </button>
      </div>
      </div>
    </div>
  );
}

export default ExamEdit;