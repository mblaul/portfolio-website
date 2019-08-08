import React, { Component } from 'react';
import styled from 'styled-components';

import { StateContext } from '../state';

import { mediaQueryBreakpoints } from '../config/constants';

import ShortInfo from '../ShortInfo';

const IntroStyles = styled.div`
  background-color: ${(props) => props.theme.color.accent};
  background-image: linear-gradient(
    180deg,
    ${(props) => props.theme.color.accent},
    ${(props) => props.theme.color.accentSecondary}
  );
  box-shadow: 21px 0px 30px -25px black;
  height: 100vh;
  z-index: 1000;

  flex: 0 0 100vw;
  transition: all 1s ease-in-out;

  &.shrink {
    @media (max-width: ${mediaQueryBreakpoints.med.px}) {
      position: fixed;
      width: 100vw;
      height: 10vh;
    }
    @media (min-width: ${mediaQueryBreakpoints.med.px}) {
      flex-basis: 20vw;
    }
  }
`;

const IntroContainerStyles = styled.div`@media (min-width: ${mediaQueryBreakpoints.med.px}) {padding: 1em;}`;

class Intro extends Component {
  static contextType = StateContext;

  componentDidMount() {
    window.addEventListener('mousewheel', this.shrinkIntroOnScroll);
    window.addEventListener('scroll', this.shrinkIntroOnScroll);
    window.addEventListener('touchmove', this.shrinkIntroOnScroll);
  }

  shrinkIntroOnScroll = () => {
    const [ { introExpanded }, setIntroExpanded ] = this.context;

    setIntroExpanded({
      type: 'toggleIntro',
    });

    window.removeEventListener('mousewheel', this.shrinkIntroOnScroll);
    window.removeEventListener('scroll', this.shrinkIntroOnScroll);
    window.removeEventListener('touchmove', this.shrinkIntroOnScroll);
  };

  render() {
    const [ { introExpanded }, setIntroExpanded ] = this.context;

    return (
      <IntroStyles className={introExpanded ? '' : 'shrink'}>
        <IntroContainerStyles>
          <ShortInfo introExpanded={introExpanded} setIntroExpanded={setIntroExpanded} />
        </IntroContainerStyles>
      </IntroStyles>
    );
  }
}

export default Intro;
