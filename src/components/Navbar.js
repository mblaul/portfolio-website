import React, { Component } from "react";

class Navbar extends Component {
	render() {
		return (
			<div>
				<nav className="navbar fixed-top navbar-dark bg-dark navbar-expand-lg">
					<a className="navbar-brand" href="/">
						mb
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<a className="nav-link" href="/">
									Home <span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#projects">
									Projects
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#experience">
									Experience
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#education">
									Education
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navbar;
