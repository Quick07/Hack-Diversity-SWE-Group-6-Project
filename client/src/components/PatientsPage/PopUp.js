import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import React, { useState } from "react";

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

function PopUp(props) {
  const filterValues = props.filterValues;
    // const save = props.save();
    const [hasFemales, setHasFemales] = useState(filterValues.females);
    const [hasMales, setHasMales] = useState(filterValues.males);
    const [minAge, setMinAge] = useState(filterValues.minAge);
    const [maxAge, setMaxAge] = useState(filterValues.maxAge);
    const [minWeight, setMinWeight] = useState(filterValues.minWeight);
    const [maxWeight, setMaxWeight] = useState(filterValues.maxWeight);
    const [minBMI, setMinBMI] = useState(filterValues.minBMI);
    const [maxBMI, setMaxBMI] = useState(filterValues.maxBMI);
  
  
    const handleClick = () => {
      props.toggle();
    };

    const handleSave = () => {
      props.save(filterValues);
      props.toggle();
    }
  
    return (
      <div className="PopUp">
        <div>
          <i className="x icon" onClick={handleClick} />
          <h1 className="text3">Filter</h1>
          <h2>Sex</h2>
          <input type="checkbox" checked={hasFemales} onChange={setHasFemales} />
          <span className='label'>Female</span>
          <input type="checkbox" checked={hasMales} onChange={setHasMales} />
          <span className='label'>Male</span>
          <h2>Age</h2>
          <FilterSlider
            defaultValue={[minAge, maxAge]}
            valueLabelDisplay="auto"
            onChange={[setMinAge,setMaxAge]}
            min={0}
            max={150}
          />
          <h2>Weight</h2>
          <FilterSlider
            defaultValue={[minWeight,maxWeight]}
            valueLabelDisplay="auto"
            onChange={[setMinWeight,setMaxWeight]}
            min={0}
            max={800}
          />
          <h2>BMI</h2>
          <FilterSlider
            defaultValue={[minBMI,maxBMI]}
            valueLabelDisplay="auto"
            onChange={[setMinBMI,setMaxBMI]}
            min={0}
            max={105}
          />
          <span className='buttons'>
            <button className='Button' onClick={handleSave}><h2>Save</h2></button>
          </span>
        </div>
      </div>
    );
  }
  
  export default PopUp;

