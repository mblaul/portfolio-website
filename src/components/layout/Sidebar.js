import React, { useState } from 'react';
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
  z-index: 1000;

  flex: 0 0 100vw;
  transition: flex-basis 1s ease-in-out;

  &.shrunken {
    flex-basis: 20vw;
  }
`;

const SidebarContainerStyles = styled.div`padding: 1em;`;

const Sidebar = (props) => {
  const [ isShrunken, setIsShrunken ] = useState(false);

  return (
    <SidebarStyles className={isShrunken ? 'shrunken' : 'full-width'}>
      <SidebarContainerStyles>
        <ShortInfo setIsShrunken={setIsShrunken} />
      </SidebarContainerStyles>
    </SidebarStyles>
  );
};

export default Sidebar;
