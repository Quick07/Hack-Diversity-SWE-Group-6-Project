import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './EditPatient.css';
import { Link } from 'react-router-dom';
import ExamTable from './ExamTable';
import ExamGrid from './ExamGrid';
import 'semantic-ui-css/semantic.min.css';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import { useParams, useNavigate } from 'react-router-dom';

//Styling the filter slider
const FilterSlider = styled(Slider)({
  color: '#333333',
  height: 6,
  width: '93.5%',
  margin: '0 16px 0 16px',
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 12,
    width: 12,
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: 'rgba(51,51,51,.75)',
    transformOrigin: 'bottom left',
    fontFamily: 'unset',
    marginRight: '0px',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

// This page allows access to view all exam and patient information
export default function EditPatient() {
  const { PATIENT_ID } = useParams();
  const [patient, setPatient] = useState();
  const [allExams, setAllExams] = useState([]); // Array with all exams for this patient
  const [searchedExams, setSearchedExams] = useState([]); // exams that contain the searched value in the exam id or patient id
  const [search, onSearch] = useState(''); // the search value
  const [list, setList] = useState(''); // the value
  const [grid, setGrid] = useState('current'); // the search value
  const navigate = useNavigate();
  const [newPatient, setNewPatient] = useState();
  const [age, onChangeAge] = useState();
  const [sex, onChangeSex] = useState();
  const [weight, onChangeWeight] = useState();
  const [bmi, onChangeBMI] = useState();

  useEffect(() => {
    fetch(`https://techdive6-rjja.onrender.com/patients/${PATIENT_ID}`)
      .then(response => response.json())
      .then(data => setPatient(data))
      .catch(error => {
        console.log(error);
        console.log('Failed to fetch patient data.');
      });
  }, []);

  useEffect(() => {
    const fetchExam = async () => {
      try {
        const response = await fetch(`http://localhost:9000/exams/byPatient/${PATIENT_ID}`);
        const data = await response.json();
        setAllExams(data);
        setSearchedExams(data);
        console.log(data);
      } catch (error) {
        console.log('Failed to fetch exams.');
        console.log(PATIENT_ID);
      }
    };
    fetchExam();
  }, []);
  
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  

  useEffect(() => {
    const allowSpecialChars = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(allowSpecialChars, 'i');
    if (search.length > 0) {
      setSearchedExams(allExams.filter(e => regex.test(e.exam_Id)));
    } else {
      setSearchedExams(allExams);
    }
  }, [search]);

  useEffect(() => {
    if (patient) {
      onChangeAge(patient.AGE);
      onChangeSex(patient.SEX);
      onChangeWeight(patient.LATEST_WEIGHT);
      onChangeBMI(patient.LATEST_BMI);
    }
  }, [patient]);

  useEffect(() => {
    if (newPatient) {
      fetch(`https://techdive6-rjja.onrender.com/patients/${PATIENT_ID}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPatient),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to update exam.');
          }
          return response.json();
        })
        .then((result) => {
          console.log(result); // insertedId of the updated exam
          navigate(`../Exams/ViewPatients/${patient._id}`);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [newPatient]);
  

  const handleDelete = async () => {
    const confirmed = confirm("Are you sure you want to delete this patient and their exams?");
  if (confirmed) {
    fetch(`http://localhost:9000/patients/${PATIENT_ID}`, {
        method: 'DELETE'
      }).then(fetch(`http://localhost:9000/exams/byPatient/${PATIENT_ID}`, {
        method: 'DELETE'
      })).then(e => 
        navigate(`../Admin/ViewPatients`));
  }
  };

  const handleAdd = () => {
  navigate(`/Admin/CreateExam/${PATIENT_ID}`)
  }

  const handleCancel = () => {
    navigate(`../Admin/ViewPatients`)
  }

  const handleSave = () => {
    setNewPatient({
      _id: patient._id,
      PATIENT_ID: patient.PATIENT_ID,
      AGE: age,
      SEX: sex,
      LATEST_WEIGHT: weight,
      LATEST_BMI: bmi,
    });
    const newPatient = console.log(JSON.stringify(newPatient));
  };

  const handleClick = () => {
    if (list.length > 0) {
      setList('');
      setGrid('current');
    } else {
      setList('current');
      setGrid('');
    }
  };

  if (!patient) {
    return <div> No patient found.</div>;
  } else
    return (
      <div className='EditPatient'>
        <div>
          <h1 style={{ transform: 'translateX(-20px)' }}>
            <Link to='/Admin/ViewPatients'>
              <span className='inactive'>
                <i
                  class='angle left icon'
                  style={{ float: 'left', fontSize: '50px' }}
                ></i>
              </span>
            </Link>
            Edit Patient
            <span className='inactive'>
              <i class="trash alternate outline icon" onClick={handleDelete} style={{ float: 'right', fontSize: '40px'}}></i>
              </span>
          </h1>
          <div className='ValuesContainer'>
            <div className='Values'>
              <span>Patient ID</span>
                <div className='input id'>
                <input
                readOnly={true}
                  value={PATIENT_ID}
                />
                </div>
            </div>
            <div className='Values'>
              <span>Age</span>
              <div className='input age'>
                <input type='number' min="0" value={age} onChange={e => onChangeAge(e.target.value)}>
                </input>
                </div>
            </div>
            <div className='Values'>
              <span>Sex</span>
                <div className='input sex'>
                <select type='number' value={sex} onChange={(e) => onChangeSex(e.target.value)}>
                    <option key=''></option>
                    <option key='F'>F</option>
                    <option key='M'>M</option>
                </select>
                <i class="angle down icon"></i>
                </div>
            </div>
            <div className='Values'>
              <span>Weight</span><div className='input weight'>
                <input
                type='number' min="0"
                  value={weight}
                  onChange={e => onChangeWeight(e.target.value)}
                />
                <i>lbs</i>
                </div>
            </div>
            <div className='Values'>
              <span>BMI</span>
              <div className='input bmi' classN>
                <input
                type='number'
                  value={bmi} min="0"
                  onChange={e => onChangeBMI(e.target.value)}
                />
                </div>
            </div>
          </div>
        </div>
        <div>
          <input
            className='examSearch'
            placeholder='Search...'
            value={search}
            onChange={e => onSearch(e.target.value)}
          />
          <span className={list}>
            <i class='th icon' onClick={handleClick} />
          </span>
          <span className={grid} onClick={handleClick}>
            <i class='list ul icon' />
          </span>
          <i class="plus icon" onClick={handleAdd}></i>
          
        </div>

        {list.length > 0 ? (
          <ExamGrid exams={searchedExams} />
        ) : (
          <ExamTable exams={searchedExams} />
        )}
        <div className='buttons'>
          <button onClick={handleSave}>Save </button>
          <button onClick={handleCancel}> Cancel </button>
        </div>
      </div>
    );
}
