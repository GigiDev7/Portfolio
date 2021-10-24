import React from 'react';
import PersonalInfo from '../components/PersonalInfo';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PersonalInfo />
    </motion.div>
  );
};

export default About;
