const formatDuration = (duration) => {
	const format = (num) => {
		if (num < 10) {
			num = '0' + num;
		}

		return num;
	};

	let hours = duration / 60;
	let h = Math.floor(hours);
	let m = Math.floor((hours.toFixed(2) - h) * 60);
	let d = format(h) + ':' + format(m) + ' hours';

	return d;
};

export default formatDuration;
