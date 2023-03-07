
import React from 'react';
import { useState, useEffect } from 'react';
import './Patients.css';
import { Link } from 'react-router-dom';
import PatientTable from './PatientTable';
import 'semantic-ui-css/semantic.min.css' 
import PopUp from './PopUp';

// This page allows access to view all exam and patient information
export default function PatientsList(){
  const [allPatients, setAllPatients] = useState([]);
  const [seen, setSeen] = useState(false);
  const [filterValues, setFilterValues] = useState({
    minAge:0,
    maxAge:150,
    females:true,
    males:true,
    minWeight:0,
    maxWeight:1000,
    minBMI:0,
    maxBMI:105
  });
  const [filteredPatients, setFilteredPatients] = useState([]);


  useEffect(() => {
    if (allPatients.length === 0) {
    fetch('http://localhost:9000/patients')
      .then(response => response.json())
      .then(data => setAllPatients(data))
      .catch(error => {
        console.log(error);
        setError('Failed to fetch patient data.');
      });
    }
    }, [allPatients, filterValues]);

useEffect(() => {
    const targetPatients = filterPatients(filterValues);
    setFilteredPatients(targetPatients);
  }, [allPatients, filterValues]);

  const handleFilterChange = (filterValues) => {
    setFilterValues(filterValues);
  }
  
  const filterPatients = () => {
    if (!allPatients) {
    return [];
  }
  const filteredList  = allPatients.filter(patient =>{
    return (
        patient.AGE >= filterValues.minAge &&
        patient.AGE <= filterValues.maxAge
        && ((patient.SEX ==="F") === filterValues.females  || 
        patient.SEX === "M" && filterValues.males) &&
        patient.LATEST_WEIGHT >= filterValues.minWeight &&
        patient.LATEST_WEIGHT <= filterValues.maxWeight &&
        patient.LATEST_BMI >= filterValues.minBMI &&
        patient.LATEST_BMI <= filterValues.maxBMI)
      });
    return filteredList;
  }

  
  const togglePop = () => {
    setSeen(!seen);
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
        <i className="filter icon" onClick={togglePop}/>
    </div>
    {console.log({filteredPatients})}
    {console.log({allPatients})}
    {console.log({filterValues})}
    <PatientTable patients={filteredPatients} />
    {seen ? <PopUp toggle={togglePop} filterValues={filterValues} save={handleFilterChange}/> : null}
  </div>;
}