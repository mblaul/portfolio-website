import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from './common/Button';

const ShortInfoStyles = styled.div`
  color: white;
  border-bottom: 3px solid ${(props) => props.theme.color.main};
  padding: 1.5em 1em;
  padding-bottom: 2em;
  .name {
    font: 400 4.5em 'Galada', cursive;
    text-align: center;
    letter-spacing: 3px;
    text-shadow: -1px -1px 0 ${(props) => props.theme.color.accent}, 1px -1px 0 ${(props) => props.theme.color.accent},
      -1px 1px 0 ${(props) => props.theme.color.accent}, 1px 1px 0 ${(props) => props.theme.color.accent},
      2px 2px 1px ${(props) => props.theme.color.main}, 3px 3px 1px ${(props) => props.theme.color.main};
    transition: all ease 1s;
    &.intro {
      font: 400 8em 'Galada', cursive;
    }
  }
  .short-description {
    padding-bottom: 3em;
    font-size: 0.85em;
    text-align: center;
    margin: auto;
    transition: all ease 1s;
    &.intro {
      font-size: 1.5em;
    }
  }
`;

const ActionShotStyles = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  height: 300px;
  width: 100%;
`;

class ShortInfo extends Component {
  handleOpenButtonClick = () => {
    const { setSidedrawerOpen } = this.props;

    setSidedrawerOpen({
      type: 'toggleSidedrawer',
    });
  };
  render() {
    const { sidedrawerOpen } = this.props;

    return (
      <ShortInfoStyles>
        <div className={`name ${sidedrawerOpen ? `intro` : ``}`}>Matt Blaul</div>
        <div className={`short-description  ${sidedrawerOpen ? `intro` : ``}`}>
          Web Developer, Cat Fanatic, Michigander
        </div>
        <ActionShotStyles />
        <Button onClick={this.handleOpenButtonClick}>See More</Button>
      </ShortInfoStyles>
    );
  }
}

ShortInfo.propTypes = {
  // State of the sidedrawer
  sidedrawerOpen: PropTypes.bool,

  // Dispatch function to update sidedrawer state
  setSidedrawerOpen: PropTypes.func,
};

export default ShortInfo;
