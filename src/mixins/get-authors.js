const getAuthorsById = (authors, authorsList) => {
	if (!authors || authorsList.length < 1) {
		return [];
	}

	const courseAuthors = authors.reduce((names, author) => {
		let name = authorsList.find((item) => item.id === author).name;
		names.push(name);
		return names;
	}, []);

	return courseAuthors;
};

export default getAuthorsById;
