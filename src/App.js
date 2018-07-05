import React, { Component } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Section from "./components/Section";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Content />
        <Section />
      </div>
    );
  }
}

export default App;
