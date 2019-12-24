import React, { Component } from 'react';
import { StateContext } from './state';
import { mediaQueryBreakpoints } from './config/constants';
import styled from 'styled-components';

import { ShortInfoStyles } from './styles/ShortInfoStyles';

import SVG from './common/SVG';

const ActionShotStyles = styled.div`
  margin: auto;
  
  img {
    border: 2px solid ${props => props.theme.color.purple.main};
    box-shadow: 0px 0px 15px 0px ${props => props.theme.color.grey.dark};
    height: 100%;
    width: 100%;
  }

  @media (max-width: ${mediaQueryBreakpoints.med.px}) {
    max-height: 25rem;
    max-width: 25rem;
  }
  
  @media (min-width: ${mediaQueryBreakpoints.med.px}) {
    max-height: 15vw;
    max-width: 15vw;
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
          <>
            <h1 className={`name`}>Matt Blaul</h1>
            <ActionShotStyles>
              <img src="https://res.cloudinary.com/dwqxvwksm/image/upload/v1574214067/headshot.jpg" alt="A pic of me!" />
            </ActionShotStyles>

            <div className={`short-description`}>Web Developer, Animal Lover, Michigander</div>

            <div className={`social-media-links`}>
              <a href="https://www.github.com/mblaul" target="_blank" rel="noopener noreferrer">
                <SVG name="github-icon" width={36} height={36} viewBox={`0 0 512 512`} />
              </a>
              <a href="https://www.linkedin.com/in/mblaul" target="_blank" rel="noopener noreferrer">
                <SVG name="linkedin-icon" width={36} height={36} viewBox={`0 0 512 512`} />
              </a>
              <a href="https://dev.to/mblaul" target="_blank" rel="noopener noreferrer">
                <SVG name="dev-to-icon" width={52} height={52} viewBox={`0 0 32 32`} />
              </a>
            </div>
          </>
      </ShortInfoStyles>
    );
  }
}

export default ShortInfo;
