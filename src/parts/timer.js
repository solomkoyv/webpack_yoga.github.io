function timer() {
	let deadLine = "2018-12-22";

	function getTimeRemaninig(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor((t / 1000) % 60),
			minutes = Math.floor((t / 1000 / 60) % 60),
			hours = Math.floor(t / (1000 * 60 * 60));
		// hours = Math.floor((t / 1000 / 60 / 60) % 24),
		// days = Math.floor((t / (1000 * 60 * 60 * 24)));

		return {
			total: t,
			hours: hours,
			minutes: minutes,
			seconds: seconds
		};
	}

	function setCloack(id, endtime) {
		let timer = document.getElementById(id),
			hours = timer.querySelector(".hours"),
			minutes = timer.querySelector(".minutes"),
			seconds = timer.querySelector(".seconds"),
			timeInterval = setInterval(updateClock, 1000);

		function updateClock() {
			let t = getTimeRemaninig(endtime),
				h = t.hours.toString(),
				m = t.minutes.toString(),
				s = t.seconds.toString();

			if (
				t.total <= 0 &&
				t.hours <= 0 &&
				t.minutes <= 0 &&
				t.seconds <= 0
			) {
				hours.textContent = "00";
				minutes.textContent = "00";
				seconds.textContent = "00";
				clearInterval(timeInterval);
			} else {
				hours.textContent = h.length < 2 ? `0${h}` : h;
				minutes.textContent = m.length < 2 ? `0${m}` : m;
				seconds.textContent = s.length < 2 ? `0${s}` : s;
			}
		}
	}
	setCloack("timer", deadLine);
}
export default timer;