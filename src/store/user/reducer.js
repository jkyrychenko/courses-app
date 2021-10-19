import { actionTypes } from './actionTypes';

const userInitialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
	role: '',
};

const courses = (state = userInitialState, { type, payload }) => {
	switch (type) {
		case actionTypes.LOGIN_USER:
			return {
				...state,
				isAuth: true,
				name: payload.name,
				email: payload.email,
				token: payload.token,
				role: payload.role,
			};
		case actionTypes.LOGOUT_USER:
			return userInitialState;
		default:
			return state;
	}
};

export default courses;
