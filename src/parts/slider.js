function slider() {
	let slideIndex = 1,
		slides = document.querySelectorAll('.slider-item'),
		dotsWrap = document.querySelector('.slider-dots'),
		dots = document.querySelectorAll('.dot'),
		body = document.querySelector("body");

	showSlides(slideIndex);

	function showSlides(n) {

		// slideIndex = n > slides.length ? 1 : n;
		// slideIndex = n < 1 ? slides.length : n;

		if (n > slides.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slides.length;
		}


		slides.forEach((item) => item.style.display = 'none');
		dots.forEach((item) => item.classList.remove('dot-active'));

		slides[slideIndex - 1].style.display = 'block';
		dots[slideIndex - 1].classList.add('dot-active');
	}

	function pluseSlides(n) {
		showSlides(slideIndex += n);
	}

	function currentSlide(n) {
		showSlides(slideIndex = n);
	}
	body.addEventListener("click", e => {
		let target = e.target;
		if (target && target.classList.contains('prev')) {
			pluseSlides(-1);
		}
		if (target && target.classList.contains('next')) {
			pluseSlides(1);
		}
		for (let i = 0; i < dots.length + 1; i++) {
			if (target.classList.contains('dot') && target == dots[i - 1]) {
				currentSlide(i);
			}
		}
	});
}
export default slider;