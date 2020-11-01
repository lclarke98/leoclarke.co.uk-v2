class CExpand {
	constructor(Id,showAtStart) {
		this.element = document.getElementById(Id);

		if (showAtStart) {
			this.show();
		}
		else {
			this.hide();
		}
	}

	show() {
		this.element.style.display = "block";
	}

	hide() {
		this.element.style.display = "none";
	}

	toggle() {
		if (this.element.style.display === "none") {
			this.show();
		}
		else {
			this.hide();
		}
	}
}

////////////////////////////////////////////////////////////
var projectExpand = {};
var falsePositive0 = false;
var falsePositive1 = false;
var falsePositive2 = false;

function open(){
	if (window.location.href === "http://leoclarke.co.uk/pi.html#web" || window.location.href === "http://leoclarke.co.uk/code.html#note"){
		falsePositive0 = true;
	}
	else if (window.location.href === "http://leoclarke.co.uk/pi.html#nas" || window.location.href === "http://leoclarke.co.uk/code.html#todo"){
		falsePositive1 = true;
	}
	else if (window.location.href === "http://leoclarke.co.uk/pi.html#ad" || window.location.href === "http://leoclarke.co.uk/code.html#backup"){
		falsePositive2 = true;
	}
}

function projectToggle(projectID,showAtStart) {
	projectExpand[projectID] = new CExpand("descToggle" + projectID,showAtStart);

	document.getElementById(projectID).onclick = function() {
		projectExpand[projectID].toggle();
	};
}
