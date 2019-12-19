import React from 'react';
import styled from 'styled-components';

const PageStyles = styled.div`
  margin: 0 10% 0 0;
  color: white;
  font: 300 1.3em 'Muli';
`;

const Page = ({ children }) => {
  return <PageStyles>{children}</PageStyles>;
};

export default Page;
