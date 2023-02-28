import React, { useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import {
  Card,
  CardBody,
  CardImage,
  Title,
  ExamContent,
  CardDiv,
} from '../Card/ExamCard.jsx';
import data from '../../data';
import './ExamInfo.css';

//This page displays all the details of an exam
function ExamDetails() {
  const navigate = useNavigate();
  const [card, flipCard] = useState(false);
  const cardRef = useRef({});
  const handleClick = useCallback(i => {
    flipCard(i);
    if (card == i) {
      flipCard(-1);
    }
  });
  return (
    <Container>
      <div>
        <Title>Exam Info</Title>
        <h3 className='ExamInfoPageh3'>View details about an exam here</h3>
      </div>
      <CardDiv>
        {data.map((d, i) => {
          return card === i ? (
            <Card key={i} ref={cardRef} onClick={() => handleClick(i)}>
              <CardBody
                role='contentInfo'
                aria-pressed='false'
                aria-label='Card with Youtube Title, click watch here to view.'
              >
                <main
                  role='contentInfo'
                  aria-pressed='true'
                  aria-label='Card with Youtube Title, click watch here to view.'
                >
                  <ExamContent aria-label='description'>
                    {d.keyFindings}
                  </ExamContent>

                  <ExamContent aria-label='videoOwnerChannelTitle'>
                    {d.name}
                  </ExamContent>

                  <ExamContent aria-label='videoOwnerChannelTitle'>
                    {d.dob}
                  </ExamContent>

                  <ExamContent aria-label='videoOwnerChannelTitle'>
                    {d.sex}
                  </ExamContent>
                </main>
              </CardBody>
            </Card>
          ) : (
            <Card key={i} ref={cardRef} onClick={() => handleClick(i)}>
              <CardBody>
                <Title aria-label='title'>{d.brixScore}</Title>
                <div
                  role='contentInfo'
                  aria-pressed='true'
                  aria-label='Product Card with a Image and a Description of product, Effects and Type Data.'
                >
                  <CardImage src={d.imageURL} />
                </div>
              </CardBody>
            </Card>
          );
        })}
      </CardDiv>
      <div className='buttondiv'></div>
    </Container>
  );
}

export default ExamDetails;
