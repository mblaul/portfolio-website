import React, { Component, Fragment } from 'react';

import { StateContext } from '../state';

import { getScreenSize } from './screenSizeHelper';

class MediaQuery extends Component {
  state = {
    screenSize: null,
  };

  static contextType = StateContext;

  componentDidMount() {
    window.addEventListener('resize', this.adjustAppSize);
    const [ { screenSize }, setScreenSize ] = this.context;

    this.setState({ screenSize });
  }

  adjustAppSize = () => {
    const [ { screenSize }, setScreenSize ] = this.context;
    const currentScreenSize = getScreenSize();

    if (currentScreenSize !== screenSize) {
      setScreenSize({
        type: 'setScreenSize',
        screenSize: currentScreenSize,
      });
      console.log(currentScreenSize);
    }
  };

  render() {
    return <Fragment>{this.props.children}</Fragment>;
  }
}

export default MediaQuery;
