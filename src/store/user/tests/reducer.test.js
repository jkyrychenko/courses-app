import { actionTypes } from '../actionTypes';
import user from '../reducer';

describe('User reducer', () => {
	test('should return the initial state', () => {
		expect(user(undefined, {})).toEqual({
			isAuth: false,
			name: '',
			email: '',
			token: '',
			role: '',
			error: null,
			loading: false,
		});
	});

	test('should return initial state after logout', () => {
		const prevState = {
			isAuth: true,
			name: 'Name',
			email: 'email@test.com',
			token: 'token',
			role: 'admin',
			error: null,
			loading: false,
		};
		expect(user(prevState, { type: actionTypes.LOGOUT_USER })).toEqual({
			isAuth: false,
			name: '',
			email: '',
			token: '',
			role: '',
			error: null,
			loading: false,
		});
	});

	test('should return iuser state after login', () => {
		const userResponse = {
			isAuth: true,
			name: 'Name',
			email: 'email@test.com',
			token: 'token',
			role: 'admin',
			error: null,
			loading: false,
		};
		expect(
			user(undefined, {
				type: actionTypes.GET_USER_SUCCESS,
				payload: userResponse,
			})
		).toEqual({
			isAuth: true,
			name: 'Name',
			email: 'email@test.com',
			token: 'token',
			role: 'admin',
			error: null,
			loading: false,
		});
	});
});
