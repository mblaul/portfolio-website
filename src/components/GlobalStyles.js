import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  /* Font imports */
  @import url('https://fonts.googleapis.com/css?family=Muli:300,400,600,700,800,900,900i');

  /* Global base styles */
  font-family: 'Muli', sans-serif;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.color.grey.dark};
  color: white;
  *::selection {
    background: ${(props) => props.theme.color.electricPink}; /* WebKit/Blink Browsers */
  }
  *::-moz-selection {
    background: ${(props) => props.theme.color.electricPink}; /* Gecko Browsers */
  }
`;

const GlobalStyles = ({ children }) => {
  return <Styles>{children}</Styles>;
};

export default GlobalStyles;
