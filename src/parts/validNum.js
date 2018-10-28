function validNum() {
	const inputsPhone = document.querySelectorAll('input[name="phone"]'),
		inputsCounter = document.querySelectorAll('.counter-block-input');

	// function onlyNumber(input) {
	//     input.onkeydown = function () {
	//         return (this.value = this.value.replace(/[^0-9]/g, ""));
	//     };
	// }
	function onlyNumber(input) {
		input.onkeydown = function () {
			return (this.value = this.value.replace(/[^0-9]/g, ""));
		};
	}
	[...inputsPhone].forEach(elem => onlyNumber(elem));
	[...inputsCounter].forEach(elem => onlyNumber(elem));
}
export default validNum;