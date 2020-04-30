import { useState } from "react";
import styled from "styled-components";

const RolesStyles = styled.div`
  color: black;
  display: inline-flex;
  margin: 0 var(--spacing-md);
  padding: 0 var(--spacing-md);
  font-family: "Yeseva One";
  font-size: 2rem;
  font-weight: 600;
  font-style: normal;
  background: var(--colors-off-white);
  border-radius: var(--spacing-md);
  text-shadow: none;
  text-decoration: underline;
  text-decoration-color: var(--colors-light-blue);
  width: 10em;

  .slider {
    width: 100%;
    align-self: center;
    text-align: center;
    opacity: 0;
    transition: all 0.3s linear;

    &.fade-in {
      opacity: 1;
    }
  }
`;

const Roles = () => {
  const roles = [
    "a full-stack developer",
    "an aspiring designer",
    "a lifelong student",
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
  }, 1750);

  return (
    <RolesStyles>
      <span className={`slider ${currentClassName}`}>{roles[currentRole]}</span>
    </RolesStyles>
  );
};

const DescriptionStyles = styled.div`
  margin-top: var(--spacing-xl);
  display: block;

  .description {
    display: inline-flex;
    font-size: 1.2rem;

    @media only screen and (max-width: 992px) {
      grid-template-columns: 1fr;

      p,
      div {
        justify-self: center;
      }
    }
  }

  @media only screen and (max-width: 992px) {
    margin-top: var(--spacing-md);
  }
`;

const Description = () => {
  return (
    <DescriptionStyles>
      <div className="description">
        <p>I am </p>
        <Roles />
        <p>who's passionate about building great web experiences.</p>
      </div>
      <br />
      <div className="description">
        <p>I specialize in:</p>
      </div>
    </DescriptionStyles>
  );
};

export default Description;
