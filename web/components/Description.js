import { useState } from "react";
import styled from "styled-components";

const RolesStyles = styled.div`
  color: black;
  margin: 0 var(--spacing-md);
  padding: 0 var(--spacing-md);
  font-family: "Yeseva One";
  font-size: 1.2em;
  line-height: 9rem;
  font-weight: 600;
  font-style: normal;
  background: var(--colors-off-white);
  border-radius: var(--spacing-md);
  text-shadow: none;
  text-decoration: underline;
  text-decoration-color: var(--colors-light-blue);
  transition: width 0.1s ease;

  .slider {
    opacity: 0;
    transition: opacity 0.2s linear;
    &.fade-in {
      opacity: 1;
    }
  }
`;

const Roles = () => {
  const roles = [
    "a full-stack developer",
    "an aspiring designer",
    "a drummer",
    "a lifelong student",
    "a gamer",
  ];

  const [currentRole, setCurrentRole] = useState(0);
  const [currentClassName, setCurrentClassName] = useState("");

  setTimeout(() => {
    switch (currentClassName) {
      case "":
        setCurrentClassName("fade-in");
        break;
      case "fade-in":
        setCurrentClassName("");
        const nextRole = currentRole === roles.length - 1 ? 0 : currentRole + 1;
        setTimeout(() => {
          setCurrentRole(nextRole);
        }, 600);
        break;
    }
  }, 1500);

  return (
    <RolesStyles>
      <div className={`slider ${currentClassName}`}>{roles[currentRole]}</div>
    </RolesStyles>
  );
};

const DescriptionStyles = styled.div`
  margin-top: var(--spacing-xl);
  .description {
    display: inline-flex;
    align-items: baseline;
    font-size: 2.4em;
  }
`;

const Description = () => {
  return (
    <DescriptionStyles>
      <p className="description">
        I'm <Roles />
      </p>
    </DescriptionStyles>
  );
};

export default Description;
