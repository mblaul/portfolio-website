import React, { Fragment } from 'react';
import styled from 'styled-components';
import { useStateValue } from '../state/index';
import TopNavLink from '../TopNavLink';

const TopNavStyles = styled.nav`
  ul {
    display: grid;
    grid-template-columns: repeat(${(props) => props.linkCount}, 1fr);
    grid-column-gap: 1em;
    padding: 2vw 4vw 0 4vw;
    list-style-type: none;
  }
  &.mobile {
    position: fixed;
    ul {
      grid-template-columns: unset;
      grid-template-rows: repeat(${(props) => props.linkCount}, 1fr);
      width: 100vw;
      padding: 0;
      margin: 0;
    }
  }
`;

const TopNav = (props) => {
  const links = [
    { to: `/`, name: `Home` },
    { to: `/posts`, name: `Posts` },
    // { to: `/projects`, name: `Projects` },
    // { to: `/contact`, name: `Contact` },
  ];

  const [ { isMobile, mobileNavExpanded } ] = useStateValue();
  let shouldShowNavBar = true;

  if (isMobile) {
    shouldShowNavBar = mobileNavExpanded;
  }

  return (
    <Fragment>
      {shouldShowNavBar && (
        <TopNavStyles className={isMobile ? 'mobile' : ''} linkCount={links.length}>
          <ul>
            {links.map((link) => (
              <TopNavLink
                key={link.name}
                isActive={window.location.pathname === link.to}
                isMobile={isMobile}
                link={link}
              />
            ))}
          </ul>
        </TopNavStyles>
      )}
    </Fragment>
  );
};

export default TopNav;
