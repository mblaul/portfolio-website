import React, { Component, Fragment } from 'react';

import { StateContext } from '../state';

import { getScreenSize } from './screenSizeHelper';
import { mediaQueryBreakpoints } from '../config/constants';

class MediaQuery extends Component {
  static contextType = StateContext;

  componentDidMount() {
    window.addEventListener('resize', this.adjustAppSize);
    const [ { screenSize } ] = this.context;

    this.setState({ screenSize });
  }

  adjustAppSize = () => {
    const [ { screenSize }, dispatch ] = this.context;

    const currentScreenSize = getScreenSize();
    const { xs, sm, med } = mediaQueryBreakpoints;
    const isMobile = [ xs.name, sm.name, med.name ].includes(currentScreenSize);

    if (currentScreenSize !== screenSize) {
      dispatch({
        type: 'setScreenSize',
        screenSize: currentScreenSize,
      });
      dispatch({
        type: 'setIsMobile',
        isMobile,
      });
    }
  };

  render() {
    return <Fragment>{this.props.children}</Fragment>;
  }
}

export default MediaQuery;
