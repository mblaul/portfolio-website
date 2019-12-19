import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { theme } from '../config/theme';

const Button = props => {
  const { borderColor, children, classNames, height, padding, onClick, styles, text, width } = props;

  const ButtonStyles = styled.button`
    background-color: transparent;
    width: ${width || `auto`};
    height: ${height || `auto`};
    padding: ${padding || `1em`};
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

  //Height (in px) of the button
  height: PropTypes.number,

  //Function to execute when button is clicked
  onClick: PropTypes.func,

  //String for the button's text
  text: PropTypes.string,

  // Width (in px) of the button
  width: PropTypes.number,
};

Button.defaultProps = {
  borderColor: theme.color.purple.main,
  onClick: () => {},
};

export default Button;
