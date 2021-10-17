import axios from 'axios';

const api = {
	getUser: function () {
		const endpoint = 'http://localhost:3000/users/me';
		const options = {
			headers: {
				Authorization: localStorage.getItem('userToken'),
			},
		};
		return new Promise((resolve, reject) => {
			axios
				.get(endpoint, options)
				.then((response) => {
					resolve(response.data);
				})
				.catch((reason) => reject(reason));
		});
	},

	logout: function () {
		const endpoint = 'http://localhost:3000/logout';
		const options = {
			headers: {
				Authorization: localStorage.getItem('userToken'),
			},
		};
		return new Promise((resolve, reject) => {
			axios
				.delete(endpoint, options)
				.then(() => resolve())
				.catch((reason) => reject(reason));
		});
	},

	login: function (user) {
		const endpoint = 'http://localhost:3000/login';
		return new Promise((resolve, reject) => {
			axios
				.post(endpoint, user)
				.then((response) => resolve(response.data))
				.catch((reason) => reject(reason));
		});
	},

	register: function (user) {
		const endpoint = 'http://localhost:3000/register';
		return new Promise((resolve, reject) => {
			axios
				.post(endpoint, user)
				.then((response) => resolve(response.data))
				.catch((reason) => reject(reason));
		});
	},

	getCoursesData: function (url) {
		const options = {
			headers: {
				Authorization: localStorage.getItem('userToken'),
			},
		};
		return new Promise((resolve, reject) => {
			axios
				.get(url, options)
				.then((response) => resolve(response))
				.catch((reason) => reject(reason));
		});
	},

	addAuthor: function (author) {
		const endpoint = 'http://localhost:3000/authors/add';
		const options = {
			headers: {
				Authorization: localStorage.getItem('userToken'),
			},
		};
		return new Promise((resolve, reject) => {
			axios
				.post(endpoint, author, options)
				.then((response) => resolve(response.data.result))
				.catch((reason) => reject(reason));
		});
	},

	addCourse: function (course) {
		const endpoint = 'http://localhost:3000/courses/add';
		const options = {
			headers: {
				Authorization: localStorage.getItem('userToken'),
			},
		};
		return new Promise((resolve, reject) => {
			axios
				.post(endpoint, course, options)
				.then((response) => resolve(response.data.result))
				.catch((reason) => reject(reason));
		});
	},

	removeCourse: function (id) {
		const endpoint = `http://localhost:3000/courses/${id}`;
		const options = {
			headers: {
				Authorization: localStorage.getItem('userToken'),
			},
		};
		return new Promise((resolve, reject) => {
			axios
				.delete(endpoint, options)
				.then((response) => resolve(response))
				.catch((reason) => reject(reason));
		});
	},
};

export default api;
