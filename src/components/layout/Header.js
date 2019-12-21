import React from 'react';
import styled from 'styled-components';

import { mediaQueryBreakpoints, spacing } from '../config/constants';

import ShortInfo from '../ShortInfo';

const HeaderStyles = styled.header`
  position: relative;
  display: grid;
  align-items: center;

  background-color: ${props => props.theme.color.accent};
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='medium-lines' width='100' height='100' viewBox='0 0 100 100' patternUnits='userSpaceOnUse'%3E%3CanimateTransform attributeName='patternTransform' type='translate' from='0' to='-100 100' begin='0' dur='2.5s' repeatCount='indefinite' /%3E%3Cpath stroke='rgba(15, 82, 87, 0.75)' stroke-width='12' stroke-linecap='round' stroke-linejoin='round' d='M43.907 6.485L6.485 43.093' /%3E%3C/pattern%3E%3Cpattern id='little-lines' width='50' height='50' viewBox='0 0 100 100' patternUnits='userSpaceOnUse'%3E%3CanimateTransform attributeName='patternTransform' type='translate' from='0' to='-50 50' begin='0' dur='2.75s' repeatCount='indefinite' /%3E%3Cpath stroke='rgba(15, 82, 87, 0.25)' stroke-width='12' stroke-linecap='round' stroke-linejoin='round' d='M43.907 6.485L6.485 43.093' /%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' style='fill: url(%23medium-lines);' /%3E%3Crect width='100%25' height='100%25' style='fill: url(%23little-lines);' /%3E%3C/svg%3E"),
    linear-gradient(180deg, ${props => props.theme.color.accent} 5%, ${props => props.theme.color.accentSecondary});

  @media (max-width: ${mediaQueryBreakpoints.med.px}) {
    grid-template-columns: 1 auto;
    padding: ${spacing.vertical.inner}vh ${spacing.horizontal.inner}vw;
    & > div { 
      margin:${spacing.vertical.inner}vh 0;
    }
  }
  @media (min-width: ${mediaQueryBreakpoints.med.px}) {
    grid-template-columns: repeat(2, 50%);
    padding: 4vh 13vw;
    .description { 
      margin: 5vh 0;
    }
  }
  }
`;

const Header = () => {
  return (
    <HeaderStyles>
      <ShortInfo />
      <div className="description">
        <h2>Hello!</h2>
        <p>I'm a full-stack web developer from Dearborn, Michigan and I love building great web experiences.</p>
        <p>
          I've always enjoyed working on computers. That passion lead me to pursue a degree in Information Technology
          while learning web development on the side.
        </p>
      </div>
    </HeaderStyles>
  );
};

export default Header;
