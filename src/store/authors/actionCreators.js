import { actionTypes } from './actionTypes';
import api from '../../lib/api/api';

export const setAuthors = (authors) => {
	return {
		type: actionTypes.SET_AUTHORS,
		payload: authors,
	};
};

export const addAuthor = (author) => async (dispatch) => {
	let response = await api.addAuthor(author);
	dispatch({ type: actionTypes.ADD_AUTHOR, payload: response });
};
