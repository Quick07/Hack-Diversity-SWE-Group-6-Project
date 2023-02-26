import '../AdminPage/AdminPage.css';
import React, { useState, useRef, useCallback } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  NameFieldset,
  CardImage,
  ExamContent,
  Info,
  Title,
} from '../Card/ExamCard.jsx';
import { Container } from 'semantic-ui-react';
import data from '../../data';

const EditExamPage = props => {
  const [card, flipCard] = useState(false);
  const cardRef = useRef({});
  const handleClick = useCallback(i => {
    flipCard(i);
    if (card == i) {
      flipCard(-1);
    }
  });
  return (
    <div>
      <Title>Edit An exam</Title>

      <Container>
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
      </Container>
    </div>
  );
};
export default EditExamPage;
