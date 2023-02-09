import React, { Component } from 'react';
import Title from '../Title/Title';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div className='Main-Container'>
        <Title />
        <div className='Main-border'>
          <header className='Header-title'>
            <h3>Date</h3>
            <h3>Patient ID</h3>
            <h3>Exam ID</h3>
            <h3>Brixia Score</h3>
            <h3>Key Findings</h3>
          </header>
          <main className='Main-info'>
            <h3>12/31/2000</h3>
            <h3>name1234</h3>
            <h3>exam1890</h3>
            <h3>1,2,3,4</h3>
            <h3>Lorem ipsum dolor sit amet.</h3>
          </main>
        </div>
      </div>
    );
  }
}

export default Main;
