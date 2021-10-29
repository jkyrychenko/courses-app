import {
	addCourseSuccess,
	updateCourseSuccess,
	deleteCourseSuccess,
	showError,
} from './actionCreators';
import api from '../../lib/api/api';

export const addCourse = (course, token) => async (dispatch) => {
	api
		.addCourse(course, token)
		.then((response) => dispatch(addCourseSuccess(response.data.result)))
		.catch((error) => dispatch(showError(error)));
};

export const updateCourse = (course, id, token) => async (dispatch) => {
	api
		.updateCourse(course, id, token)
		.then((response) => dispatch(updateCourseSuccess(response.data.result)))
		.catch((error) => dispatch(showError(error)));
};

export const deleteCourse = (course, token) => async (dispatch) => {
	api
		.removeCourse(course, token)
		.then(dispatch(deleteCourseSuccess(course)))
		.catch((error) => dispatch(showError(error)));
};
