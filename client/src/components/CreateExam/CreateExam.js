import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { exams, patients } from '../../data2';
import './CreateExam.css';

// const { MongoClient } = require('mongodb');

// const uri = 'mongodb+srv://admin:pass@techdive.uhfnhov.mongodb.net/test';
// const dbName = 'Exams';

// const client = new MongoClient(uri);

//       await client.connect();
//       const db = client.db(dbName);
//       const patients = db.collection('Patients');
//       const result = await patients.find().toArray();
//       await client.close();

var exam = exams[0];
var patient = patients[0];


//This page displays all the details of an exam
function CreateExam() {
  // filter patients based on input 
  // or have a drop down that has existing patients
    
    
    const [xrayUrl, onChangeXrayUrl] = useState("");
    const [examId, onChangeId] = useState("");
    const [brixScore, onChangeBrixScore] = useState("");
    const [keyFindings, onChangeKeyFindings] = useState("");
    
    function onPatientSelect(event) {patient = patients.find(e => e.patientId == event.target.value);console.log(patient)}


    // CREATE FUNCTION THAT GRABS WHATEVER SELECTED PATIENT AND USES THAT SELECTED ID TO FOR; BMI, WEIGHT, SEX, ETC.

  return (
    <div className='CreateExamPage'>
      <div>
        <h1>Create Exam</h1>
        Input and create exam details here.
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
              value={examId}
              onChange={e => onChangeId(e.target.value)}
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
        {/* access patient data base to chose between patients (or if patient does not exist create new one) */}
        <div className='PatientTable'>
          <div className='text3'> patient info </div>
          <div className='content'>
            <div className='id'>
              <div className='text2'>patient id</div>
              <select onChange={onPatientSelect}>{

                patients.map( (patient) => 
                  <option key={patient.patientId}>{patient.patientId}</option> )

              }</select>
              </div>
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
    const newExam = {
      id: examId,
      brixScore: brixScore,
      keyFindings: keyFindings,
      imageURL: xrayUrl,
    };
    fetch('/api/exams', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newExam),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }}
        > {/* make the save button the create button and link it to the back end */}
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

export default CreateExam;