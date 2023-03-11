import React from 'react';
import {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import { exams, patients } from '../../data2';
import './ExamEdit.css';

//This page displays all the details of an exam
function ExamEdit() {
  // const [allPatients, setAllPatients] = useState();
  // const [allExams, setAllExams] = useState();
  // const [patient, setPatient] = useState(
  //   {
  //   PATIENT_ID:"P",
  //   AGE:"",
  //   SEX:"",
  //   LATEST_BMI:"",
  //   LATEST_WEIGHT:""
  // }
  // );

  // const [exam, setExam] = useState(
  //   {
  //   PATIENT_ID:"P",
  //   xray_url:"",
  //   exam_Id:"Exam-1",
  //   key_findings:"",
  //   brixia_scores:""
  // }
  // );

  // useEffect(() => {
  //     fetch('http://localhost:9000/exams')
  //       .then(response => response.json())
  //       .then(data => setAllExams(data))
  //       .then(data.find(e=>{}))
  //       .catch(error => {
  //         console.log(error);
  //         setError('Failed to fetch exams data.');
  //       });

  //       fetch('http://localhost:9000/patients')
  //         .then(response => response.json())
  //         .then(data => setAllPatients(data))
  //         .catch(error => {
  //           console.log(error);
  //           setError('Failed to fetch patient data.');
  //         });
    
  // }, []);

  // useEffect(() => {
  //   const fetchEData = async () => {
  //     try {
  //       const response = await fetch('http://localhost:9000/exams');
  //       const data = await response.json();
  //       console.log(data);
  //       var e = data.find(e => e._id == _id);
  //       setExam(e);
  //     } catch (error) {
  //       console.log(error);
  //       console.log('Failed to fetch exams data.');
  //     }
  //   };

  //   const fetchPData = async () => {
  //     try {
  //       const response = await fetch('http://localhost:9000/patients');
  //       const data = await response.json();
  //       console.log(data);
  //       var p = data.find(p => p.PATIENT_ID == exam.PATIENT_ID);
  //       setPatient(p);
  //     } catch (error) {
  //       console.log(error);
  //       console.log('Failed to fetch patients data.');
  //     }
  //   };

  //   fetchEData().then(fetchPData);
  // }, []);

  // useEffect(() => {
  //   const fetchPData = async () => {
  //     try {
  //       const response = await fetch('http://localhost:9000/patients');
  //       const data = await response.json();
  //       console.log(data);
  //       var p = data.find(p => p.PATIENT_ID == exam.PATIENT_ID);
  //       setPatient(p);
  //     } catch (error) {
  //       console.log(error);
  //       console.log('Failed to fetch exams data.');
  //     }
  //   };
  
  //   fetchData();
  // }, []);


    // useEffect(() => {
    //   fetch('http://localhost:9000/patients')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     if (exam) {
    //       var p = data.find(p => p.PATIENT_ID == exam.PATIENT_ID)
    //       setPatient(p);
    //     }
    //   })
    //   .catch(error => {
    //     console.log(error);
    //     setError('Failed to fetch patient data.');
    //   });
    // },[exam])


  // useEffect(() => {
  //   if (allExams) {
  //     var e = allExams.find(e => e._id == _id);
  //     setExam(e);
  //     }
  //     if (allPatients && exam) {
  //   var p = allPatients.find(p => p.PATIENT_ID == exam.PATIENT_ID);
  //   setPatient(p);
  //     }
  // },[allExams])

  const { _id } = useParams();
  const [exam, setExam] = useState();

  const [xrayUrl, onChangeXrayUrl] = useState();
  const [examId, onChangeId] = useState();
  const [brixScore, onChangeBrixScore] = useState();
  const [keyFindings, onChangeKeyFindings] = useState();

  const patient = {"PATIENT_ID":"COVID-19-AR-16434409","AGE":"51","SEX":"M","ZIP":"722","LATEST_BMI":"37.7","LATEST_WEIGHT":"207","ICU Admit":"N","# ICU admits":"0","MORTALITY":"N"}

useEffect(() => {
  const fetchExam = async () => {
    try {
      const response = await fetch(`http://localhost:9000/exams/${_id}`);
      const data = await response.json();
      setExam(data);
      console.log(exam);
      console.log(data);
    } catch (error) {
      console.log('Failed to fetch patient data.');
    }
  };

  fetchExam();

}, []);

useEffect(() => {
  if (exam) {
    onChangeXrayUrl(exam.xray_url);
    onChangeId(exam.exam_Id);
    onChangeBrixScore(exam.brixia_scores);
    onChangeKeyFindings(exam.key_findings);
  }
}, [exam]);

  // useEffect(() =>{
  //   onChangeXrayUrl(exam.xray_url);
  //   onChangeId(exam.exam_Id);
  //   onChangeBrixScore(exam.brixia_scores);
  //   onChangeKeyFindings(exam.key_findings);
  // },[])

  console.log(exam);
  console.log(patient);

  if (!patient || !exam) {
    return <div> No data found.</div>;
  } 

  
  return (
    <div className='ExamEditPage'>
      <div>
        <h1> Edit exam</h1>
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
