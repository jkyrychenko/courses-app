import { getUserSuccess } from './actionCreators';
import api from '../../lib/api/api';

export const getUserData = (token) => async (dispatch) => {
	api
		.getUser(token)
		.then((response) => dispatch(getUserSuccess(response.data)))
		.catch((error) => console.log(error));
};
