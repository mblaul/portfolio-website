import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StateContext } from './state';
import styled from 'styled-components';

import { ShortInfoStyles } from './styles/ShortInfoStyles';

import Button from './common/Button';
import SVG from './common/SVG';

const ActionShotStyles = styled.div`
  margin: auto;
  max-height: 25vw;
  max-width: 25vw;
  img {
    border: 2px solid ${props => props.theme.color.main};
    box-shadow: 0px 0px 15px 0px ${props => props.theme.color.grey.dark};
    height: 100%;
    width: 100%;
  }
`;

class ShortInfo extends Component {
  static contextType = StateContext;

  handleOpenButtonClick = () => {
    const [ , dispatch ] = this.context;

    localStorage.setItem('introExpanded', 'false');

    dispatch({
      type: `toggleIntroExpanded`,
    });
  };

  handleNavButtonClick = () => {
    const [ , dispatch ] = this.context;

    dispatch({
      type: `toggleMobileNavExpanded`,
    });
  };

  render() {
    return (
      <ShortInfoStyles>
        <div className={`top-line`}>
          <span className={`name`}>Matt Blaul</span>
          <div className={`button-container`}>
            <Button classNames={`nav-button`} onClick={this.handleNavButtonClick}>
              <SVG name={`menu-icon`} />
            </Button>
          </div>
        </div>
        <ActionShotStyles>
          <img src="https://res.cloudinary.com/dwqxvwksm/image/upload/v1574214067/headshot.jpg" alt="A pic of me!" />
        </ActionShotStyles>
        <div className={`short-description`}>Web Developer, Animal Lover, Michigander</div>
        <div className={`social-media-links`}>
          <a href="https://www.github.com/mblaul" target="_blank">
            <SVG name="github-icon" width={36} height={36} viewBox={`0 0 512 512`} />
          </a>
          <a href="https://www.linkedin.com/in/mblaul" target="_blank">
            <SVG name="linkedin-icon" width={36} height={36} viewBox={`0 0 512 512`} />
          </a>
          <a href="https://dev.to/mblaul" target="_blank">
            <SVG name="dev-to-icon" width={52} height={52} viewBox={`0 0 32 32`} />
          </a>
        </div>
        <Button classNames="see-more-button" onClick={this.handleOpenButtonClick}>
          See More
        </Button>
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
