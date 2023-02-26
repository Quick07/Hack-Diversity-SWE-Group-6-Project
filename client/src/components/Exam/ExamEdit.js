import '../AdminPage/AdminPage.css';
import React, { useState, useRef } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  NameFieldset,
  CardImage,
  ExamContent,
  Info,
  Title,
} from './CreateExamCard.jsx';
import { exam1, patient1 } from '../../data';

const EditExamPage = props => {
  const [card, flipCard] = useState(false);
  const cardRef = useRef({});

  return card ? (
    <>
      <Title>Edit An exam</Title>

      <Container>
        <Card>
          <CardBody
            ref={cardRef}
            disabled={cardRef}
            onClick={() => flipCard(false)}
            role='contentInfo'
            aria-pressed='false'
            aria-label='Card with Patient info'
          >
            <ExamContent aria-label='keyFindings'>
              Key Findings: {exam1.keyFindings}
            </ExamContent>

            <ExamContent aria-label='Brixa'>
              ID: {exam1.id} : Brixa Score{exam1.brixScore}
            </ExamContent>
            <CardImage src={props.url} href={props.href} />
            <Info aria-label='Patient Info'>
              Sex: {patient1.sex} BMI: {patient1.bmi} DOB: {patient1.dob}
            </Info>
          </CardBody>
        </Card>
      </Container>
    </>
  ) : (
    <>
      <Title>Create An exam</Title>

      <Container>
        <Card ref={cardRef} onClick={() => flipCard(true)}>
          <CardBody>
            <CardHeader
              role='img'
              aria-label='Description of the Product image'
            >
              <NameFieldset aria-label='title'>{patient1.name}</NameFieldset>
            </CardHeader>
            <div
              role='contentInfo'
              aria-pressed='true'
              aria-label='Patient X-ray'
            >
              <CardImage src={exam1.imageURL} href={`/`} />
            </div>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};
export default EditExamPage;
