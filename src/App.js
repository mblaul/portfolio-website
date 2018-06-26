import React, { Component } from "react";
import { Row, Col } from "antd";
import "./App.css";

import TopNavbar from "./components/TopNavbar";
import Hero from "./components/Hero";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Row>
					<Col>
						<TopNavbar />
						<Hero />
					</Col>
				</Row>
			</div>
		);
	}
}

export default App;
