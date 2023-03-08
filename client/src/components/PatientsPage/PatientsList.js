
import React from 'react';
import { useState, useEffect } from 'react';
import './Patients.css';
import { Link } from 'react-router-dom';
import PatientTable from './PatientTable';
import 'semantic-ui-css/semantic.min.css'; 
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

//Styling the filter slider
const FilterSlider = styled(Slider)({
  color: '#333333',
  height: 6,
  width: "93.5%",
  margin:'0 16px 0 16px',
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
export default function PatientsList(){
  const [allPatients, setAllPatients] = useState([]); // Array with all patients in db
  const [filterSeen, setFilterSeen] = useState(false); // is the popup visible?
  const [sortSeen, setSortSeen] = useState(false); // is the popup visible?
  const [hasFemales, setHasFemales] = useState(true); // include females?
  const [hasMales, setHasMales] = useState(true); // include males?
  const [ageRange, setAgeRange] = useState([0,150]);
  const [weightRange, setWeightRange] = useState([0,800]);
  const [BMIRange, setBMIRange] = useState([0,105]);
  const [filteredPatients, setFilteredPatients] = useState([]); // array of patients filtered with criteria

  useEffect(() => {
    const filterPatients = () => {
      if (!allPatients) {
        return [];
      }
      const filteredList = allPatients.filter((patient) => {
        return (
          patient.AGE >= ageRange[0] &&
          patient.AGE <= ageRange[1] &&
          ((patient.SEX === "F") && hasFemales ||
          (patient.SEX === "M" && hasMales)) &&
          patient.LATEST_WEIGHT >= weightRange[0] &&
          patient.LATEST_WEIGHT <= weightRange[1] &&
          patient.LATEST_BMI >= BMIRange[0] &&
          patient.LATEST_BMI <= BMIRange[1]
        );
      });
      return filteredList;
    };
  
    if (allPatients.length === 0) {
      fetch("http://localhost:9000/patients")
        .then((response) => response.json())
        .then((data) => setAllPatients(data))
        .catch((error) => {
          console.log(error);
          setError("Failed to fetch patient data.");
        });
    }
  
    const targetPatients = filterPatients();
    setFilteredPatients(targetPatients);
  }, [allPatients, ageRange, hasFemales, hasMales, weightRange, BMIRange]);
  
  const toggleFilter = () => {
    setFilterSeen(!filterSeen);
  };

  const toggleSort = () => {
    setSortSeen(!sortSeen);
  };

    return <div className='PatientsPage'>
    <div>
    <h1><Link to="/Exams/ViewList"><span className='inactive'>exams </span></Link>| patients </h1>
    View all patients here.
    </div>
    <div>
    <input
          className='examSearch'
          placeholder='Search...'
        />
        <i className="sort icon" />
        <i className="filter icon" onClick={toggleFilter}/>
    </div>
    {console.log({filteredPatients})}
    {console.log({allPatients})}
    {console.log({hasFemales},{hasMales},{ageRange},{weightRange},{BMIRange})}
    <PatientTable patients={filteredPatients} />
    {filterSeen ? 
    <div className="PopUp">
          <div>
            <i className="x icon" onClick={togglePop} />
            <h1 className="text3">Filter</h1>
            <h2>Sex</h2>
            <input type="checkbox" checked={hasFemales} onChange={(e) => setHasFemales(e.target.checked)} />
            <span className='label'>Female</span>
            <input type="checkbox" checked={hasMales} onChange={(e) => setHasMales(e.target.checked)} />
            <span className='label'>Male</span>
            <h2>Age</h2>
            <FilterSlider
              defaultValue={ageRange}
              valueLabelDisplay="auto"
              onChange={(e, newValue) => setAgeRange(newValue)}
              min={0}
              max={150}
            />
            <h2>Weight</h2>
            <FilterSlider
              defaultValue={weightRange}
              valueLabelDisplay="auto"
              onChange={(e, newValue) => setWeightRange(newValue)}
              min={0}
              max={800}
            />
            <h2>BMI</h2>
            <FilterSlider
              defaultValue={BMIRange}
              valueLabelDisplay="auto"
              onChange={(e, newValue) => setBMIRange(newValue)}
              min={0}
              max={105}
            />
          <span className='buttons'>
            <button className='Button' onClick={toggleFilter}><h2>Save</h2></button>
          </span>
          </div>
        </div>
         : null}
  </div>;
}