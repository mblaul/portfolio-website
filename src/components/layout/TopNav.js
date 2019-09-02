import React, { Fragment } from 'react';
import styled from 'styled-components';
import { useStateValue } from '../state/index';
import TopNavLink from '../TopNavLink';

const TopNavStyles = styled.nav`
  ul {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 1em;
    padding: 2vw 4vw 0 4vw;
    list-style-type: none;
  }
  &.mobile {
    position: fixed;
    ul {
      grid-template-columns: unset;
      grid-template-rows: repeat(5, 1fr);
      width: 100vw;
      padding: 0;
      margin: 0;
    }
  }
`;

const TopNav = (props) => {
  const links = [
    { to: `/`, name: `Home` },
    { to: `/about`, name: `About` },
    { to: `/why-me`, name: `Why Me` },
    { to: `/contact`, name: `Contact` },
    { to: `/random`, name: `Random` },
  ];

  const [ { isMobile, mobileNavExpanded } ] = useStateValue();
  let shouldShowNavBar = true;

  if (isMobile) {
    shouldShowNavBar = mobileNavExpanded;
  }

  return (
    <Fragment>
      {shouldShowNavBar && (
        <TopNavStyles className={isMobile ? 'mobile' : ''}>
          <ul>{links.map((link) => <TopNavLink key={link.name} isMobile={isMobile} link={link} />)}</ul>
        </TopNavStyles>
      )}
    </Fragment>
  );
};

export default TopNav;
