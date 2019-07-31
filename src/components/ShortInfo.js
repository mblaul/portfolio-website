import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { mediaQueryBreakpoints } from './config/constants';

import Button from './common/Button';

const ShortInfoStyles = styled.div`
  color: white;

  @media (max-width: ${mediaQueryBreakpoints.med}) {
    padding: 0;
  }
  @media (min-width: ${mediaQueryBreakpoints.med}) {
    padding: 1.5em 1em;
    padding-bottom: 2em;
    border-bottom: 3px solid ${(props) => props.theme.color.main};
  }

  .name {
    font: 400 3vw 'Galada', cursive;
    letter-spacing: 1px;
    text-shadow: -1px -1px 0 ${(props) => props.theme.color.accent}, 1px -1px 0 ${(props) => props.theme.color.accent},
      -1px 1px 0 ${(props) => props.theme.color.accent}, 1px 1px 0 ${(props) => props.theme.color.accent},
      2px 2px 1px ${(props) => props.theme.color.main}, 3px 3px 1px ${(props) => props.theme.color.main};
    transition: all ease 1s;

    &.intro {
      font-size: 10vw;
    }

    @media (max-width: ${mediaQueryBreakpoints.med}) {
      padding: 0;
      font-size: 8vw;
    }
    @media (min-width: ${mediaQueryBreakpoints.med}) {
      padding-bottom: 3em;
      text-align: center;
      margin: auto;
    }
  }
  .short-description {
    font-size: 0.85em;

    transition: all ease 1s;
    &.intro {
      font-size: 2vw;
    }

    @media (max-width: ${mediaQueryBreakpoints.med}) {
      padding: 0;
      display: none;
    }
    @media (min-width: ${mediaQueryBreakpoints.med}) {
      padding-bottom: 3em;
      text-align: center;
      margin: auto;
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
        {sidedrawerOpen && (
          <Fragment>
            <ActionShotStyles />
            <Button onClick={this.handleOpenButtonClick}>See More</Button>
          </Fragment>
        )}
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
