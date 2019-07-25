import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const LinkStyles = styled.li`
  &:not(:first-of-type) {
    border-left: 1px solid ${(props) => props.theme.color.main};
  }
  &:not(:last-of-type) {
    border-right: 1px solid ${(props) => props.theme.color.main};
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3em;
    font-size: 1.3em;
    color: ${(props) => props.theme.color.color5};
    text-decoration: none;

    transition: all ease-in 0.25s;

    &:visited {
      color: ${(props) => props.theme.color.color5};
    }

    &:hover {
      background-color: ${(props) => props.theme.color.main};
      color: white;
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
