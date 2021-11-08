import { actionTypes } from './actionTypes';

export const loginUser = () => ({
	type: actionTypes.START_LOGIN_USER,
});

export const loginUserSuccess = (user) => ({
	type: actionTypes.LOGIN_USER_SUCCESS,
	payload: user,
});

export const loginUserError = (error) => ({
	type: actionTypes.LOGIN_USER_ERROR,
	payload: error,
});

export const logoutUser = () => ({
	type: actionTypes.LOGOUT_USER,
});

export const getUser = () => ({
	type: actionTypes.START_GET_USER,
});

export const getUserSuccess = (user) => ({
	type: actionTypes.GET_USER_SUCCESS,
	payload: user,
});

export const getUserError = (error) => ({
	type: actionTypes.GET_USER_ERROR,
	payload: error,
});
