import React from 'react';
import styled from 'styled-components';

const ContentStyles = styled.div`
  margin-top: 1em;
  padding: 2em 5em;
`;

const Content = ({ children }) => {
  return <ContentStyles>{children}</ContentStyles>;
};

export default Content;
