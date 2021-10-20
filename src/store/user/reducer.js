import { actionTypes } from './actionTypes';

const userInitialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
	role: '',
};

const coursesReduser = (state = userInitialState, { type, payload }) => {
	switch (type) {
		case actionTypes.LOGIN_USER:
			return {
				...state,
				isAuth: true,
				name: payload.name,
				email: payload.email,
				token: payload.token,
			};
		case actionTypes.LOGOUT_USER:
			return userInitialState;
		case actionTypes.GET_USER:
			return {
				...state,
				isAuth: true,
				name: payload.name,
				email: payload.email,
				token: localStorage.getItem('userToken'),
				role: payload.role,
			};
		default:
			return state;
	}
};

export default coursesReduser;
