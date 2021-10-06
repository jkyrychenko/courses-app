const isFormValid = (
	{ title, description, duration },
	minLenght = 2,
	minDuration = 0
) => {
	if (!title || !title.trim()) {
		alert('Please, fill in all fields!');
		return;
	}
	if (!description.trim() || description?.length < minLenght) {
		alert('Please, fill in all fields!');
		return;
	}
	if (!duration || duration <= minDuration) {
		alert('Please, enter duration of the course in minutes!');
		return;
	}
	return true;
};

export default isFormValid;
