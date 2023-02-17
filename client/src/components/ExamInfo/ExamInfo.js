import React from 'react'
import { exam1, patient1 } from '../../data'
import './ExamInfo.css'

//This page displays all the details of an exam
function ExamDetails() {
  return (
    <div className='ExamInfo'>
        <header className='header' style={{padding: "0%"}}>
            <h1 style={{'padding-top': "2.5%"}}> exam info</h1> 
            View details about an exam here.
        </header>
        <div className='Tables' style={{width: "55%"}}>
            <img className='ExamImage' src= {exam1.imageURL} alt=''/>
     </div>

{/* Tables Containing patient and exam info from example Exams and Patients in Data.js   */} 
    
    <div className='Tables'style={{gap: "2.5vw"}}>
        <div className='InfoTable'>
            <div className='text3'> exam info </div>
            <div className='Text'>
                <div className='text2'>exam id</div> 
                {exam1.id}
                <div className='text2'>brixia score</div>
                {exam1.brixScore}
                <div className='text2'>key findings</div>
                {exam1.keyFindings}
            </div>
            </div>
        <div className='PatientTable'>
            <div className='text3'> patient info </div>
            <div style={{display: "flex"}}>
                <div className='Column'>
                    <div className='text2'>patient id</div> 
                    {patient1.id}
                    <div className='text2'>age</div>
                    {patient1.age}
                    <div className='text2'>sex</div>
                    {patient1.sex}
                </div> 
                <div className='Column'>
                    <div className='text2'>bmi</div>
                    {patient1.bmi}
                    <div className='text2'>weight</div>
                    {patient1.weight} lbs
                    <div className='text2'>zip code</div>
                    {patient1.zip}
                </div>
            </div>
        </div>
    </div>

        </div>
  )
}

export default ExamDetails