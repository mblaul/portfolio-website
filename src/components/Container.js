import React, { Component, Fragment } from 'react';

import Navbar from './layout/Navbar';
import Header from './content/Header';

class Container extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Header />
      </Fragment>
    );
  }
}

export default Container;
