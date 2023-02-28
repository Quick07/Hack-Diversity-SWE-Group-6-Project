import React, { useRef } from 'react';
import { List, Image, Container } from 'semantic-ui-react';
import data from '../../data';

const PatientTable = () => {
  const cardRef = useRef({});
  <Container textAlign='center'>
    <List>
      {data.map((dataDetail, i) => {
        <List.Item key={i}>
          <Image avatar src={dataDetail.imageURL} />
          <List.Content>
            <List.Header as='a'>{dataDetail.name}</List.Header>
            <List.Description>
              <a>
                <b>{dataDetail.dob}</b>
              </a>{' '}
            </List.Description>
            <List.Description>
              <a>
                <b>{dataDetail.brixScore}</b>
              </a>{' '}
            </List.Description>
            <List.Description>
              <a>
                <b>{dataDetail.sex}</b>
              </a>{' '}
            </List.Description>
            <List.Description>
              <a>
                <b>{dataDetail.keyFindings}</b>
              </a>{' '}
            </List.Description>
          </List.Content>
        </List.Item>;
      })}
    </List>
  </Container>;
};

export default PatientTable;
