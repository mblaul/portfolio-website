import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { mediaQueryBreakpoints } from './config/constants';

import Button from './common/Button';
import SVG from './common/SVG';
import { Link } from 'gatsby';

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
        &.nav-expanded {
          background-color: ${(props) => props.theme.color.main};
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
      padding-top: 1.5em;
      text-align: center;
      margin: auto;
    }
  }

  .social-media-links {
    padding-top: 1.75em;
    margin: auto;
    text-align: center;
    svg {
      padding: 0 0.5em;
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
      type: `toggleIntroExpanded`,
    });
  };

  handleNavButtonClick = () => {
    const { dispatch } = this.props;

    dispatch({
      type: `toggleMobileNavExpanded`,
    });
  };

  render() {
    const { introExpanded, isMobile, mobileNavExpanded, screenSize } = this.props;

    const showDesktopVersion = !isMobile;

    return (
      <ShortInfoStyles>
        <div className={`mobile-nav-container`}>
          <span className={`name ${introExpanded ? `intro` : ``}`}>Matt Blaul</span>
          {!introExpanded &&
          isMobile && (
            <div className="button-container">
              <Button
                classNames={`
                  nav-button 
                  ${introExpanded ? `intro` : ``}
                  ${mobileNavExpanded ? `nav-expanded` : ``}
                `}
                onClick={this.handleNavButtonClick}
              >
                <SVG name="menu-icon" />
              </Button>
            </div>
          )}
        </div>
        {showDesktopVersion && <ActionShotStyles />}
        <div className={`short-description ${introExpanded ? `intro` : ``}`}>
          Web Developer, Cat Fanatic, Michigander
        </div>
        {showDesktopVersion &&
        !introExpanded && (
          <div className={`social-media-links`}>
            <a href="https://www.github.com/mblaul">
              <SVG name="github-icon" width={36} height={36} viewBox={`0 0 512 512`} />
            </a>
            <a href="https://www.linkedin.com/in/mblaul">
              <SVG name="linkedin-icon" width={36} height={36} viewBox={`0 0 512 512`} />
            </a>
          </div>
        )}

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
  // State of the intro
  introExpanded: PropTypes.bool,

  // State of the mobile nav
  mobileNavExpanded: PropTypes.bool,

  // Current screen size of the app
  screenSize: PropTypes.string,

  // Dispatch function to update global state
  dispatch: PropTypes.func,
};

export default ShortInfo;
