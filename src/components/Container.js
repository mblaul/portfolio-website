import React, { Component, Fragment } from 'react';

import Navbar from './layout/Navbar';
import Header from './content/Header';
import Content from './content/Content';

class Container extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Header />
        <Content />
      </Fragment>
    );
  }
}

export default Container;
