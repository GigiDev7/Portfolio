import React from 'react';
import { Container, Wrapper } from './Styles/Tech.style';
import { IoLogoNodejs, IoLanguage } from 'react-icons/io5';
import { FaNode } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';

const Tech = () => {
  return (
    <Container>
      <Wrapper>
        <IoLogoNodejs style={{ fontSize: '1.3rem', color: '#d4c8c8' }} />
        <h2>Front-End</h2>
        <ul>
          <li>JavaScript,ES6</li>
          <li>ECMAscript</li>
          <li>React</li>
          <li>Styled Components</li>
          <li>Material UI</li>
          <li>CSS3</li>
          <li>HTML5</li>
          <li>jQuery</li>
          <li>SASS</li>
        </ul>
      </Wrapper>
      <Wrapper>
        <FaNode style={{ fontSize: '1.3rem', color: '#d4c8c8' }} />
        <h2>Back-End</h2>
        <p>Currently learning Node with Express and Mongo(MERN STACK)</p>
      </Wrapper>
      <Wrapper>
        <SiRedux style={{ fontSize: '1.3rem', color: '#d4c8c8' }} />
        <h2>Other Techs</h2>
        <ul>
          <li>Redux</li>
          <li>Redux Toolkit</li>
          <li>Git,Github</li>
          <li>JSON</li>
          <li>REST Api</li>
          <li>npm</li>
          <li>React Router</li>
        </ul>
      </Wrapper>
      <Wrapper>
        <IoLanguage style={{ fontSize: '1.3rem', color: '#d4c8c8' }} />
        <h2>Languages</h2>
        <ul>
          <li>Georgian - Native</li>
          <li>English - Advanced</li>
          <li>Russian - Advanced</li>
        </ul>
      </Wrapper>
    </Container>
  );
};

export default Tech;
