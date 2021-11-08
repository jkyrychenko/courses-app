import * as actions from './actionCreators';
import api from '../../lib/api/api';

export const addAuthor = (author, token) => async (dispatch) => {
	api
		.addAuthor(author, token)
		.then((response) =>
			dispatch(actions.addAuthorSuccess(response.data.result))
		)
		.catch((error) => dispatch(actions.showError(error)));
};

export const fetchAuthors = (token) => async (dispatch) => {
	dispatch(actions.startFetchAuthors());

	api
		.getAuthorsData(token)
		.then((response) =>
			dispatch(actions.fetchAuthorSuccess(response.data.result))
		)
		.catch((error) => dispatch(actions.fetchAuthorError(error.response)));
};
