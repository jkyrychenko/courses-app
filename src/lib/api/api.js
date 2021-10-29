import axios from 'axios';
import {
	currUserPath,
	logoutPath,
	loginPath,
	registerPath,
	authorAddPath,
	courseAddPath,
	coursePath,
} from './constants';
import getOptions from './get-options';

const api = {
	getUser: function (token) {
		return axios.get(currUserPath, getOptions(token));
	},

	logout: function (token) {
		return new Promise((resolve, reject) => {
			axios
				.delete(logoutPath, getOptions(token))
				.then(() => resolve())
				.catch((reason) => reject(reason));
		});
	},

	login: function (user) {
		return new Promise((resolve, reject) => {
			axios
				.post(loginPath, user)
				.then((response) => resolve(response.data))
				.catch((reason) => reject(reason));
		});
	},

	register: function (user) {
		return new Promise((resolve, reject) => {
			axios
				.post(registerPath, user)
				.then((response) => resolve(response.data))
				.catch((reason) => reject(reason));
		});
	},

	getCoursesData: function (url, token) {
		return new Promise((resolve, reject) => {
			axios
				.get(url, getOptions(token))
				.then((response) => resolve(response))
				.catch((reason) => reject(reason));
		});
	},

	addAuthor: function (author, token) {
		axios.post(authorAddPath, author, getOptions(token));
	},

	addCourse: function (course, token) {
		return axios.post(courseAddPath, course, getOptions(token));
	},

	updateCourse: function (course, id, token) {
		const endpoint = coursePath + id;
		return axios.put(endpoint, course, getOptions(token));
	},

	removeCourse: function (id, token) {
		const endpoint = coursePath + id;
		return new Promise((resolve, reject) => {
			axios
				.delete(endpoint, getOptions(token))
				.then((response) => resolve(response))
				.catch((reason) => reject(reason));
		});
	},
};

export default api;
