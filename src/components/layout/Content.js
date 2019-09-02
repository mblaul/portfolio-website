import React from 'react';
import styled from 'styled-components';

const ContentStyles = styled.div`
  margin-top: 1em;
  padding: 2vw 4vw 2vw 4vw;
`;

const Content = ({ children }) => {
  return <ContentStyles>{children}</ContentStyles>;
};

export default Content;
