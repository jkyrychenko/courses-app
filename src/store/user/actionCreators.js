import { actionTypes } from './actionTypes';
import api from '../../lib/api/api';

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

export const getUser = () => async (dispatch) => {
	let response = await api.getUser();
	let user = response.result;
	dispatch({ type: actionTypes.GET_USER, payload: user });
};
