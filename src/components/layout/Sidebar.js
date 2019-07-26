import React from 'react';
import styled from 'styled-components';

import ShortInfo from '../ShortInfo';

const SidebarStyles = styled.div`
  background-color: ${(props) => props.theme.color.accent};
  background-image: linear-gradient(
    180deg,
    ${(props) => props.theme.color.accent},
    ${(props) => props.theme.color.accentSecondary}
  );
  box-shadow: 21px 0px 30px -25px black;
  height: 100vh;
  display: grid;
  z-index: 1000;
`;

const SidebarContainerStyles = styled.div`padding: 1em;`;

const Sidebar = (props) => {
  return (
    <SidebarStyles>
      <SidebarContainerStyles>
        <ShortInfo />
      </SidebarContainerStyles>
    </SidebarStyles>
  );
};

export default Sidebar;
