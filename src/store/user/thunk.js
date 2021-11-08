import * as actions from './actionCreators';
import { setToken } from '../../mixins/token';
import api from '../../lib/api/api';

export const loginUser = (user) => async (dispatch) => {
	dispatch(actions.loginUser());

	api
		.login(user)
		.then((response) => {
			const {
				user: { email },
				result,
			} = response.data;

			setToken(result);
			dispatch(actions.loginUserSuccess({ email, result }));
			dispatch(getUserData(result));
		})
		.catch((error) => {
			const errorMessage = error?.response?.data?.result;
			dispatch(actions.loginUserError(errorMessage));
		});
};

export const getUserData = (token) => async (dispatch) => {
	dispatch(actions.getUser());

	api
		.getUser(token)
		.then((response) =>
			dispatch(actions.getUserSuccess({ ...response.data.result, token }))
		)
		.catch((error) => {
			const errorMessage = error?.response?.data?.result;
			dispatch(actions.loginUserError(errorMessage));
		});
};
