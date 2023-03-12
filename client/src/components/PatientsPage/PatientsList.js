import React from 'react';
import { useState, useEffect, useRef } from 'react';
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
export default function PatientsList() {
  const [allPatients, setAllPatients] = useState([]); // Array with all patients in db
  const [filterSeen, setFilterSeen] = useState(false); // is the popup visible?
  const [sortSeen, setSortSeen] = useState(false); // is the popup visible?
  const [hasFemales, setHasFemales] = useState(true); // include females?
  const [hasMales, setHasMales] = useState(true); // include males?
  const [ageRange, setAgeRange] = useState([0, 150]);
  const [weightRange, setWeightRange] = useState([0, 800]);
  const [BMIRange, setBMIRange] = useState([0, 105]);
  const [filteredPatients, setFilteredPatients] = useState([]); // array of patients filtered with criteria
  const [searchedPatients, setSearchedPatients] = useState([]); // array of patients filtered with criteria
  const [sortValue, setSortValue] = useState(); // how to sort array
  const [ageStyle, setAgeStyle] = useState(); // array of patients filtered with criteria
  const [weightStyle, setWeightStyle] = useState(); // array of patients filtered with criteria
  const [BMIStyle, setBMIStyle] = useState(); // array of patients filtered with criteria
  const [search, onSearch] = useState(''); // array of patients filtered with criteria
  const filterRef = useRef({
    females: hasFemales,
    males: hasMales,
    age: ageRange,
    weight: weightRange,
    BMI: BMIRange,
  });
  const sortRef = useRef(sortValue);

  useEffect(() => {
    fetch('https://project-x-vuhz.onrender.com/patients')
      .then(response => response.json())
      .then(data => {
        setAllPatients(data);
        setFilteredPatients(data);
        setSearchedPatients(data);
      })
      .catch(error => {
        console.log(error);
        console.log('Failed to fetch patient data.');
      });
  }, []);

  useEffect(() => {
    handleStyleChange;
    const regex = new RegExp(search, 'i');
    if (search.length > 0) {
      setSearchedPatients(
        filteredPatients.filter(p => regex.test(p.PATIENT_ID))
      );
    } else {
      setSearchedPatients(filteredPatients);
    }
  }, [filteredPatients, search]);

  useEffect(() => {
    handleStyleChange();
  }, [sortValue]);

  const toggleFilter = () => {
    setFilterSeen(!filterSeen);
  };

  const toggleSort = () => {
    setSortSeen(!sortSeen);
  };

  const sortArray = (pArray, sortBy) => {
    let sortedArray = pArray;
    switch (sortBy) {
      case 'A+':
        sortedArray = pArray.sort((a, b) => a.AGE - b.AGE);
        break;
      case 'A-':
        sortedArray = pArray.sort((a, b) => b.AGE - a.AGE);
        break;
      case 'W+':
        sortedArray = pArray.sort((a, b) => a.LATEST_WEIGHT - b.LATEST_WEIGHT);
        break;
      case 'W-':
        sortedArray = pArray.sort((a, b) => b.LATEST_WEIGHT - a.LATEST_WEIGHT);
        break;
      case 'B+':
        sortedArray = pArray.sort((a, b) => a.LATEST_BMI - b.LATEST_BMI);
        break;
      case 'B-':
        sortedArray = pArray.sort((a, b) => b.LATEST_BMI - a.LATEST_BMI);
        break;
    }
    return sortedArray;
  };

  const filterPatients = () => {
    if (!allPatients) {
      return [];
    }
    const filteredList = allPatients.filter(patient => {
      return (
        patient.AGE >= ageRange[0] &&
        patient.AGE <= ageRange[1] &&
        ((patient.SEX === 'F' && hasFemales) ||
          (patient.SEX === 'M' && hasMales)) &&
        patient.LATEST_WEIGHT >= weightRange[0] &&
        patient.LATEST_WEIGHT <= weightRange[1] &&
        patient.LATEST_BMI >= BMIRange[0] &&
        patient.LATEST_BMI <= BMIRange[1]
      );
    });
    return filteredList;
  };

  const handleStyleChange = () => {
    switch (sortValue) {
      case 'A+':
        setAgeStyle('checked');
        setWeightStyle();
        setBMIStyle();
        break;
      case 'A-':
        setAgeStyle('checked');
        setWeightStyle();
        setBMIStyle();
        break;
      case 'W+':
        setAgeStyle();
        setWeightStyle('checked');
        setBMIStyle();
        break;
      case 'W-':
        setAgeStyle();
        setWeightStyle('checked');
        setBMIStyle();
        break;
      case 'B+':
        setAgeStyle();
        setWeightStyle();
        setBMIStyle('checked');
        break;
      case 'B-':
        setAgeStyle();
        setWeightStyle();
        setBMIStyle('checked');
        break;
      default:
        setAgeStyle();
        setWeightStyle();
        setBMIStyle();
        break;
    }
  };

  const handleAgeSort = () => {
    if (sortValue === 'A+') {
      setSortValue('A-');
    } else if (sortValue === 'A-') {
      setSortValue();
    } else {
      setSortValue('A+');
    }
  };

  const handleWeightSort = () => {
    if (sortValue === 'W+') {
      setSortValue('W-');
    } else if (sortValue === 'W-') {
      setSortValue();
    } else {
      setSortValue('W+');
    }
  };

  const handleBMISort = () => {
    if (sortValue === 'B+') {
      setSortValue('B-');
    } else if (sortValue === 'B-') {
      setSortValue();
    } else {
      setSortValue('B+');
    }
  };

  const handleSave = () => {
    var patients = filterPatients(allPatients);
    patients = sortArray(filterPatients(allPatients), sortValue);
    setFilteredPatients(patients);

    filterRef.current = {
      females: hasFemales,
      males: hasMales,
      age: ageRange,
      weight: weightRange,
      BMI: BMIRange,
    };
    sortRef.current = sortValue;

    if (filterSeen) {
      toggleFilter();
    }
    if (sortSeen) {
      toggleSort();
    }
  };

  const handleCancel = () => {
    setHasFemales(filterRef.current.females);
    setHasMales(filterRef.current.males);
    setAgeRange(filterRef.current.age);
    setWeightRange(filterRef.current.weight);
    setBMIRange(filterRef.current.BMI);
    setSortValue(sortRef.current);
    if (filterSeen) {
      toggleFilter();
    }
    if (sortSeen) {
      toggleSort();
    }
  };

  const ageIcon = () => {
    switch (sortValue) {
      case 'A+':
        return <i class='arrow up icon'></i>;
      case 'A-':
        return <i class='arrow down icon'></i>;
      default:
        return null;
    }
  };

  const weightIcon = () => {
    switch (sortValue) {
      case 'W+':
        return <i class='arrow up icon'></i>;
      case 'W-':
        return <i class='arrow down icon'></i>;
      default:
        return null;
    }
  };

  const bmiIcon = () => {
    switch (sortValue) {
      case 'B+':
        return <i class='arrow up icon'></i>;
      case 'B-':
        return <i class='arrow down icon'></i>;
      default:
        return null;
    }
  };

  return (
    <div className='PatientsPage'>
      <div>
        <h1>
          <Link to='/Exams/ViewList'>
            <span className='inactive'>Exams </span>
          </Link>
          | Patients{' '}
        </h1>
        View all patients here.
      </div>
      <div>
        <input
          className='examSearch'
          placeholder='Search...'
          value={search}
          onChange={e => onSearch(e.target.value)}
        />
        <i className='sort icon' onClick={toggleSort} />
        <i className='filter icon' onClick={toggleFilter} />
      </div>

      <PatientTable patients={searchedPatients} />
      {filterSeen ? (
        <div className='PopUp'>
          <div>
            <i className='x icon' onClick={handleCancel} />
            <h1 className='text3'>Filter</h1>
            <h2>Sex</h2>
            <input
              type='checkbox'
              checked={hasFemales}
              onChange={e => setHasFemales(e.target.checked)}
            />
            <span className='label'>Female</span>
            <input
              type='checkbox'
              checked={hasMales}
              onChange={e => setHasMales(e.target.checked)}
            />
            <span className='label'>Male</span>
            <h2>Age</h2>
            <FilterSlider
              defaultValue={ageRange}
              valueLabelDisplay='auto'
              onChange={(e, newValue) => setAgeRange(newValue)}
              min={0}
              max={150}
            />
            <h2>Weight</h2>
            <FilterSlider
              defaultValue={weightRange}
              valueLabelDisplay='auto'
              onChange={(e, newValue) => setWeightRange(newValue)}
              min={0}
              max={800}
            />
            <h2>BMI</h2>
            <FilterSlider
              defaultValue={BMIRange}
              valueLabelDisplay='auto'
              onChange={(e, newValue) => setBMIRange(newValue)}
              min={0}
              max={105}
            />
            <span className='buttons'>
              <button className='Button' onClick={handleSave}>
                <h2>Save</h2>
              </button>
            </span>
          </div>
        </div>
      ) : null}
      {sortSeen ? (
        <div className='PopUp'>
          <div className='Sort'>
            <i className='x icon' onClick={handleCancel} />
            <h1 className='text3'>Sort</h1>
            <div className={ageStyle} onClick={handleAgeSort}>
              <p>Age {ageIcon()}</p>
            </div>
            <div className={weightStyle} onClick={handleWeightSort}>
              <p>Weight{weightIcon()}</p>
            </div>
            <div className={BMIStyle} onClick={handleBMISort}>
              <p>BMI{bmiIcon()}</p>
            </div>
            <span className='buttons'>
              <button className='Button' onClick={handleSave}>
                <h2>Save</h2>
              </button>
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
}
