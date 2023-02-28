import '../AdminPage/AdminPage.css';
import React, { useState, useRef } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  NameFieldset,
  CardImage,
  ExamContent,
  Info,
  Title,
} from './CreateExamCard.jsx';
import { Container } from 'semantic-ui-react';
import data from '../../data';

const CreateExamPage = props => {
  const [card, flipCard] = useState(false);
  const cardRef = useRef({});

  return card ? (
    <>
      <Title>Create An exam</Title>

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
            <Input aria-label='keyFindings'>
              Key Findings: {data.keyFindings}
            </Input>

            <Input aria-label='Brixa'>
              ID: {data.id} : Brixa Score{data.brixScore}
            </Input>
            <CardImage src='https://www.drugs.com/health-guide/images/ddca3f92-4b8e-4672-bb6b-f3594ad4e304.jpg' />
            <Info aria-label='Patient Info'>
              Sex: {data.sex} BMI: {data.bmi} DOB: {data.dob}
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
              <Title aria-label='title'>{data.name}</Title>
            </CardHeader>
            <div
              role='contentInfo'
              aria-pressed='true'
              aria-label='Patient X-ray'
            >
              <CardImage src={data.imageURL} href={`/`} />
            </div>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};
export default CreateExamPage;
