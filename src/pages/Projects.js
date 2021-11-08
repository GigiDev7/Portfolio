import React from 'react';
import projectsData from '../projectsData';
import ProjectCard from '../components/ProjectCard';
import { Layout } from './Layout Style/Layout';

const Projects = () => {
  return (
    <Layout>
      {projectsData.map((project, index) => {
        return <ProjectCard key={index} data={project} />;
      })}
    </Layout>
  );
};

export default Projects;
