import React, { Component } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Section from "./components/Section";

class App extends Component {
	render() {
		return (
			<div className="App">
				<div id="top">
					<Navbar />
					<Content />
				</div>
				<Section />
			</div>
		);
	}
}

export default App;
