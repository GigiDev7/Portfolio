import React from 'react';
import projectsData from '../projectsData';
import ProjectCard from '../components/ProjectCard';
import { Layout } from './Layout Style/Layout';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Layout>
        {projectsData.map((project, index) => {
          return <ProjectCard key={index} data={project} />;
        })}
      </Layout>
    </motion.div>
  );
};

export default Projects;
