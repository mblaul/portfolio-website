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

import Sidebar from './layout/Sidebar';
import Main from './layout/Main';
import TopNav from './layout/TopNav';

import './css/normalize.css';
import { theme } from './config/theme';

const LayoutStyles = styled.div`
  display: grid;
  box-sizing: border-box;
  grid-template-columns: 20vw 80vw;
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

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <LayoutStyles>
          <Sidebar />
          <Main>
            <TopNav />
            <div
              style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0px 1.0875rem 1.45rem`,
                paddingTop: 0,
              }}
            >
              <div>{children}</div>
              <footer>Footer</footer>
            </div>
          </Main>
        </LayoutStyles>
      </ThemeProvider>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
