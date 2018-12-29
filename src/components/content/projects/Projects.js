import React, { Component, Fragment } from 'react';
import Project from './Project';

class Projects extends Component {
  render() {
    const headers = ['website', 'skypi', 'apostrophy'];
    return (
      <>
        {headers.map(header => {
          return <Project header={header} />;
        })}
      </>
    );
  }
}

export default Projects;
