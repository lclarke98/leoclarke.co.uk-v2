
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
