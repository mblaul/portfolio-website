import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const TopNavLink = ({ link }) => {
  return (
    <li>
      <Link to={link.to}>{link.name}</Link>
    </li>
  );
};

TopNavLink.propTypes = {};

export default TopNavLink;
