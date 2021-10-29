import { actionTypes } from './actionTypes';

const authorsInitialState = {
	authors: [],
	error: '',
};

const authors = (state = authorsInitialState, { type, payload }) => {
	switch (type) {
		case actionTypes.SET_AUTHORS:
			return { ...state, authors: payload };
		case actionTypes.ADD_AUTHOR:
			return { ...state, authors: [...state.authors, payload] };
		case actionTypes.SHOW_ERROR:
			return { ...state, error: payload.error };
		default:
			return state;
	}
};

export default authors;
