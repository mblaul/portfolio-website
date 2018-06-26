import React, { Component } from "react";
import { Col } from "antd";
import { Menu, Icon } from "antd";

class TopNavbar extends Component {
	state = {
		current: "mail"
	};
	handleClick = e => {
		console.log("click ", e);
		this.setState({
			current: e.key
		});
	};

	render() {
		return (
			<Col>
				<Menu
					onClick={this.handleClick}
					selectedKeys={[this.state.current]}
					mode="horizontal"
				>
					<Menu.Item key="mail">
						<Icon type="mail" />Matthew Blaul
					</Menu.Item>
				</Menu>
			</Col>
		);
	}
}

export default TopNavbar;
