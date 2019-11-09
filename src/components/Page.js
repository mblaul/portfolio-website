import React from 'react';
import styled from 'styled-components';

const PageStyles = styled.div`
  margin: 0 15vw 0 0;
  color: white;
  font-size: 1.3em;
`;

const Page = ({ children }) => {
  return <PageStyles>{children}</PageStyles>;
};

export default Page;
