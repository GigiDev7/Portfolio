import React from 'react';
import Tech from '../components/Tech';
import { motion } from 'framer-motion';

const Technologies = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Tech />
    </motion.div>
  );
};

export default Technologies;
