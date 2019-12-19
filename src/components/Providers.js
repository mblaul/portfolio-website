import React from 'react';

import { StateProvider } from './state';
import { reducer } from './reducers';

import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { theme } from './config/theme';

import { mediaQueryBreakpoints } from './config/constants';
import { getScreenSize } from './utils/screenSizeHelper';
import MediaQuery from './utils/MediaQuery';

const Providers = ({ children }) => {
  const initialScreenSize = getScreenSize();
  const { xs, sm, med } = mediaQueryBreakpoints;
  const isMobile = [ xs.name, sm.name, med.name ].includes(initialScreenSize);
  const introExpanded = localStorage.getItem(`introExpanded`)
    ? JSON.parse(localStorage.getItem(`introExpanded`))
    : true;

  const initialState = {
    introExpanded,
    mobileNavExpanded: false,
    screenSize: initialScreenSize,
    isMobile,
    selectedTags: [],
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <ThemeProvider theme={theme}>
          <MediaQuery>{children}</MediaQuery>
        </ThemeProvider>
      </Router>
    </StateProvider>
  );
};

export default Providers;
