import styled from 'styled-components';
import { mediaQueryBreakpoints, spacing } from '../config/constants';

export const ShortInfoStyles = styled.div`
  @media (max-width: ${mediaQueryBreakpoints.med.px}) {
  }

  @media (min-width: ${mediaQueryBreakpoints.med.px}) {
  }

  text-align: center;

  .name {
    text-shadow: -1px -1px 0 ${props => props.theme.color.accent}, 1px -1px 0 ${props => props.theme.color.accent},
      -1px 1px 0 ${props => props.theme.color.accent}, 1px 1px 0 ${props => props.theme.color.accent},
      2px 2px 1px ${props => props.theme.color.purple.main}, 3px 3px 1px ${props => props.theme.color.purple.main};
    margin-top: 0;

    @media (max-width: ${mediaQueryBreakpoints.med.px}) {
    }
    @media (min-width: ${mediaQueryBreakpoints.med.px}) {
      margin: 3rem 0;
    }
  }

  .short-description {
    text-align: center;
    margin: auto;

    @media (max-width: ${mediaQueryBreakpoints.med.px}) {
      font-size: 1.6rem;
      margin: ${spacing.vertical.inner}vh 0;
    }
    @media (min-width: ${mediaQueryBreakpoints.med.px}) {
      font-size: 1.6rem;
      margin: 3rem 0;
    }
  }

  .social-media-links {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    svg {
      padding: 0 0.5rem;
      &:hover {
        fill: ${props => props.theme.color.electricPink};
      }
    }
    @media (max-width: ${mediaQueryBreakpoints.med.px}) {
      font-size: 1em;
      margin: ${spacing.vertical.inner / 3}vh 0;
    }
    @media (min-width: ${mediaQueryBreakpoints.med.px}) {
      margin: 3rem 0;
    }
  }

  .see-more-button {
    display: none;
    margin: 1.5em auto;
  }
`;
