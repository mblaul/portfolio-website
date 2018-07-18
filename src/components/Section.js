import React, { Component } from "react";
import shs from "../img/smarthelphome-card.jpg";
import dc from "../img/devconnect-card.jpg";

export default class Section extends Component {
	render() {
		return (
			<div className="col-md-12">
				<h1 className="display-4">Projects</h1>
				<div className="row" style={{ textAlign: "center" }}>
					<div className="col-md-4">
						<div className="card" style={{ width: "25rem" }}>
							<img className="card-img-top" src={shs} alt="Card image cap" />
							<div className="card-body">
								<h5 className="card-title">
									<a href="#">SmartHelpHome</a>
								</h5>
								<p className="card-text">
									A Docker containerized NodeJS, Express API for interacting
									with a MongoDB instance. This project is being developed in an
									effort to help Alzheimer's patients manage their home with
									smart home devices.
								</p>
								<a href="#" className="btn btn-primary">
									GitHub
								</a>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="card" style={{ width: "25rem" }}>
							<img className="card-img-top" src={dc} alt="Card image cap" />
							<div className="card-body">
								<h5 className="card-title">
									<a href="#">DevConnect</a>
								</h5>
								<p className="card-text">
									A Udemy full stack MERN development course project.
								</p>
								<a href="#" className="btn btn-primary">
									GitHub
								</a>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="card" style={{ width: "25rem" }}>
							<img className="card-img-top" src={shs} alt="Card image cap" />
							<div className="card-body">
								<h5 className="card-title">
									<a href="#">AposTrophy</a>
								</h5>
								<p className="card-text">
									A Python, Flask, MySQL application created to help students
									study for the ACT/SAT.
								</p>
								<a href="#" className="btn btn-primary">
									GitHub
								</a>
							</div>
						</div>
					</div>
				</div>
				<hr />
				<div className="row">
					<div className="col-sm-12">
						<h2>Experience</h2>
						<hr />
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
