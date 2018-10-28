function modal() {
	const info = document.querySelector(".info"),
		overlay = document.querySelector(".overlay"),
		body = document.querySelector("body");


	function showModal(modBtn) {
		overlay.style.display = "block";
		info.classList.add("more-splash");
		document.body.style.overflow = "hidden";
	}

	function hideModal(modCloseBtn) {
		overlay.style.display = "none";
		info.classList.remove("more-splash");
		document.body.style.overflow = "";

		let statusMessage = document.querySelector('.status');
		statusMessage.innerHTML = '';
	}
	body.addEventListener("click", e => {
		let target = e.target;

		// Modal

		if (target && target.classList.contains("more")) {
			showModal(target);
		}
		if (target && target.classList.contains("popup-close")) {
			hideModal(target);
		}
		if (target && target.classList.contains("description-btn")) {
			showModal(target);
		}
	});
}

export default modal;