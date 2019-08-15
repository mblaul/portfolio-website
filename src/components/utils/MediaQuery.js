import React, { Component, Fragment } from 'react';

import { StateContext } from '../state';

import { getScreenSize } from './screenSizeHelper';
import { mediaQueryBreakpoints } from '../config/constants';

class MediaQuery extends Component {
  state = {
    screenSize: null,
  };

  static contextType = StateContext;

  componentDidMount() {
    window.addEventListener('resize', this.adjustAppSize);
    const [ { screenSize } ] = this.context;

    this.setState({ screenSize });
  }

  adjustAppSize = () => {
    const [ { isMobile, screenSize }, dispatch ] = this.context;

    const currentScreenSize = getScreenSize();

    if (currentScreenSize !== screenSize) {
      dispatch({
        type: 'setScreenSize',
        screenSize: currentScreenSize,
      });
      dispatch({
        type: 'setIsMobile',
        isMobile,
      });

      console.log(currentScreenSize);
      console.log(`is mobile? ${isMobile}`);
    }
  };

  render() {
    return <Fragment>{this.props.children}</Fragment>;
  }
}

export default MediaQuery;
