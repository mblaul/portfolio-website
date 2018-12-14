import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../src/constants/theme';

import Container from './components/Container';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Container />
      </MuiThemeProvider>
    );
  }
}

export default App;
