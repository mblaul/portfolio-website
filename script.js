// Animations
var elementsToReveal = [
	document.querySelector(".column-1"),
	document.querySelector(".column-3")
];

function init() {
	elementsToReveal.forEach(element => {
		revealElement(element);
		tweenElement(element);
	});
}

function revealElement(element) {
	const box = element;
	const props = {
		visible: {
			opacity: 1,
			transition: { duration: 1500 }
		},
		hidden: { opacity: 0 },
		initialPose: "hidden"
	};

	let isVisible = false;
	const poser = pose(box, props);
	poser.set(isVisible ? "hidden" : "visible");
}

function tweenElement(element) {
	const { easing, tween, styler } = window.popmotion;
	const divStyler = styler(element);
	tween({
		from: -40,
		to: { y: 0 },
		duration: 1000,
		ease: easing.backOut
	}).start(divStyler.set);
}

// Modal setup
// Get the modal
var modal = document.querySelector(".modal");
// Get the button that opens the modal
var smarthelphomebtn = document.getElementById("smarthelphomebtn");
var devconnectorbtn = document.getElementById("devconnectorbtn");
var apostrophybtn = document.getElementById("apostrophybtn");
var statsdashboardbtn = document.getElementById("statsdashboardbtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function displayModal() {
	modal.style.display = "block";
	tweenElement(document.querySelector(".modal-box"));
}

smarthelphomebtn.onclick = function() {
	loadModalInfo(smarthelphomeModal);
	displayModal();
};

devconnectorbtn.onclick = function() {
	loadModalInfo(devconnectorModal);
	displayModal();
};

apostrophybtn.onclick = function() {
	loadModalInfo(apostrophyModal);
	displayModal();
};

statsdashboardbtn.onclick = function() {
	loadModalInfo(statsdashboardModal);
	displayModal();
};

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// };

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};

function Modal(title, tech, description, link) {
	this.title = title;
	this.tech = tech;
	this.description = description;
	this.link = link;
}

var smarthelphomeModal = new Modal(
	"SmartHelpHome",
	"<li>JavaScript</li><li>NodeJS</li><li>Express</li><li>MongoDB</li><li>Linux</li>",
	"<p>This project was devloped to help Alzheimer's patients by utilizing smart home devices. For my part of this project I developed an API that the smart home devices used to store data in a NoSQL database.</p>",
	"<a href='https://github.com/mblaul/smarthelphome'>View on GitHub <i class='fab fa-github'></i></a>"
);

var devconnectorModal = new Modal(
	"DevConnect",
	"<li>HTML5</li><li>CSS3</li><li>JavaScript</li><li>NodeJS</li><li>Express</li><li>React</li><li>MongoDB</li>",
	"<p>DevConnect is a full stack web application built as a part of coursework for an online class. The goal of the web application was to create a social network for developers.</p>",
	"<a href='https://github.com/mblaul/devconnect'>View on GitHub <i class='fab fa-github'></i></a>"
);

var apostrophyModal = new Modal(
	"Apostrophy",
	"<li>HTML5</li><li>CSS3</li><li>Python</li><li>Flask</li><li>MySQL</li>",
	"An application to allow high school students to prepare and study for the ACT / SAT. This app allowed users to register and takes practices tests of varying difficulty levels.",
	"<a href='https://github.com/mblaul/apostrophy'>View on GitHub <i class='fab fa-github'></i></a>"
);

var statsdashboardModal = new Modal(
	"StatsDashboard",
	"<li>HTML5</li><li>CSS3</li><li>NodeJS</li><li>Express</li><li>MySQL / MSSQL</li>",
	"A skeleton application for pulling in an displaying data in charts. Utilizes D3.js to take data from a SQL database and transform into a graphical view.",
	"<a href='https://github.com/mblaul/analyticsdashboard'>View on GitHub <i class='fab fa-github'></i></a>"
);

function loadModalInfo(projectModal) {
	document.getElementById("modal-title").innerHTML = projectModal.title;
	document.getElementById("modal-link").innerHTML = projectModal.link;
	document.getElementById("modal-tech").innerHTML = projectModal.tech;
	document.getElementById("modal-description").innerHTML =
		projectModal.description;
}
window.onload = init;
