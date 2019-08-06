import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { theme } from '../config/theme';

const Button = (props) => {
  const { borderColor, children, classNames, onClick, styles, text } = props;

  const ButtonStyles = styled.button`
    background-color: transparent;
    padding: 1em;
    color: white;
    border: 3px solid ${borderColor};
    cursor: pointer;
    font: 900 1.3em Muli, sans-serif;
    &:hover {
      background-color: ${borderColor};
    }
  `;

  return (
    <ButtonStyles className={classNames} style={styles} onClick={onClick}>
      {text || children}
    </ButtonStyles>
  );
};

Button.propTypes = {
  //String classNames for the button
  classNames: PropTypes.string,

  //Function to execute when button is clicked
  onClick: PropTypes.func,

  //String for the button's text
  text: PropTypes.string,
};

Button.defaultProps = {
  borderColor: theme.color.main,
  onClick: () => {},
};

export default Button;
