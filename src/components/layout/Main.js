import React from 'react';
import styled from 'styled-components';

const MainStyles = styled.div`height: 100vh;`;

const Main = ({ children }) => {
  return <MainStyles>{children}</MainStyles>;
};

export default Main;
