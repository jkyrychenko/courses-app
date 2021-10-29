import { addAuthorSuccess, showError } from './actionCreators';
import api from '../../lib/api/api';

export const addAuthor = (author, token) => async (dispatch) => {
	api
		.addAuthor(author, token)
		.then((response) => dispatch(addAuthorSuccess(response.data.result)))
		.catch((error) => dispatch(showError(error)));
};
