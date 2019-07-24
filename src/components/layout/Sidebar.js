import React from 'react';
import styled from 'styled-components';

import ShortInfo from '../ShortInfo';

const SidebarStyles = styled.div`
  background-color: ${(props) => props.theme.color.accent};
  background-image: linear-gradient(
    135deg,
    ${(props) => props.theme.color.accent},
    ${(props) => props.theme.color.accentSecondary}
  );
  height: 100vh;
  display: grid;
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
