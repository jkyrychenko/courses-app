const isTokenExist = () => {
	if (localStorage.getItem('userToken') !== null) {
		return true;
	} else {
		return false;
	}
};

export default isTokenExist;
