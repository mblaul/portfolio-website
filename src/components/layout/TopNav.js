import React from 'react';
import styled from 'styled-components';

import TopNavLink from '../TopNavLink';

const TopNavStyles = styled.nav`
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-column-gap: 1em;
    padding: 2vw 15vw 0 2vw;
    list-style-type: none;
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
