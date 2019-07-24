import React from 'react';
import styled from 'styled-components';

const ShortInfoStyles = styled.div`
  color: white;
  border-bottom: 3px solid ${(props) => props.theme.color.main};
  padding: 1em;
  padding-bottom: 2em;
  .name {
    font-size: 2em;
  }
  .short-description {
    font-size: 0.85em;
    text-align: right;
  }
`;

const ActionShotStyles = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  height: 300px;
  width: 100%;
  margin: 1em 0;
`;

const ShortInfo = (props) => {
  return (
    <ShortInfoStyles>
      <span className="name">Matt Blaul</span>
      <ActionShotStyles />
      <div className="short-description">Web Developer, Cat Fanatic, Michigander</div>
    </ShortInfoStyles>
  );
};

export default ShortInfo;
