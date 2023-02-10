import React, { Component } from 'react';
import './CreateExamCard.css';

class Title extends Component {
  render() {
    return (
      <div>
        <header className='Title'></header>
        <h1>Exams | Patients</h1>
        <button className='Button-1'>+ Create New Exam</button>
        <br></br>
        <input
          className='Searchbar'
          type='text'
          placeholder='Search...'
        ></input>
      </div>
    );
  }
}

export default Title;
