import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PageHeaderStyles = styled.header`font: 900 2.5vw Muli, sans-serif;`;
const PageHeader = ({ title }) => {
  return <PageHeaderStyles>{title}</PageHeaderStyles>;
};

export default PageHeader;

PageHeader.propTypes = {
  // Text to use for the header
  title: PropTypes.string,
};
