import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './ViewPatient.css';
import { Link } from 'react-router-dom';
import ExamTable from './ExamTable';
import ExamGrid from './ExamGrid';
import 'semantic-ui-css/semantic.min.css';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import { useParams } from 'react-router-dom';

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
export default function ViewPatient() {
  const { _id } = useParams();
  const [patient, setPatient] = useState();
  const [allPatients, setAllPatients] = useState([]); // Array with all patients in db
  const [allExams, setAllExams] = useState([]); // Array with all exams for this patient
  const [searchedExams, setSearchedExams] = useState([]); // exams that contain the searched value in the exam id or patient id
  const [search, onSearch] = useState(''); // the search value
  const [list, setList] = useState(''); // the value
  const [grid, setGrid] = useState('current'); // the search value

  useEffect(() => {
    fetch('https://projectx-b17q.onrender.com/patients')
      .then(response => response.json())
      .then(data => {
        setAllPatients(data);
        console.log(data);
        const p = data.find(p => p._id === _id);
        setPatient(p);
      })
      .catch(error => {
        console.log(error);
        console.log('Failed to fetch patient data.');
      });
  }, [_id]);

  useEffect(() => {
    fetch('https://projectx-b17q.onrender.com/exams')
      .then(response => response.json())
      .then(data => {
        const exams = data.filter(e => e.PATIENT_ID === patient.PATIENT_ID);
        setAllExams(exams);
        setSearchedExams(exams);
      })
      .catch(error => {
        console.log('Failed to fetch exams data.');
      });
  }, [patient]);

  useEffect(() => {
    const regex = new RegExp(search, 'i');
    if (search.length > 0) {
      setSearchedExams(allExams.filter(e => regex.test(e.exam_Id)));
    } else {
      setSearchedExams(allExams);
    }
  }, [search]);

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
      <div className='ViewPatient'>
        <div>
          <h1 style={{ transform: 'translateX(-20px)' }}>
            <Link to='/Exams/ViewPatients'>
              <span className='inactive'>
                <i
                  class='angle left icon'
                  style={{ float: 'left', fontSize: '50px' }}
                ></i>
              </span>
            </Link>
            Patient Info
          </h1>
          <div className='ValuesContainer'>
            <div className='Values'>
              <span>Patient ID</span>
              {patient.PATIENT_ID}
            </div>
            <div className='Values'>
              <span>Age</span>
              {patient.AGE}
            </div>
            <div className='Values'>
              <span>Sex</span>
              {patient.SEX}
            </div>
            <div className='Values'>
              <span>Weight</span>
              {patient.LATEST_WEIGHT}
            </div>
            <div className='Values'>
              <span>BMI</span>
              {patient.LATEST_BMI}
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
        </div>

        {list.length > 0 ? (
          <ExamGrid exams={searchedExams} />
        ) : (
          <ExamTable exams={searchedExams} />
        )}
      </div>
    );
}
