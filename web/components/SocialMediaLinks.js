import styled from "styled-components";
import SVG from "./SVG";

const SocialMediaLinksStyles = styled.div`
  display: inline-flex;
  align-items: center;
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
  }
`;

const BetterHR = () => (
  <svg height="5" width="100%">
    <line x1="0" y1="0" x2="100%" y2="0" style={{ strokeWidth: 4 }} />
  </svg>
);

const SocialMediaLinks = () => {
  return (
    <SocialMediaLinksStyles>
      <BetterHR />
      <div className="icons-row">
        <SVG name="github-icon" />
        <SVG name="dev-to-icon" />
        <SVG name="linkedin-icon" />
      </div>
      <BetterHR />
    </SocialMediaLinksStyles>
  );
};

export default SocialMediaLinks;
