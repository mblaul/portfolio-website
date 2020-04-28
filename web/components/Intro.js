import styled from "styled-components";
import Description from "./Description";
import SocialMediaLinks from "./SocialMediaLinks";

const IntroContainerStyles = styled.div`
  max-width: 100%;
  height: 100%;
  background: var(--colors-black);
  border-radius: var(--spacing-lg);
  overflow-y: auto;
`;

const IntroStyles = styled.div`
  text-shadow: 0px 0px 2.5rem var(--colors-off-black);

  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;

  .left-pane {
    margin: calc(var(--spacing-xl) * 2);
    .header {
      display: flex;
      .headshot {
        border: 0.75rem solid var(--colors-off-white);
        border-radius: 50%;
        max-width: 12.5vw;
        max-height: 12.5vw;
      }
      .header-text {
        margin-top: var(--spacing-xl);
        margin-left: var(--spacing-xl);
        .super-large {
          font-size: 3.2vw;
          letter-spacing: -4px;
          line-height: 3.25vw;
        }
        .name {
          font-size: 4.5vw;
        }
      }
    }
  }

  .right-pane {
    background-image: url("/bg.jpg");
    background-size: cover;
    height: 100%;
  }
`;

const Intro = () => {
  return (
    <IntroContainerStyles>
      <IntroStyles>
        <div className="left-pane">
          <div className="header">
            <img
              className="headshot"
              src="https://res.cloudinary.com/dwqxvwksm/image/upload/v1574214067/headshot.jpg"
              alt="A picture of Matt"
            />

            <div className="header-text">
              <div className="super-large">
                <span>Hi, I'm</span> <br />
                <span className="name">Matt Blaul</span>
              </div>
              <h5>Web developer / Michigander / Animal lover</h5>
            </div>
          </div>
          <SocialMediaLinks />
          <Description />
        </div>
        <div className="right-pane"></div>
      </IntroStyles>
    </IntroContainerStyles>
  );
};

export default Intro;
