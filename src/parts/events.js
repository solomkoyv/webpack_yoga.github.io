function events() {
	const body = document.querySelector("body"),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		dots = document.querySelectorAll('.dot');

	body.addEventListener("click", e => {
		let target = e.target;


		// Smooth scroll
		if (target && target.matches('a[href*="#"]')) {
			e.preventDefault();

			const blockID = target.getAttribute("href");

			document.querySelector("" + blockID).scrollIntoView({
				block: "start",
				behavior: "smooth"
			});
		}
	});
}

export default events;