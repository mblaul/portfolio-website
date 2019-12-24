import React from 'react';
import styled from 'styled-components';

import Header from './layout/Header';
import About from './pages/About';
import Posts from './pages/Posts';

import { mediaQueryBreakpoints } from './config/constants';

const MainStyles = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  overflow-x: hidden;

  @media (min-width: ${mediaQueryBreakpoints.med.px}) {
  }
  @media (max-width: ${mediaQueryBreakpoints.med.px}) {
  }
`;

const Main = () => (
  <MainStyles>
    <Header />
    <About />
    <Posts />
  </MainStyles>
);

export default Main;
