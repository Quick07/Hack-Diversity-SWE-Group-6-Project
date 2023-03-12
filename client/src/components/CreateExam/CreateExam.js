import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CreateExam.css';
//This page displays all the details of an exam
function CreateExam() {
  // filter patients based on input
  // or have a drop down that has existing patients
  const [xrayUrl, onChangeXrayUrl] = useState('');
  const [examId, onChangeId] = useState('');
  const [brixScore, onChangeBrixScore] = useState('');
  const [keyFindings, onChangeKeyFindings] = useState('');

  const [newExam, setNewExam] = useState();
  const [allPatients, setAllPatients] = useState([]);
  const [patient, setPatient] = useState({
    AGE: '', // set a default value for age
    SEX: '',
    LATEST_BMI: '',
    LATEST_WEIGHT: '',
    // add other properties of the patient object as needed
  });

  const navigate = useNavigate();

  // takes the selected patient and applies their info (and prints out info into the console)
  useEffect(() => {
    fetch('https://project-x-vuhz.onrender.com/patients')
      .then(response => response.json())
      .then(data => {
        setAllPatients(data);
        console.log(data);
      })
      .catch(error => {
        console.log(error);
        console.log('Failed to fetch patient data.');
      });
  }, []);

  useEffect(() => {
    console.log(newExam);
    if (newExam) {
      fetch('https://project-x-vuhz.onrender.com/exams', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newExam),
      })
        .then(response => response.json())
        .then(data => navigate(`../Exams/ViewExam/${data}`))
        .catch(error => console.error(error));
    }
  }, [newExam]);

  const handleSave = () => {
    setNewExam({
      exam_Id: examId,
      PATIENT_ID: patient.PATIENT_ID,
      brixia_scores: brixScore,
      key_findings: keyFindings,
      xray_url: xrayUrl,
    });
  };

  const onPatientSelect = event => {
    setPatient(allPatients.find(e => e.PATIENT_ID == event.value));
  };
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
        <div className='Tables'>
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
                <select onChange={e => onPatientSelect(e.target)}>
                  {allPatients.map(patient => (
                    <option key={patient.PATIENT_ID}>
                      {patient.PATIENT_ID}
                    </option>
                  ))}
                </select>
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
              </div>
            </div>
          </div>
        </div>
        <div className='buttons'>
          <button className='Button' onClick={handleSave}>
            Save
          </button>
          <button className='Button'>
            <Link to='../Admin'>Cancel</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
export default CreateExam;
