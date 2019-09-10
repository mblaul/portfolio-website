import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PageHeaderStyles = styled.header`font: 400 3.5vw 'Galada', cursive;`;
const PageHeader = ({ title }) => {
  return <PageHeaderStyles>{title}</PageHeaderStyles>;
};

export default PageHeader;

PageHeader.propTypes = {
  // Text to use for the header
  title: PropTypes.string,
};
