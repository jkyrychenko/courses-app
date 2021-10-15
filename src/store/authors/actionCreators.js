import { actionTypes } from './actionTypes';

export const setAuthors = (authors) => {
	return {
		type: actionTypes.SET_AUTHORS,
		payload: authors,
	};
};

export const addAuthor = (author) => {
	return {
		type: actionTypes.ADD_AUTHOR,
		payload: author,
	};
};
