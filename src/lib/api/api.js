import axios from 'axios';

import endpoints from './endpoints';
import getOptions from './get-options';

const api = {
	getUser: async (token) =>
		axios.get(endpoints.GET_USER_INFO, getOptions(token)),

	logout: async (token) =>
		axios.delete(endpoints.LOGOUT_USER, getOptions(token)),

	login: async (user) => axios.post(endpoints.LOGIN_USER, user),

	register: async (user) => axios.post(endpoints.REGISTER_USER, user),

	getCoursesData: async (token) =>
		axios.get(endpoints.ALL_COURSES, getOptions(token)),

	getAuthorsData: async (token) =>
		axios.get(endpoints.ALL_AUTHORS, getOptions(token)),

	addAuthor: async (author, token) =>
		axios.post(endpoints.ADD_NEW_AUTHOR, author, getOptions(token)),

	addCourse: async (course, token) =>
		axios.post(endpoints.ADD_NEW_COURSE, course, getOptions(token)),

	updateCourse: async (course, id, token) =>
		axios.put(endpoints.CURRENT_COURSE(id), course, getOptions(token)),

	removeCourse: async (id, token) =>
		axios.delete(endpoints.CURRENT_COURSE(id), getOptions(token)),
};

export default api;
