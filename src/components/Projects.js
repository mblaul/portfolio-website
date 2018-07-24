import React, { Component } from "react";
import shs from "../img/smarthelphome-card.jpg";
import dc from "../img/devconnect-card.jpg";
import apt from "../img/apostrophy-card.jpg";

export default class Projects extends Component {
	render() {
		return (
			<div>
				<h1 className="display-3" id="projects">
					Projects <hr />
				</h1>
				<div className="row inline-block-center">
					<div className="col-md-4">
						<div className="card">
							<img className="card-img-top" src={shs} alt="Smart help home" />
							<div className="card-body">
								<h5 className="card-title">
									<a href="https://github.com/mblaul/smarthelphome">
										SmartHelpHome
									</a>
								</h5>
								<p className="card-text">
									A Docker containerized NodeJS, Express API for interacting
									with a MongoDB instance. This project is being developed in an
									effort to help Alzheimer's patients manage their home with
									smart home devices.
								</p>
								<a
									href="https://github.com/mblaul/smarthelphome"
									className="btn btn-primary"
								>
									GitHub
								</a>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="card">
							<img className="card-img-top" src={dc} alt="Dev connect" />
							<div className="card-body">
								<h5 className="card-title">
									<a href="https://github.com/mblaul/devconnect">DevConnect</a>
								</h5>
								<p className="card-text">
									A Udemy full stack MERN development course project. A social
									networking website for developers that utilizes a
									NodeJS/Express API backend and a React frontend.
								</p>
								<a
									href="https://github.com/mblaul/devconnect"
									className="btn btn-primary"
								>
									GitHub
								</a>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="card">
							<img className="card-img-top" src={apt} alt="Apos Trophy" />
							<div className="card-body">
								<h5 className="card-title">
									<a href="https://github.com/mblaul/aposTrophy">AposTrophy</a>
								</h5>
								<p className="card-text">
									A Python, Flask, MySQL application created to help students
									study for the ACT/SAT.
								</p>
								<a
									href="https://github.com/mblaul/aposTrophy"
									className="btn btn-primary"
								>
									GitHub
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
