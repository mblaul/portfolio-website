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

import Intro from './layout/Intro';
import Main from './layout/Main';
import TopNav from './layout/TopNav';
import Content from './layout/Content';

import MediaQuery from './utils/MediaQuery';

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

const Layout = ({ children, pageProps }) => {
  const { site: { siteMetadata: { title } } } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const initialScreenSize = getScreenSize();
  const { xs, sm, med } = mediaQueryBreakpoints;
  const isMobile = [ xs.name, sm.name, med.name ].includes(initialScreenSize);

  const initialState = {
    introExpanded: localStorage.getItem(`introExpanded`) ? JSON.parse(localStorage.getItem(`introExpanded`)) : true,
    mobileNavExpanded: false,
    screenSize: initialScreenSize,
    isMobile,
    pageProps,
  };

  return (
    <Fragment>
      <StateProvider initialState={initialState} reducer={reducer}>
        <ThemeProvider theme={theme}>
          <MediaQuery>
            <GlobalStyles>
              <LayoutStyles>
                <Intro />
                <Main>
                  <TopNav />
                  <Content>{children}</Content>
                </Main>
              </LayoutStyles>
            </GlobalStyles>
          </MediaQuery>
        </ThemeProvider>
      </StateProvider>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
