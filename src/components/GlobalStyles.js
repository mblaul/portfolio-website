import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  /* Font imports */
  @import url('https://fonts.googleapis.com/css?family=Muli:300,400,900,900i|Playfair+Display:400,700&display=swap');

  /* Global base styles */
  font-family: 'Muli', sans-serif;
  box-sizing: border-box;
`;

const GlobalStyles = ({ children }) => {
  return <Styles>{children}</Styles>;
};

export default GlobalStyles;
