import { actionTypes } from './actionTypes';

export const loginUser = (user) => {
	return {
		type: actionTypes.LOGIN_USER,
		payload: user,
	};
};

export const logoutUser = (user) => {
	return {
		type: actionTypes.LOGOUT_USER,
		payload: user,
	};
};
