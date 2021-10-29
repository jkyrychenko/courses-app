import { actionTypes } from './actionTypes';

export const setCourses = (courses) => {
	return {
		type: actionTypes.SET_COURSES,
		payload: courses,
	};
};

export const addCourseSuccess = (course) => {
	return {
		type: actionTypes.ADD_COURSE,
		payload: course,
	};
};

export const updateCourseSuccess = (course) => {
	return {
		type: actionTypes.UPDATE_COURSE,
		payload: course,
	};
};

export const deleteCourseSuccess = (course) => {
	return {
		type: actionTypes.DELETE_COURSE,
		payload: course,
	};
};

export const showError = (error) => {
	return {
		type: actionTypes.SHOW_ERROR,
		payload: error,
	};
};
