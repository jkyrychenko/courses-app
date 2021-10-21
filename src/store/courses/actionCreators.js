import { actionTypes } from './actionTypes';
import api from '../../lib/api/api';

export const setCourses = (courses) => {
	return {
		type: actionTypes.SET_COURSES,
		payload: courses,
	};
};

export const addCourse = (course) => async (dispatch) => {
	let response = await api.addCourse(course);
	dispatch({ type: actionTypes.ADD_COURSE, payload: response });
};

export const updateCourse = (course, id) => async (dispatch) => {
	let response = await api.updateCourse(course, id);
	dispatch({ type: actionTypes.UPDATE_COURSE, payload: response });
};

export const deleteCourse = (course) => async (dispatch) => {
	let response = await api.removeCourse(course);
	if (response.data.successful) {
		dispatch({ type: actionTypes.DELETE_COURSE, payload: course });
	}
};
