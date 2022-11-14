import React from 'react';
import { Container, Wrapper } from './Styles/Tech.style';
import { IoLogoNodejs, IoLanguage } from 'react-icons/io5';
import { FaNode } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';

import { motion } from 'framer-motion';

const Tech = () => {
  return (
    <Container>
      <Wrapper>
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          animate={{ x: [-200, 0], opacity: 1 }}
        >
          <IoLogoNodejs style={{ fontSize: '1.3rem', color: '#d4c8c8' }} />
          <h2>Front-End</h2>
          <ul>
            <li>JavaScript,ES6,EC</li>
            <li>React Js</li>
            <li>Next Js</li>
            <li>React Native</li>
            <li>Angular</li>
            <li>Styled Components</li>
            <li>Tailwind CSS</li>
            <li>Angular Material</li>
            <li>CSS3</li>
            <li>HTML5</li>
          </ul>
        </motion.div>
      </Wrapper>
      <Wrapper>
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          animate={{ x: [-200, 0], opacity: 1 }}
        >
          <FaNode style={{ fontSize: '1.3rem', color: '#d4c8c8' }} />
          <h2>Back-End</h2>
          <ul>
            <li>Node Js</li>
            <li>Express Js</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>REST Api</li>
            <li>MVC Arcitecture</li>
            <li>SSR</li>
          </ul>
        </motion.div>
      </Wrapper>
      <Wrapper>
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          animate={{ x: [200, 0], opacity: 1 }}
        >
          <SiRedux style={{ fontSize: '1.3rem', color: '#d4c8c8' }} />
          <h2>Other Techs</h2>
          <ul>
            <li>Redux</li>
            <li>Redux Toolkit</li>
            <li>Git,Github</li>
            <li>JSON</li>
            <li>REST Api</li>
            <li>npm</li>
            <li>Framer Motion</li>
          </ul>
        </motion.div>
      </Wrapper>
      <Wrapper>
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          animate={{ x: [200, 0], opacity: 1 }}
        >
          <IoLanguage style={{ fontSize: '1.3rem', color: '#d4c8c8' }} />
          <h2>Languages</h2>
          <ul>
            <li>Georgian - Native</li>
            <li>English - Advanced</li>
            <li>Russian - Advanced</li>
          </ul>
        </motion.div>
      </Wrapper>
    </Container>
  );
};

export default Tech;
