import React from 'react';
import styled from 'styled-components';

const Main = ({ children }) => {
  const MainStyles = styled.div`
    height: 100vh;
    flex: 1 0 0vw;
  `;

  return <MainStyles>{children}</MainStyles>;
};

export default Main;
