import styled from "styled-components";
import SVG from "./SVG";

const SocialMediaLinksStyles = styled.div`
  width: 100%;
  display: inline-flex;
  align-items: center;
  margin: var(--spacing-md) 0;
  svg {
    stroke: var(--colors-off-white);
    stroke-width: 0.01px;
    fill: var(--colors-off-white);
  }

  .icons-row {
    display: inline-flex;
    align-items: center;
    justify-content: space-evenly;
    flex: 0.5 0.5 50%;
    a:hover {
      svg {
        stroke: #739ff5;
        fill: #739ff5;
      }
      &:first-of-type {
        svg {
          stroke: var(--colors-purple);
          fill: var(--colors-purple);
        }
      }
      &:last-of-type {
        svg {
          stroke: var(--colors-light-blue);
          fill: var(--colors-light-blue);
        }
      }
    }
  }
`;

const BetterHR = () => (
  <svg height="5" width="100%">
    <line x1="0" y1="0" x2="100%" y2="0" style={{ strokeWidth: 4 }} />
  </svg>
);

const SocialLink = ({ link, iconName }) => {
  return (
    <a href={link} className="social-link" target="_blank">
      <SVG name={iconName} />
    </a>
  );
};

const SocialMediaLinks = () => {
  const socialMediaInfo = [
    { link: "https://github.com/mblaul", iconName: "github-icon" },
    { link: "https://dev.to/mblaul", iconName: "dev-to-icon" },
    { link: "https://www.linkedin.com/in/mblaul/", iconName: "linkedin-icon" },
  ];

  return (
    <SocialMediaLinksStyles>
      <BetterHR />
      <div className="icons-row">
        {socialMediaInfo.map((info) => {
          return <SocialLink key={info.iconName} {...info} />;
        })}
      </div>
      <BetterHR />
    </SocialMediaLinksStyles>
  );
};

export default SocialMediaLinks;
