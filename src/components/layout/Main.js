import React, { Component } from 'react';
import styled from 'styled-components';

import { StateContext } from '../state';

const MainStyles = styled.div`
  height: 100vh;
  flex: 1 0 0vw;
  opacity: 1;
  transition: all ease 3s;
  &.hidden {
    opacity: 0;
  }
`;
class Main extends Component {
  static contextType = StateContext;

  render() {
    const [ { sidedrawerOpen }, setSidedrawerOpen ] = this.context;

    const { children } = this.props;

    return <MainStyles className={`${sidedrawerOpen ? `hidden` : ``}`}>{children}</MainStyles>;
  }
}

export default Main;
