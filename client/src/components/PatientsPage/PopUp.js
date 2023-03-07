import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import React, { useState } from "react";

const FilterSlider = styled(Slider)({
  color: '#333333',
  height: 8,
  width: "93.5%",
  margin:'0 16px 0 16px',
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
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

function PopUp(props) {
    const { filterValues } = props;
    const {save} = props;
    const [checkedFemale, setCheckedFemale] = useState(true);
    const [checkedMale, setCheckedMale] = useState(true);
    const [ageRange, setAgeRange] = useState([filterValues.minAge, filterValues.maxAge]);
    const [weightRange, setWeightRange] = useState([filterValues.minWeight, filterValues.maxWeight]);
    const [bmiRange, setBmiRange] = useState([filterValues.minBMI, filterValues.maxBMI]);
  
    const handleFemaleChange = () => {
      setCheckedFemale(!checkedFemale);
    };
  
    const handleMaleChange = () => {
      setCheckedMale(!checkedMale);
    };
  
    const handleAgeChange = (event, newValue) => {
      setAgeRange(newValue);
    };
  
    const handleWeightChange = (event, newValue) => {
      setWeightRange(newValue);
    };
  
    const handleBmiChange = (event, newValue) => {
      setBmiRange(newValue);
    };
  
    const handleClick = () => {
      props.toggle();
    };
  
    return (
      <div className="PopUp">
        <div>
          <i className="x icon" onClick={handleClick} />
          <h1 className="text3">Filter</h1>
          <h2>Age</h2>
          <FilterSlider
            defaultValue={ageRange}
            valueLabelDisplay="auto"
            onChange={handleAgeChange}
          />
          <h2>Sex</h2>
          <input type="checkbox" checked={checkedFemale} onChange={handleFemaleChange} />
          <span className='label'>Female</span>
          <input type="checkbox" checked={checkedMale} onChange={handleMaleChange} />
          <span className='label'>Male</span>
          <h2>Weight</h2>
          <FilterSlider
            defaultValue={weightRange}
            valueLabelDisplay="auto"
            onChange={handleWeightChange}
          />
          <h2>BMI</h2>
          <FilterSlider
            defaultValue={bmiRange}
            valueLabelDisplay="auto"
            onChange={handleBmiChange}
          />
          <span className='buttons'>
            <button className='Button'><h2>Save</h2></button>
          </span>
        </div>
      </div>
    );
  }
  
  export default PopUp;