import React, { Component } from "react";

class Content extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <div className="row">
            <div className="col-6">
              <section id="about">
                <h1>Matthew Blaul</h1>
                <p>
                  <ul>
                    <li>Full Stack Web Developer</li>
                    <li>Data Analyst</li>
                    <li>Animal Lover</li>
                  </ul>
                </p>
              </section>
            </div>
            <div className="col-6">
              <img
                src="https://learn.extension.org/assets/avatar_placeholder-4c003c71739be2ed78864bcd49550380.png"
                alt="Avatar"
                width="250"
                height="250"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
