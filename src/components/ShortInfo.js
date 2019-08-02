import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { mediaQueryBreakpoints } from './config/constants';
import { getScreenSize } from './utils/screenSizeHelper';

import Button from './common/Button';

const ShortInfoStyles = styled.div`
  color: white;

  @media (max-width: ${mediaQueryBreakpoints.med.px}) {
    padding: 0;
  }
  @media (min-width: ${mediaQueryBreakpoints.med.px}) {
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

    @media (max-width: ${mediaQueryBreakpoints.med.px}) {
      padding: 0;
      width: max-content;
      font-size: 8vw;
      padding-top: 0.2em;
      &.intro {
        margin: auto;
      }
    }
    @media (min-width: ${mediaQueryBreakpoints.med.px}) {
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

    @media (max-width: ${mediaQueryBreakpoints.med.px}) {
      padding: 0;
      display: none;
    }
    @media (min-width: ${mediaQueryBreakpoints.med.px}) {
      padding-top: 1em;
      text-align: center;
      margin: auto;
    }
  }

  .see-more {
    display: block;
    margin: 2em auto;
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

    const screenSize = getScreenSize();
    const showActionShot = sidedrawerOpen || screenSize !== 'extra-small';

    return (
      <ShortInfoStyles>
        <div className={`name ${sidedrawerOpen ? `intro` : ``}`}>Matt Blaul</div>
        {showActionShot && <ActionShotStyles />}
        <div className={`short-description  ${sidedrawerOpen ? `intro` : ``}`}>
          Web Developer, Cat Fanatic, Michigander
        </div>

        {sidedrawerOpen && (
          <Button classNames="see-more" onClick={this.handleOpenButtonClick}>
            See More
          </Button>
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
