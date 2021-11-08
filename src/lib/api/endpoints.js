const apiBaseUrl = 'http://localhost:3000';

const endpoints = {
	GET_USER_INFO: `${apiBaseUrl}/users/me`,
	LOGOUT_USER: `${apiBaseUrl}/logout`,
	LOGIN_USER: `${apiBaseUrl}/login`,
	REGISTER_USER: `${apiBaseUrl}/register`,
	ADD_NEW_AUTHOR: `${apiBaseUrl}/authors/add`,
	ADD_NEW_COURSE: `${apiBaseUrl}/courses/add`,
	ALL_COURSES: `${apiBaseUrl}/courses/all`,
	ALL_AUTHORS: `${apiBaseUrl}/authors/all`,
	CURRENT_COURSE: (id) => `${apiBaseUrl}/courses/${id}`,
};

export default endpoints;
