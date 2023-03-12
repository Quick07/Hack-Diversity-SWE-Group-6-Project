import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { exams, patients } from '../../data2';
import './ExamEdit.css';

//This page displays all the details of an exam
function ExamEdit() {
  const { _id } = useParams();
  const [exam, setExam] = useState();
  const [newExam, setNewExam] = useState();
  const navigate = useNavigate();
  const [xrayUrl, onChangeXrayUrl] = useState();
  const [examId, onChangeId] = useState();
  const [brixScore, onChangeBrixScore] = useState();
  const [keyFindings, onChangeKeyFindings] = useState();

  const [patient, setPatient] = useState();

  useEffect(() => {
    const fetchExam = async () => {
      try {
        const response = await fetch(`https://project-x-vuhz.onrender.com/exams/${_id}`);
        const data = await response.json();
        setExam(data);
        console.log(exam);
        console.log(data);
      } catch (error) {
        console.log('Failed to fetch examm.');
      }
    };
    fetchExam();
  }, []);

  useEffect(() => {
    if (exam) {
      const fetchPatient = async () => {
        try {
          const response = await fetch(
            `https://project-x-vuhz.onrender.com/patients/${exam.PATIENT_ID}`
          );
          const data = await response.json();
          setPatient(data);
          console.log(patient);
          console.log(data);
        } catch (error) {
          console.log('Failed to fetch patient data.');
        }
      };
      fetchPatient();
    }
  }, [exam]);

  useEffect(() => {
    if (exam) {
      onChangeXrayUrl(exam.xray_url);
      onChangeId(exam.exam_Id);
      onChangeBrixScore(exam.brixia_scores);
      onChangeKeyFindings(exam.key_findings);
    }
  }, [exam]);

  useEffect(() => {
    if (newExam) {
      const updateExam = async () => {
        try {
          const response = await fetch(`https://project-x-vuhz.onrender.com/exams`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newExam),
          });

          if (!response.ok) {
            throw new Error('Failed to update exam.');
          } else {
          navigate(`../Exams/ViewExam/${_id}`);
          }

          const result = await response.json();
          console.log(result); // insertedId of the updated exam
        } catch (error) {
          console.error(error);
        }
      };
      updateExam();
    }
  }, [newExam]);

  
  const handleDelete = async () => {
    const confirmed = confirm("Are you sure you want to delete this exam?");
  if (confirmed) {
    try {
      const response = await fetch(`https://project-x-vuhz.onrender.com/exams/${_id}`, {
        method: 'DELETE',
        body: {"_id": `${_id}`},
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete exam.');
      }
  
      // Wait for the delete request to complete before navigating
      await response.json();
      navigate(`../Admin/EditExam`);
    } catch (error) {
      console.error(error);
      // Show an error message to the user
      alert('Failed to delete exam. Please try again later.');
    }
  }
  };
  


  const handleSave = () => {
    setNewExam({
      _id: _id,
      exam_Id: exam.exam_Id,
      PATIENT_ID: patient.PATIENT_ID,
      brixia_scores: brixScore,
      key_findings: keyFindings,
      xray_url: xrayUrl,
    });
    console.log(JSON.stringify(newExam));
  };

  return (
    <div className='ExamEditPage'>
      <div className='header'>
        <h1> Edit exam</h1>
        <i class="trash icon" onClick={handleDelete}></i>
        Edit details about an exam here. 
      </div>
      { (!exam || !patient) ? (<div>Loading exam...</div>) :(
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
                onChange={e => onChangeId(e.target.value)}
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
              </div>
            </div>
          </div>
        </div>
        <div className='buttons'>
          <button className='Button' onClick={handleSave}>
            Save
          </button>
          <button className='Button'>
            <Link to='../Admin/EditExam'>Cancel</Link>
          </button>
        </div>
      </div>)}
    </div>
  );
}

export default ExamEdit;
