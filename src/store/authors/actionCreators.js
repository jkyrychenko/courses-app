import { actionTypes } from './actionTypes';

export const setAuthors = (authors) => {
	return {
		type: actionTypes.SET_AUTHORS,
		payload: authors,
	};
};

export const addAuthorSuccess = (authors) => {
	return {
		type: actionTypes.ADD_AUTHOR,
		payload: authors,
	};
};

export const showError = (error) => {
	return {
		type: actionTypes.SHOW_ERROR,
		payload: error,
	};
};
