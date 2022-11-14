import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Text, Paragraph } from './Styles/Main.style';
import { motion } from 'framer-motion';
const Main = () => {
  return (
    <Container>
      <Text>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          Welcome To <br /> My Personal Portfolio
        </motion.div>
      </Text>
      <Paragraph>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          Hello! I'm Gigi, Full Stack Web Developer(React,Next,Angular,Node,React Native).I'm ambitious,
          hardworking,detail-oriented, motivated and creative individual.I am
          open-minded and supportive towards other people. Love solving logical
          problems. I'm fast learner, i have willingness to improve constantly.
          You can see my projects {<Link to="/projects">here</Link>}, and for
          more you can visit my Github.
        </motion.div>
      </Paragraph>
    </Container>
  );
};

export default Main;
