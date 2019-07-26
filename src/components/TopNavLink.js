import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const LinkStyles = styled.li`
  border: 2px solid ${(props) => props.theme.color.main};

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3em;
    font: 900 1.3em Muli, sans-serif;
    color: white;
    text-decoration: none;

    &:visited {
      color: white;
    }

    &:hover,
    &:active,
    &:focus {
      color: white;
      background-image: linear-gradient(
        135deg,
        ${(props) => props.theme.color.main},
        ${(props) => props.theme.color.electricPink}
      );
      &:visited {
        color: white;
      }
    }
  }
`;

const TopNavLink = ({ link }) => {
  return (
    <LinkStyles>
      <Link to={link.to}>{link.name}</Link>
    </LinkStyles>
  );
};

TopNavLink.propTypes = {
  link: PropTypes.object,
};

export default TopNavLink;
