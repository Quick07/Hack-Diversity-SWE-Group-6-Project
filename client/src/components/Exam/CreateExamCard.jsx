import styled from 'styled-components';
import { fleurimondColors } from '../utils/theme.js';
import { Button } from 'semantic-ui-react';

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
export const Input = styled.input`
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
export const MainContainer = styled.div`
  width: 100%;
  height: 800px;
  box-sizing: border-box;
  font-size: 1rem;
  text-align: center;
  font-weight: 500;
  margin: 0;
  padding: 2em 15em;
  line-height: normal;
  background-color: ${fleurimondColors.white};

  @media (min-width: 800px) {
    box-sizing: border-box;
    margin: 0;
  }
  @media (min-width: 200px) {
    width: 100%;
    box-sizing: border-box;
    margin: 0;
  }
`;
export const LoadingDiv = styled.div`
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

export const Header = styled.p`
  font-size: 2rem;
  text-align: center;
  grid-column: span 3;
  margin: 1rem;

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
export const SearchDiv = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  font-size: 1rem;
  text-align: center;
  font-weight: 500;
  padding: 80px;
  line-height: normal;
  background-color: ${fleurimondColors.white};

  @media (min-width: 800px) {
    box-sizing: border-box;
    padding: 80px;
  }
  @media (min-width: 400px) {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 80px;
  }
`;
export const CardSection = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-gap: 1rem;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;

  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
    grid-gap: 1rem;
  }
  @media (max-width: 430px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: center;
    grid-gap: 1rem;
  }
`;

export const CineDiv = styled.div`
  display: block;
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;

  div {
    font-size: 18px;
    margin-right: 5px;
  }

  span {
    font-size: 15px;
    font-weight: 500;
  }

  @media (max-width: 400px) {
    display: none;
  }
`;

export const Right = styled.div``;

export const Hamburger = styled.span`
  width: 32px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`;
export const Bolt = styled.span`
  position: relative;
  margin: 50px;
  width: 30px;
  height: 50px;
  transform-origin: 50% 50%;
  transform: skewX(-30deg) skewY(-30deg) rotate(10deg);
  background-color: yellow;
  padding: 0;
  margin-left: 0;
  margin-right: 0;

  &:before {
    position: absolute;
    border-style: solid;
    border-width: 0 0 10px 5px;
    border-color: transparent transparent ${fleurimondColors.graySmoke}
      transparent;
    top: 0px;
    left: -11px;
    padding: 0;
    margin: 0;
    content: '';
  }

  &:after {
    display: inline-block;
    position: absolute;
    border-style: solid;
    border-width: 0 0 10px 5px;
    border-color: transparent transparent transparent
      ${fleurimondColors.graySmoke};
    bottom: 0px;
    right: 3px;
    content: '';
  }
`;
export const FlippedCardInfoFieldset = styled.span`
  color: ${fleurimondColors.smoke};
  display: block;
  font-size: 15px;
  width: 100%;
  font-family: 'proxima-nova', 'sans-serif';
  font-weight: 500;
  position: relative;
  padding: 0 10px;
  margin: 5px;
`;

export const StyledInput = styled(Input)`
  width: 320px;
  z-index: 200;
  padding: 10px;
  font-size: 20px;
  font-weight: lighter;
  overflow: hidden;
`;

export const InputContainDiv = styled.div`
    margin-top: 100px;
    padding-top: 60px;
    padding-bottom: 60px;
    background-color: green;
    border-radius: 5px;
}
`;
export const StyledButton = styled(Button)`
    font-size: 13px;
    border-radius: 3px;
    border-style: solid;
    border-width: 1px;
    padding: 10px 10px;
    text-decoration: none;
    margin: 1rem auto;
    color: ${fleurimondColors.graySmoke};
    background-color: ${fleurimondColors.white};
    border-color: ${fleurimondColors.graySmoke};
    cursor: pointer;
    display: inline-block;
    letter-spacing: 0.02em;
    line-height: 1;

    :hover, :active, :focus{
        background-color: ${fleurimondColors.graySmoke};
        border-color: ${fleurimondColors.graySmoke};
        color: ${fleurimondColors.white};
        text-decoration: none;
      },
  
@media all and (max-width:30em){
  display:block;
  margin:0.4em auto;
 }

`;
