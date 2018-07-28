import React, { Component } from "react";
import Projects from "./Projects";

export default class Section extends Component {
  render() {
    return (
      <div className="col-md-12">
        <h1 className="display-3" id="skills">
          Skills <hr />
        </h1>
        <div className="container">
          <div className="row justify-content-center" id="skills">
            <div>
              <p className="p-4" style={{ width: "350px" }}>
                NodeJS / Express<br />
                React<br />
                MongoDB<br />
                MySQL / MSSQL<br />
              </p>
            </div>
            <div>
              <p className="p-4" style={{ width: "350px" }}>
                Python<br />
                Docker<br />
                Linux / Windows / macOS<br />
                And much more!<br />
              </p>
            </div>
          </div>
        </div>
        <Projects />
        <hr />
        <h1 className="display-4" id="experience">
          Professional Experience
        </h1>
        <div className="row inline-block-center">
          <div className="col-md-12">
            <h2 className="lead display-5">IT Specialist</h2>
            Hello
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <h2>Education</h2>
            <hr />
          </div>
        </div>
      </div>
    );
  }
}
