import styled from 'styled-components';
import { mediaQueryBreakpoints } from '../config/constants';

export const ShortInfoStyles = styled.div`
  @media (max-width: ${mediaQueryBreakpoints.med.px}) {
    padding: 0;
  }
  @media (min-width: ${mediaQueryBreakpoints.med.px}) {
    padding: 1.5em 1em 2em 1em;
    border-bottom: 3px solid ${props => props.theme.color.main};
  }

  /* Intro mode overrides */
  .intro-expanded & {
    .see-more-button {
      display: block;
    }
  }

  .top-line {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 0.6em;
    .name {
      font: 900 2.8vw Muli, sans-serif;
      letter-spacing: 0px;
      text-shadow: -1px -1px 0 ${props => props.theme.color.accent}, 1px -1px 0 ${props => props.theme.color.accent},
        -1px 1px 0 ${props => props.theme.color.accent}, 1px 1px 0 ${props => props.theme.color.accent},
        2px 2px 1px ${props => props.theme.color.main}, 3px 3px 1px ${props => props.theme.color.main};
      transition: all ease 1s;
    }

    .button-container {
      .nav-button {
        flex-basis: 30%;
        padding: 0.5em;
        width: 50px;
        height: 50px;
        &.nav-expanded {
          background-color: ${props => props.theme.color.main};
        }
      }
    }

    @media (max-width: ${mediaQueryBreakpoints.med.px}) {
      padding: 0;
      font-size: 8vw;
      width: 0;
      flex-basis: 70%;
    }
    @media (min-width: ${mediaQueryBreakpoints.med.px}) {
      .name {
        text-align: center;
        margin: auto;
      }
      .button-container {
        display: none;
      }
    }
  }

  .short-description {
    font-size: 0.85em;

    transition: all ease 1s;

    @media (max-width: ${mediaQueryBreakpoints.med.px}) {
      padding: 0;
      display: none;
    }
    @media (min-width: ${mediaQueryBreakpoints.med.px}) {
      padding-top: 1.5em;
      text-align: center;
      margin: auto;
    }
  }

  .social-media-links {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1.75em;
    text-align: center;
    svg {
      padding: 0 0.5em;
      &:hover {
        fill: ${props => props.theme.color.electricPink};
      }
    }
  }

  .see-more-button {
    display: none;
    margin: 1.5em auto;
  }
`;
