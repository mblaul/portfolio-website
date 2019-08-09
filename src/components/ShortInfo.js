import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { mediaQueryBreakpoints } from './config/constants';
import { getScreenSize } from './utils/screenSizeHelper';

import Button from './common/Button';

const ShortInfoStyles = styled.div`
  @media (max-width: ${mediaQueryBreakpoints.med.px}) {
    padding: 0;
  }
  @media (min-width: ${mediaQueryBreakpoints.med.px}) {
    padding: 1.5em 1em;
    padding-bottom: 2em;
    border-bottom: 3px solid ${(props) => props.theme.color.main};
  }

  .mobile-nav-container {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 0.6em;
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
        font-size: 8vw;
        width: 0;
        flex-basis: 70%;

        &.intro {
          flex-basis: 100%;
          transform: translateX(28%);
        }
      }
      @media (min-width: ${mediaQueryBreakpoints.med.px}) {
        text-align: center;
        margin: auto;
      }
    }
    .button-container {
      .nav-button {
        flex-basis: 30%;
        padding: 0.5em;
        width: 50px;
        height: 50px;
        &.intro {
          display: none;
        }
      }
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
    margin: 1.5em auto;
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
    const { dispatch } = this.props;

    dispatch({
      type: 'toggleIntroExpanded',
    });
  };

  render() {
    const { introExpanded, screenSize } = this.props;

    const isMobile = screenSize === `extra-small` || screenSize === `small`;
    const showDesktopVersion = introExpanded || screenSize !== `extra-small`;

    return (
      <ShortInfoStyles>
        <div className={`mobile-nav-container`}>
          <span className={`name ${introExpanded ? `intro` : ``}`}>Matt Blaul</span>
          {!introExpanded &&
          isMobile && (
            <div className="button-container">
              <Button classNames={`nav-button ${introExpanded ? `intro` : ``}`} text="\/" />
            </div>
          )}
        </div>
        {showDesktopVersion && <ActionShotStyles />}
        <div className={`short-description ${introExpanded ? `intro` : ``}`}>
          Web Developer, Cat Fanatic, Michigander
        </div>

        {introExpanded && (
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
  introExpanded: PropTypes.bool,

  // Current screen size of the app
  screenSize: PropTypes.string,

  // Dispatch function to update sidedrawer state
  dispatch: PropTypes.func,
};

export default ShortInfo;
