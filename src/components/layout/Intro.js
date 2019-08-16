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
      min-width: 350px;
    }
  }
`;

const IntroContainerStyles = styled.div`@media (min-width: ${mediaQueryBreakpoints.med.px}) {padding: 1em;}`;

class Intro extends Component {
  state = {
    scrollEvents: [ `mousewheel`, `scroll`, `touchmove` ],
    scrollListenersActive: null,
  };

  static contextType = StateContext;

  componentDidMount() {
    const { scrollEvents } = this.state;
    const [ { introExpanded }, dispatch ] = this.context;

    if (introExpanded) {
      scrollEvents.forEach((scrollEvent) => window.addEventListener(scrollEvent, this.shrinkIntroOnScroll));
      this.setState({ scrollListenersActive: true });
    }
  }

  componentDidUpdate() {
    const { scrollEvents, scrollListenersActive } = this.state;
    const [ { introExpanded }, dispatch ] = this.context;

    if (!introExpanded && scrollListenersActive) {
      scrollEvents.forEach((scrollEvent) => window.removeEventListener(scrollEvent, this.shrinkIntroOnScroll));
      localStorage.setItem(`introExpanded`, false);
      this.setState({ scrollListenersActive: false });
    }
  }

  shrinkIntroOnScroll = () => {
    const [ state, dispatch ] = this.context;

    dispatch({
      type: 'toggleIntroExpanded',
    });
  };

  render() {
    const [ { introExpanded, isMobile, mobileNavExpanded, screenSize }, dispatch ] = this.context;

    return (
      <IntroStyles className={introExpanded ? '' : 'shrink'}>
        <IntroContainerStyles>
          <ShortInfo
            introExpanded={introExpanded}
            isMobile={isMobile}
            dispatch={dispatch}
            mobileNavExpanded={mobileNavExpanded}
            screenSize={screenSize}
          />
        </IntroContainerStyles>
      </IntroStyles>
    );
  }
}

export default Intro;
