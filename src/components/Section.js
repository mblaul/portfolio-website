import React, { Component } from "react";

export default class Section extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h2>Projects</h2>
            <hr />
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <h2>Experience</h2>
            <hr />
          </div>
          <div className="col-6">
            <h2>Hello World</h2>
            <hr />
          </div>
        </div>
      </div>
    );
  }
}
