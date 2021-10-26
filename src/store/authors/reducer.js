import { actionTypes } from './actionTypes';

const authorsInitialState = {
	authors: [],
};

const authors = (state = authorsInitialState, { type, payload }) => {
	switch (type) {
		case actionTypes.SET_AUTHORS:
			return { ...state, authors: payload };
		case actionTypes.ADD_AUTHOR:
			return { ...state, authors: [...state.authors, payload] };
		default:
			return state;
	}
};

export default authors;
