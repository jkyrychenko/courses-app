import { actionTypes } from './actionTypes';

const authorsInitialState = {
	authors: [],
	error: null,
	loading: false,
};

const authors = (state = authorsInitialState, { type, payload }) => {
	switch (type) {
		case actionTypes.START_FETCH_AUTHORS:
			return {
				...state,
				loading: true,
				error: null,
			};
		case actionTypes.FETCH_AUTHORS_SUCCESS:
			return {
				...state,
				authors: payload,
				loading: false,
				error: null,
			};
		case actionTypes.FETCH_AUTHORS_ERROR:
			return {
				...state,
				loading: false,
				error: payload,
			};
		case actionTypes.ADD_AUTHOR:
			return { ...state, authors: [...state.authors, payload] };
		case actionTypes.SHOW_ERROR:
			return { ...state, error: payload.error };
		default:
			return state;
	}
};

export default authors;
