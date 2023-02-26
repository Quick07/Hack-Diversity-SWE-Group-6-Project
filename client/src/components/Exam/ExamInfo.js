import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { Card, CardBody, CardImage, Title } from './CreateExamCard.jsx';
import { exam1, patient1 } from '../../data';
import './ExamInfo.css';

//This page displays all the details of an exam
function ExamDetails() {
  const navigate = useNavigate();
  return (
    <Container>
      <div>
        <Title>Exam Info</Title>
        <h3 className='ExamInfoPageh3'>View details about an exam here</h3>
      </div>
      <div className='Info'>
        <div>
          <Card>
            <CardBody
              role='contentInfo'
              aria-pressed='false'
              aria-label='Card with Patient info'
            >
              <CardImage src={exam1.imageURL} />
            </CardBody>
          </Card>
        </div>

        {/* Tables Containing patient and exam info from example Exams and Patients in Data.js   */}

        <div className='Tables'>
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
            <div>
              <div className='Column'>
                <div className='text2'>patient id</div>
                {patient1.id}
                <div className='text2'>age</div>
                {patient1.id}
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
      <div className='buttondiv'></div>
    </Container>
  );
}

export default ExamDetails;
