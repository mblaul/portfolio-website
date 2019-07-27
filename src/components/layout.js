/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import styled, { ThemeProvider } from 'styled-components';

import GlobalStyles from './GlobalStyles';

import Sidebar from './layout/Sidebar';
import Main from './layout/Main';
import TopNav from './layout/TopNav';
import Content from './layout/Content';

import './css/normalize.css';
import { theme } from './config/theme';

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

  const LayoutStyles = styled.div`
    max-width: 100vw;
    max-height: 100vh;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: hidden;
  `;

  return (
    <Fragment>
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
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
