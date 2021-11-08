import { actionTypes } from './actionTypes';

const userInitialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
	role: '',
	error: null,
	loading: false,
};

const user = (state = userInitialState, { type, payload }) => {
	switch (type) {
		case actionTypes.START_LOGIN_USER:
			return {
				...state,
				error: null,
				loading: true,
			};

		case actionTypes.LOGIN_USER_SUCCESS:
			return {
				...state,
				isAuth: true,
				token: payload.result,
				error: null,
				loading: false,
			};
		case actionTypes.LOGIN_USER_ERROR:
			return {
				...state,
				error: payload,
				loading: false,
			};
		case actionTypes.LOGOUT_USER:
			return userInitialState;
		case actionTypes.START_GET_USER:
			return {
				...state,
				error: null,
				loading: true,
			};
		case actionTypes.GET_USER_SUCCESS:
			return {
				...state,
				isAuth: true,
				name: payload.name,
				email: payload.email,
				role: payload.role,
				token: payload.token,
				error: null,
				loading: false,
			};
		case actionTypes.GET_USER_ERROR:
			return {
				...state,
				error: payload,
				loading: false,
			};
		default:
			return state;
	}
};

export default user;
