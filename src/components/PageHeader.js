import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PageHeaderStyles = styled.header`
  display: inline-block;
  margin-top: 4vh;
  font: 900 3.2em 'Muli', sans-serif;
  letter-spacing: -1px;
`;
const PageHeader = ({ title }) => {
  return <PageHeaderStyles>{title}</PageHeaderStyles>;
};

export default PageHeader;

PageHeader.propTypes = {
  // Text to use for the header
  title: PropTypes.string,
};
