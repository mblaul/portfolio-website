import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import TopNavLink from '../TopNavLink';

const TopNavStyles = styled.nav`
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    padding: 2vw 20vw 0 0;
    list-style-type: none;
    li {
      text-align: center;
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

  return (
    <TopNavStyles>
      <ul>{links.map((link) => <TopNavLink key={link.name} link={link} />)}</ul>
    </TopNavStyles>
  );
};

export default TopNav;
