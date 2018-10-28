function forms() {
	let message = {
		loading: `<img src='https://img-fotki.yandex.ru/get/4914/54833049.21/0_803b8_ba6370a6_XS.jpg'>`,
		success: `<img src='https://img-fotki.yandex.ru/get/5113/54833049.22/0_803bd_d6d87b9f_XS.jpg'>`,
		failure: `<img src='https://img-fotki.yandex.ru/get/5810/54833049.22/0_803b9_56e09f93_XS.jpg'>`
	};

	let form = document.querySelector(".main-form"),
		contactForm = document.querySelector("#form"),
		input = document.getElementsByTagName("input"),
		statusMessage = document.createElement("div");

	statusMessage.classList.add("status");

	function sendForm(elem) {
		elem.addEventListener("submit", function (e) {
			e.preventDefault();
			elem.appendChild(statusMessage);

			let formData = new FormData(elem);

			function postData(data) {
				return new Promise(function (resolve, reject) {
					let request = new XMLHttpRequest();

					request.open("POST", "server.php");

					request.setRequestHeader(
						"Content-Type",
						"application/json; charset=utf-8"
					);

					request.onreadystatechange = function () {
						if (request.readyState < 4) {
							resolve();
						} else if (request.readyState === 4) {
							if (request.status == 200 && request.status < 3) {
								resolve();
								// statusMessage.textContent = message.success;
							} else {
								reject();
							}
						}
					};
					request.send(data);
				});
			} // End postData

			function clearInputs() {
				[...input].forEach(elem => (elem.value = ""));
			}
			postData(formData)
				.then(() => (statusMessage.innerHTML = message.loading))
				.then(() => (statusMessage.innerHTML = message.success))
				.catch(() => (statusMessage.innerHTML = message.failure))
				.then(clearInputs);
		});
	}

	sendForm(form);
	sendForm(contactForm);
}

export default forms;