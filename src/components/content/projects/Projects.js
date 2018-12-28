import React, { Component, Fragment } from 'react';
import Project from './Project';

class Projects extends Component {
  render() {
    const projects = ['website', 'skypi'];
    return (
      <>
        {projects.map(link => {
          return <Project />;
        })}
      </>
    );
  }
}

export default Projects;
