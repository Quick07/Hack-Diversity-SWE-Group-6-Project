import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
min-height:80vh;
box-sizing: border-box;
font-size: 1rem;
text-align: center;
font-weight: 500;
margin: 0 20rem;
line-height: normal;
background-color: white;
padding: 0;

@media (min-width: 800px) {
  box-sizing: border-box;
  margin: 0;
  padding: 64px 250px;
}
@media (min-width: 400px) {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  margin: 0;
}
`;

export const CardDiv = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-gap: 1rem;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(300px, 1fr));

  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-template-rows: repeat(auto-fill, minmax(300px, 1fr));
    justify-items: center;
    align-items: center;
    grid-gap: 1rem;
  }
  @media (max-width: 464px) {
    display: grid;
    grid-template-columns: 1fr !important;
    grid-template-rows: 1fr 1fr 1fr !important;
    justify-items: center;
    align-items: center;
    grid-gap: 1rem;
  }
`;

export const ExamContent = styled.p`
  font-size: 1rem;
  text-decoration: none;
  padding: 0 32px;
  color: black;
  margin: 4.38em 0;
  border: 0;
`;
export const Info = styled.h3`
  font-size: 1rem;
  text-decoration: none;
  color: black;
  position: relative;
  padding: 0 32px;
  margin-top: 20px;
  border: 0;

  :hover {
    color: baby blue;
  }
`;



export const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  grid-column: span 3;
  margin: 3rem;

  @media (max-width: 800px) {
    font-size: 2rem;
    text-align: center;
    grid-column: span 2;
  }
  @media (max-width: 320px) {
    font-size: 2rem;
    text-align: center;
    grid-column: span 2;
    margin: 1rem 0;
  }
`;

export const Card = styled.article`
border: 1px solid black;
border-radius: 10px;
display: grid;
min-width: 328px;
min-height: 222px;
padding: 1rem 0;
background: ${props => (props.selected ? '#E8F1FF' : '#FFFFFF')};
border: ${props =>
  props.selected ? '1.5px solid #2375A4' : '1px solid #d5dde3'}
z-index= -9999999999;


@media(max-width: 800px){
  min-width: 200px;
max-width: 400px;
  min-height: 300px;
  padding: 1rem 0;
}
@media(max-width: 430px){
  min-width: 200px;
  max-width: 400px;
  min-height: 300px;
  min-height: 300px;
  padding: 1rem 0;
}
}
`;

export const CardImage = styled.img`
object-fit: contain;
width: 253px;
height: 200px;
margin: 3rem;

`;

export const CardHeader = styled.header`
  cursor: context-menu;
  border-bottom: 1px solid #d5dde3;
`;

export const CardHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  cursor: context-menu;
  text-align: center;
`;

export const CardBody = styled.figure`
  display: grid;
  grid-template-areas: 320px, auto;
`;


export const HeaderTitle = styled.h3`
  font-size: 1rem;
  text-decoration: none;
  padding: 0 32px;
  color: black;
  margin-top: 20px;
  border: 0;
`;
export const Description = styled.h3`
  font-size: 1rem;
  color: #01002e;
  position: relative;
  padding: 0 32px;
  margin-top: 20px;
  border: 0;
`;
