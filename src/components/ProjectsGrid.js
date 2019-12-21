import React from 'react';
import { useStateValue } from './state';
import styled from 'styled-components';

import { mediaQueryBreakpoints } from './config/constants';

const ProjectGridContainerStyles = styled.div`
  text-align: center;
  margin: 3em auto;
`;

const ProjectGridStyles = styled.div`
  display: grid;
  grid-column-gap: 1em;
  grid-row-gap: 1em;
  grid-template-columns: 1;

  @media (min-width: ${mediaQueryBreakpoints.med.px}) {
    grid-template-columns: repeat(2, 50%);
  }
`;

const Project = styled.div`
  padding: 1em;
  position: relative;
  border: 0.2rem solid ${props => props.theme.color.purple.main};
  border-radius: 1rem;
  cursor: pointer;

  .card-title {
    margin: 0;
    padding: 1rem 0;
  }

  .card-body {
    padding: 1rem;
    font: 400 2.6rem, 'Muli', sans-serif;
  }
`;

const projects = [
  {
    name: `SkyPi`,
    description: `A full-stack project to utilize a network of Raspberry Pis to collect weather data and post that data to a central database.`,
    link: `https://www.github.com/mblaul/skypi`,
    tags: ['react', 'javascript', 'html', 'css', 'nodejs', 'mongodb']
  },
  {
    name: `aposTrophy`,
    description: `A full-stack project to help students prepare for the SAT/ACT by taking practice quizzes.`,
    link: `https://www.github.com/mblaul/aposTrophy`,
    tags: ['html', 'css', 'sql']
  },
  {
    name: `Portfolio Website`,
    description: `This very website!`,
    link: `https://www.github.com/mblaul/portfolio-website`,
    tags: ['react', 'javascript', 'html', 'css']
  }
];

const ProjectsGrid = () => {
  const [, dispatch] = useStateValue();

  const selectTags = selectedTags => {
    dispatch({
      type: 'setSelectedTags',
      selectedTags
    });
  };

  return (
    <ProjectGridContainerStyles>
      <h3>Projects</h3>
      <ProjectGridStyles>
        {projects.map(project => (
          <Project
            onMouseEnter={() => selectTags(project.tags)}
            onMouseLeave={() => selectTags([])}
          >
            <h4 className="card-title">{project.name}</h4>
            <p className="card-body">{project.description}</p>
          </Project>
        ))}
      </ProjectGridStyles>
    </ProjectGridContainerStyles>
  );
};

export default ProjectsGrid;
