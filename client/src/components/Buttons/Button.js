import React from 'react';
import './Button.css';

export default function Buttons(props) {
  return (
    <button
      className='button btn'
      onclick={() => {
        console.log('Click');
      }}
    >
      {props.button}
    </button>
  );
}
