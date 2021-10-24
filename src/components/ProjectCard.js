import React from 'react';
import { Container, Div1, Div2, Div3, Div4 } from './Styles/ProjectCard.style';

const ProjectCard = ({ data }) => {
  const { title, description, image, stack, code, source } = data;

  return (
    <Container>
      <Div1>
        <img src={image} alt="Project Img" />
        <h2>{title}</h2>
      </Div1>
      <Div2>
        <p>{description}</p>
        <h3>Stack :</h3>
      </Div2>
      <Div3>
        <p>{stack.join(', ')}</p>
      </Div3>
      <Div4>
        <a href={code} target="_blank" rel="noreferrer">
          <button className="codeBtn">Code</button>
        </a>
        <a href={source} target="_blank" rel="noreferrer">
          <button className="srcBtn">Source</button>
        </a>
      </Div4>
    </Container>
  );
};

export default ProjectCard;
