import React from 'react';
import styled from 'styled-components';

const AboutStyles = styled.div`
  margin: 0 15vw 0 0;
  color: white;
  font-size: 1.3em;
`;

const About = () => {
  return (
    <AboutStyles>
      <p>Hi, I'm Matt!</p>
      <p>I'm a web developer from Dearborn, Michigan.</p>
      <p>
        I've always had a fun working on computers. That passion lead me to pursue a degree in Information Technology
        from Oakland University in Rochester Hills, Michigan.
      </p>
      <p>
        I specialize in these technologies currently:
        <ul>
          <li>Javascript (React, NodeJS, Vanilla ES6+)</li>
          <li>Ruby (on Rails)</li>
          <li>SQL</li>
        </ul>
      </p>
    </AboutStyles>
  );
};

export default About;
