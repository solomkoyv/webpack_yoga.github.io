function tabs() {
	const tabContent = document.querySelectorAll(".info-tabcontent"),
		body = document.querySelector("body"),
		tab = document.querySelectorAll(".info-header-tab");

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove("show");
			tabContent[i].classList.add("hide");
		}
	}
	hideTabContent(1);

	function showTabContent(b) {
		if (tabContent[b].classList.contains("hide")) {
			tabContent[b].classList.remove("hide");
			tabContent[b].classList.add("show");
		}
	}
	body.addEventListener("click", e => {
		let target = e.target;

		if (target && target.classList.contains("info-header-tab")) {
			tab.forEach(function (e, i) {
				if (target == e) {
					hideTabContent(0);
					showTabContent(i);
				}
			});
		}
	});
}

export default tabs;