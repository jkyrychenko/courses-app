import { actionTypes } from './actionTypes';

export const addAuthorSuccess = (authors) => ({
	type: actionTypes.ADD_AUTHOR,
	payload: authors,
});

export const showError = (error) => ({
	type: actionTypes.SHOW_ERROR,
	payload: error,
});

export const startFetchAuthors = () => ({
	type: actionTypes.START_FETCH_AUTHORS,
});

export const fetchAuthorSuccess = (authors) => ({
	type: actionTypes.FETCH_AUTHORS_SUCCESS,
	payload: authors,
});

export const fetchAuthorError = (error) => ({
	type: actionTypes.FETCH_AUTHORS_ERROR,
	payload: error,
});
