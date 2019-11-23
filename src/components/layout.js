import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import Intro from './layout/Intro';
import Main from './layout/Main';
import TopNav from './layout/TopNav';
import Content from './layout/Content';

import { mediaQueryBreakpoints } from './config/constants';

const LayoutStyles = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  overflow-x: hidden;

  @media (min-width: ${mediaQueryBreakpoints.med.px}) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
  @media (max-width: ${mediaQueryBreakpoints.med.px}) {
    display: block;
  }
`;

const Layout = ({ children }) => {
  return (
    <LayoutStyles>
      <Intro />
      <Main>
        <TopNav />
        <Content>{children}</Content>
      </Main>
    </LayoutStyles>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
