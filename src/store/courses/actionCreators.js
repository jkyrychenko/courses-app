import { actionTypes } from './actionTypes';

export const startFetchCourses = () => ({
	type: actionTypes.FETCH_COURSES_START,
});

export const fetchCoursesSuccess = (courses) => ({
	type: actionTypes.FETCH_COURSES_SUCCESS,
	payload: courses,
});

export const fetchCoursesError = (error) => ({
	type: actionTypes.FETCH_COURSES_ERROR,
	payload: error,
});

export const addCourseSuccess = (course) => ({
	type: actionTypes.ADD_COURSE,
	payload: course,
});

export const updateCourseSuccess = (course) => ({
	type: actionTypes.UPDATE_COURSE,
	payload: course,
});

export const deleteCourseSuccess = (course) => ({
	type: actionTypes.DELETE_COURSE,
	payload: course,
});

export const showError = (error) => ({
	type: actionTypes.SHOW_ERROR,
	payload: error,
});
