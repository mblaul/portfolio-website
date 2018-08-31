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
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
	loadModalInfo();
	modal.style.display = "block";
	tweenElement(document.querySelector(".modal-box"));
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
};

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
	"<li>NodeJS</li><li>Express</li><li>MongoDB</li>",
	"An api for smart home devices",
	"<a href='https://github.com/mblaul/smarthelphome'>View on GitHub   <i class='fab fa-github'></i></a>"
);

function loadModalInfo() {
	document.getElementById("modal-title").innerHTML = smarthelphomeModal.title;
	document.getElementById("modal-link").innerHTML = smarthelphomeModal.link;
	document.getElementById("modal-tech").innerHTML = smarthelphomeModal.tech;
	document.getElementById("modal-description").innerHTML =
		smarthelphomeModal.description;
}
window.onload = init;
