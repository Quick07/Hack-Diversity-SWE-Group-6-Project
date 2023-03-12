import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CreatePatient.css';
//This page displays all the details of an exam
function CreatePatient() {
  // filter patients based on input
  // or have a drop down that has existing patients
  const [patientId, onChangeId] = useState();
  const [age, onChangeAge] = useState();
  const [bmi, onChangeBMI] = useState();
  const [sex, onChangeSex] = useState();
  const [weight, onChangeWeight] = useState();

  const [newPatient, setNewPatient] = useState();
  const [allPatients, setAllPatients] = useState([]);
  const [patient, setPatient] = useState({
    AGE: '', 
    SEX: '',
    LATEST_BMI: '',
    LATEST_WEIGHT: ''
  });

  const navigate = useNavigate();
  
  const existingID = (id) => {
    const sameId = allPatients.filter(e => e.PATIENT_ID == id);
  }

  const generateID = () => {
    var id = patientId;

    const createID = () => {
    id = "COVID-AR-";
    var randomNumber = Math.floor(Math.random() * 14839999 + 160000000);
    id += randomNumber;
    return id;
    }
    if (existingID(createID())) {
       generateID(); 
    } else {
    onChangeId(id);
    }
  }





  // takes the selected patient and applies their info (and prints out info into the console)
  useEffect(() => {
    fetch('http://localhost:9000/patients')
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
    if (newPatient) {
      fetch('http://localhost:9000/patients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPatient),
      })
        .then(response => response.json())
        .then(data => navigate(`../Exams/ViewPatients/${data}`))
        .catch(error => console.error(error));
    }
  }, [newPatient]);

useEffect(() => {
    setPatient({
        PATIENT_ID: patientId,
        AGE: age, 
        SEX: sex,
        LATEST_BMI: bmi,
        LATEST_WEIGHT: weight
      });
}, [patientId, age, sex, bmi, weight])

// useEffect(() => {
//     console.log(newPatient);
// }, [newPatient])

  const handleSave = () => {
     if (!patientId || !age || !sex || !bmi || !weight ) {
        const text = document.querySelector('.blank');
        text.classList.add('missing');
     } else  {
    setNewPatient(patient);
     }
  };

  const onPatientSelect = event => {
    setPatient(allPatients.find(e => e.PATIENT_ID == event.value));
  };
  // CREATE FUNCTION THAT GRABS WHATEVER SELECTED PATIENT AND USES THAT SELECTED ID TO FOR; BMI, WEIGHT, SEX, ETC.
  return (
    <div className='CreatePatientPage'>
      <div>
        <h1>Create Patient</h1>
        Create a new patient record here.
      </div>
      <div className='Info'>
          {/* access patient data base to chose between patients (or if patient does not exist create new one) */}
          <div className='PatientTable'>
            <div className='text3'> patient info </div>
            <div className='content'>
              <div className='blank'>Please enter all fields.</div>
              <div className='id'>
                <div className='text2'>patient id</div>
                <div className='input id'>
                <input
                  value={patientId}
                  onChange={e => onChangeId(e.target.value)}
                />
                <i class="sync alternate icon" onClick={generateID}></i>
                </div>
              </div>
              <div className='Column'>
                <div className='text2'>age</div>
                <div className='input age'>
                <input type='number' min="0" value={age} onChange={e => onChangeAge(e.target.value)}>
                </input>
                </div>
                <div className='text2'>sex</div>
                <div className='input sex'>
                <select type='number' value={sex} onChange={(e) => onChangeSex(e.target.value)}>
                    <option key=''></option>
                    <option key='F'>F</option>
                    <option key='M'>M</option>
                </select>
                <i class="angle down icon"></i>
                </div>
              </div>
              <div className='Column'>
                <div className='text2'>bmi</div>
                <div className='input bmi' classN>
                <input
                type='number'
                  value={bmi} min="0"
                  onChange={e => onChangeBMI(e.target.value)}
                />
                </div>
                <div className='text2'>weight</div>
                <div className='input weight'>
                <input
                type='number' min="0"
                  value={weight}
                  onChange={e => onChangeWeight(e.target.value)}
                />
                <i>lbs</i>
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
export default CreatePatient;