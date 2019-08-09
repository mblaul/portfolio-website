import React, { Component } from 'react';
import styled from 'styled-components';

import { StateContext } from '../state';
import { mediaQueryBreakpoints } from '../config/constants';

const MainStyles = styled.div`
  height: 100vh;
  flex: 1 0 0vw;
  opacity: 1;
  transition: all ease 2s;
  &.hidden {
    opacity: 0;
  }

  @media (max-width: ${mediaQueryBreakpoints.med.px}) {
    padding-top: 10vh;
  }
`;
class Main extends Component {
  static contextType = StateContext;

  render() {
    const [ { introExpanded }, dispatch ] = this.context;

    const { children } = this.props;

    return <MainStyles className={`${introExpanded ? `hidden` : ``}`}>{children}</MainStyles>;
  }
}

export default Main;
