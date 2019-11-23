import React from 'react';
import styled from 'styled-components';

import SVG from './common/SVG';

const SkillsStyles = styled.div`margin: auto;`;

const SkillzContainerStyles = styled.div`
  display: grid;
  width: fit-content;
  grid-template-columns: repeat(${props => props.skillCount}, 1fr);
  grid-column-gap: 1em;
`;

const Skill = styled.div`
  padding: 1em;
  background-color: rgba(255, 255, 255, 0.85);
  border-radius: 10px;
  color: black;
  transition: box-shadow 3s cubic-bezier(0, 1, 0, 1);
  transition: all 1s cubic-bezier(0, 1, 0, 1);

  div {
    text-align: center;
  }

  svg {
    margin: auto;
  }

  &:hover {
    color: white;
    cursor: pointer;
    background-image: linear-gradient(
      -15deg,
      ${props => props.theme.color.main},
      ${props => props.theme.color.electricPink}
    );
    box-shadow: 0px 0px 15px 3px ${props => props.theme.color.main};
    svg {
      fill: white;
      &.react-icon {
        animation-play-state: running;
      }
      &.js-icon {
        animation: wobble 0.6s linear infinite;
        animation-play-state: running;
      }
    }
  }

  .react-icon {
    animation: weeeeeee 4s linear infinite;
    animation-play-state: paused;
  }

  @keyframes weeeeeee {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes wobble {
    25% {
      transform: translate(0, -15%);
    }
    50% {
      transform: translate(0, -15%) rotate(7.5deg);
    }
    75% {
      transform: translate(0, -15%) rotate(-7.5deg);
    }
  }
`;

const SkillzGrid = () => {
  const svgProps = {
    height: 100,
    width: 100,
    fill: `rgba(25,25,25,1)`,
  };

  const skillz = {
    frontend: [
      {
        name: 'React',
        iconProps: { name: `react-icon`, viewBox: `0 0 50 50`, ...svgProps },
      },
      {
        name: 'JavaScript',
        iconProps: { name: `js-icon`, viewBox: `0 0 50 50`, ...svgProps },
      },
      {
        name: 'HTML',
        iconProps: { name: `html-icon`, viewBox: `0 0 32 32`, ...svgProps },
      },
      {
        name: 'CSS',
        iconProps: { name: `css-icon`, viewBox: `0 0 50 50`, ...svgProps },
      },
    ],
    backend: [
      {
        name: 'Rails',
        iconProps: { name: `rails-icon`, viewBox: `0 0 122.498 157.564`, ...svgProps },
      },
      {
        name: 'NodeJS',
        iconProps: { name: `nodejs-icon`, viewBox: `0 0 32 32`, ...svgProps },
      },
      {
        name: 'SQL',
        iconProps: { name: `database-icon`, viewBox: `0 0 55 55`, ...svgProps },
      },
    ],
  };

  return (
    <SkillsStyles>
      <h1>Skills</h1>
      <h2>Frontend</h2>
      <SkillzContainerStyles skillCount={skillz.frontend.length}>
        {skillz.frontend.map(skill => (
          <Skill key={skill.name}>
            <SVG classNames={skill.iconProps.name} {...skill.iconProps} />
            <div>{skill.name}</div>
          </Skill>
        ))}
      </SkillzContainerStyles>
      <h2>Backend</h2>
      <SkillzContainerStyles skillCount={skillz.backend.length}>
        {skillz.backend.map(skill => (
          <Skill key={skill.name}>
            <SVG classNames={skill.iconProps.name} {...skill.iconProps} />
            <div>{skill.name}</div>
          </Skill>
        ))}
      </SkillzContainerStyles>
    </SkillsStyles>
  );
};

export default SkillzGrid;
