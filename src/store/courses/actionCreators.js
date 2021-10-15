import { actionTypes } from './actionTypes';

export const setCourses = (courses) => {
	return {
		type: actionTypes.SET_COURSES,
		payload: courses,
	};
};

export const addCourse = (course) => {
	return {
		type: actionTypes.ADD_COURSE,
		payload: course,
	};
};

export const deleteCourse = (course) => {
	return {
		type: actionTypes.DELETE_COURSE,
		payload: course,
	};
};
