// import mockedAuthorsList from '../data/mockedAuthorsList';

const getAuthorsById = (authors) => {
	// const courseAuthors = authors.reduce((names, author) => {
	// 	let name = mockedAuthorsList.find((item) => item.id === author).name;
	// 	names.push(name);
	// 	return names;
	// }, []);

	const courseAuthors = ['Some Author1', 'Some Author2'];

	return courseAuthors;
};

export default getAuthorsById;
