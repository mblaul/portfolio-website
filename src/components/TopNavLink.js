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
    min-width: 100px;
    font: 900 1.3em Muli, sans-serif;
    color: white;
    text-decoration: none;
    &:visited {
      color: white;
    }

    &:hover,
    &:active,
    &:focus,
    &.active {
      color: white;
      background-image: linear-gradient(
        -15deg,
        ${(props) => props.theme.color.main},
        ${(props) => props.theme.color.electricPink}
      );
      &:visited {
        color: white;
      }
    }
  }

  &.mobile {
    background-color: ${(props) => props.theme.color.grey.dark};
    border: unset;
    border-bottom: 2px solid ${(props) => props.theme.color.main};
  }
`;

const TopNavLink = ({ isActive, isMobile, link }) => {
  return (
    <LinkStyles className={isMobile ? `mobile` : ``}>
      <Link to={link.to} className={isActive ? `active` : ``}>
        {link.name}
      </Link>
    </LinkStyles>
  );
};

TopNavLink.propTypes = {
  isMobile: PropTypes.bool,

  link: PropTypes.object,
};

export default TopNavLink;
