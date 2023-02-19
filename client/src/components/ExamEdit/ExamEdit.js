import React from 'react';
import { Link } from 'react-router-dom';
import { exam1, patient1 } from '../../data';
import './ExamEdit.css';

//This page displays all the details of an exam
function ExamEdit() {
  const [xrayUrl, onChangeXrayUrl] = React.useState((exam1.imageURL));
  const [examId, onChangeId] = React.useState(exam1.id);
  const [brixScore, onChangeBrixScore] = React.useState(exam1.brixScore);
  const [keyFindings, onChangeKeyFindings] = React.useState(exam1.keyFindings);

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
          <div style={{ display: 'flex' }}>
            <div className='Column'>
              <div className='text2'>patient id</div>
              {patient1.id}
              <div className='text2'>age</div>
              {patient1.age}
              <div className='text2'>sex</div>
              {patient1.sex}
            </div>
            <div className='Column'>
              <div className='text2'>bmi</div>
              {patient1.bmi}
              <div className='text2'>weight</div>
              {patient1.weight} lbs
              <div className='text2'>zip code</div>
              {patient1.zip}
            </div>
          </div>
        </div>
      </div>
      <div className='buttons'>
        <button
          className='Button'
          onClick={() => {
            exam1.id = examId;
            exam1.brixScore = brixScore;
            exam1.keyFindings = keyFindings;
            exam1.imageURL = xrayUrl;
          }}
        >
          <Link to='/IndexPage/Exam'>save</Link>
        </button>
        <button className='Button'>
          <Link to='/IndexPage/Exam'>cancel</Link>
        </button>
      </div>
      </div>
    </div>
  );
}

export default ExamEdit;
