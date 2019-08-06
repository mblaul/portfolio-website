/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import styled, { ThemeProvider } from 'styled-components';

import { StateProvider } from './state';
import { reducer } from './reducers';

import GlobalStyles from './GlobalStyles';

import Sidebar from './layout/Sidebar';
import Main from './layout/Main';
import TopNav from './layout/TopNav';
import Content from './layout/Content';

import './css/normalize.css';
import { theme } from './config/theme';

import { mediaQueryBreakpoints } from './config/constants';
import { getScreenSize } from './utils/screenSizeHelper';

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
  const { site: { siteMetadata: { title } } } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const initialState = {
    screenSize: getScreenSize(),
    sidedrawerOpen: true,
  };

  return (
    <Fragment>
      <StateProvider initialState={initialState} reducer={reducer}>
        <ThemeProvider theme={theme}>
          <GlobalStyles>
            <LayoutStyles>
              <Sidebar />
              <Main>
                <TopNav />
                <Content>{children}</Content>
              </Main>
            </LayoutStyles>
          </GlobalStyles>
        </ThemeProvider>
      </StateProvider>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
