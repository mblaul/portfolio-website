import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  /* Font imports */
  @import url('https://fonts.googleapis.com/css?family=Muli:300,400,600,700,800,900,900i');

  /* Global base styles */
  font-family: 'Muli', sans-serif;
  box-sizing: border-box;
  background-color: ${props => props.theme.color.grey.dark};
  color: white;
  text-shadow: 1px 1px 7px ${props => props.theme.color.grey.dark};

  h1 {
    font: 900 6.2rem 'Helvetica', sans-serif;
  }

  h2 {
    margin: 0;
    padding: 2rem 0;
    font: 900 4.6rem 'Muli', sans-serif;
  }

  h3 {
    margin: 0;
    padding: 1rem 0;
    font: 800 3.8rem 'Muli', sans-serif;
  }

  h4 {
    font: 800 3.2rem 'Muli', sans-serif;
  }

  p {
    margin: 0;
    font: 400 2.4rem 'Muli', sans-serif;
  }

  *::selection {
    background: ${props =>
      props.theme.color.pink.main}; /* WebKit/Blink Browsers */
  }
  *::-moz-selection {
    background: ${props => props.theme.color.pink.main}; /* Gecko Browsers */
  }
`;

const GlobalStyles = ({ children }) => {
  return <Styles>{children}</Styles>;
};

export default GlobalStyles;
