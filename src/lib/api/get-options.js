const getOptions = (token) => {
	return {
		headers: {
			Authorization: token,
		},
	};
};

export default getOptions;
