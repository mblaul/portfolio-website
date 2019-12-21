import React from 'react';
import styled from 'styled-components';

import { mediaQueryBreakpoints } from './config/constants';
import { getArrayOfRandomLength, getRandomInt } from './utils/genericHelpers';

import { useStateValue } from './state'

import SVG from './common/SVG';

const SkillsStyles = styled.div`
  text-align: center;
  margin: 1rem auto;
`;

const SkillzContainerStyles = styled.div`
  display: grid;
  width: fit-content;
  grid-row-gap: 1em;
  grid-column-gap: 1em;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: ${mediaQueryBreakpoints.med.px}) {
    padding: 0;
  }
  @media (min-width: ${mediaQueryBreakpoints.med.px}) {
    grid-template-columns: repeat(${props => props.skillCount}, 1fr);
  }

  
  margin: 1em auto;
  text-align: center;
`;

const Skill = styled.div`
  padding: 1em;
  position: relative;
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

  &:hover,
  &.tag-selected {
    color: white;
    cursor: pointer;
    background-image: linear-gradient(
      -15deg,
      ${props => props.theme.color.purple.main},
      ${props => props.theme.color.pink.main}
    );
    box-shadow: 0px 0px 15px 3px ${props => props.theme.color.purple.main};

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

    .skill-effect {
      position: absolute;
      display: block;
    }
  }


  .react-icon {
    animation: weeeeeee 4s linear infinite;
    animation-play-state: paused;
  }

  .skill-effect {
    animation: bubbles 2s linear 1;
    display: none;
  }

  @keyframes bubbles {
    from {
      opacity: 1;
    }
    to {
      transform: translate(0, -100%);
      opacity: 0;
    }
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
        name: `React`,
        iconProps: { name: `react-icon`, viewBox: `0 0 50 50`, ...svgProps },
      },
      {
        name: `JavaScript`,
        iconProps: { name: `js-icon`, viewBox: `0 0 50 50`, ...svgProps },
      },
      {
        name: `HTML`,
        iconProps: { name: `html-icon`, viewBox: `0 0 32 32`, ...svgProps },
      },
      {
        name: `CSS`,
        iconProps: { name: `css-icon`, viewBox: `0 0 50 50`, ...svgProps },
        effect: (
          <>
            {getArrayOfRandomLength({ minLength: 5, maxLength: 10 }).map((index) => {
              const bubbleSize = getRandomInt({  lowerBound: 5, upperBound: 30 });
              const bubbleStyle = {
                top: `${getRandomInt({ upperBound: 100 })}%`,
                left: `${getRandomInt({ upperBound: 100 }) - 5}%`,
                opacity: 0,
              };
              return (
                <div className="skill-effect" style={bubbleStyle}>
                  <SVG name="circle" height={bubbleSize} width={bubbleSize} />
                </div>
              );
            })}
          </>
        ),
      },
    ],
    backend: [
      {
        name: `Rails`,
        iconProps: { name: `rails-icon`, viewBox: `0 0 122.498 157.564`, ...svgProps },
      },
      {
        name: `NodeJS`,
        iconProps: { name: `nodejs-icon`, viewBox: `0 0 32 32`, ...svgProps },
      },
      {
        name: `SQL`,
        iconProps: { name: `database-icon`, viewBox: `0 0 55 55`, ...svgProps },
      },
      {
        name: `mongoDB`,
        iconProps: { name: `mongodb-icon`, viewBox: `0 0 32 32`, ...svgProps },
      },
    ],
  };

  const [ { selectedTags }, ] = useStateValue();

  return (
    <SkillsStyles>
      <h3>Skills</h3>
      <SkillzContainerStyles skillCount={skillz.frontend.length}>
        {skillz.frontend.map(skill => (
          <Skill key={skill.name} className={selectedTags.includes(skill.name.toLocaleLowerCase()) ? 'tag-selected' : ''}>
            <SVG classNames={skill.iconProps.name} {...skill.iconProps} />
            <div>{skill.name}</div>
            {skill.effect}
          </Skill>
        ))}

        {skillz.backend.map(skill => (
          <Skill key={skill.name} className={selectedTags.includes(skill.name.toLocaleLowerCase()) ? 'tag-selected' : ''}>
            <SVG classNames={skill.iconProps.name} {...skill.iconProps} />
            <div>{skill.name}</div>
          </Skill>
        ))}
      </SkillzContainerStyles>
    </SkillsStyles>
  );
};

export default SkillzGrid;
