import * as actions from './actionCreators';
import api from '../../lib/api/api';

export const fetchCourses = (token) => async (dispatch) => {
	dispatch(actions.startFetchCourses());

	api
		.getCoursesData(token)
		.then((response) =>
			dispatch(actions.fetchCoursesSuccess(response?.data?.result))
		)
		.catch((error) =>
			dispatch(actions.fetchCoursesError(error?.response?.data?.message))
		);
};

export const addCourse = (course, token) => async (dispatch) => {
	api
		.addCourse(course, token)
		.then((response) =>
			dispatch(actions.addCourseSuccess(response.data.result))
		)
		.catch((error) => dispatch(actions.showError(error)));
};

export const updateCourse = (course, id, token) => async (dispatch) => {
	api
		.updateCourse(course, id, token)
		.then((response) =>
			dispatch(actions.updateCourseSuccess(response.data.result))
		)
		.catch((error) => dispatch(actions.showError(error)));
};

export const deleteCourse = (course, token) => async (dispatch) => {
	api
		.removeCourse(course, token)
		.then(dispatch(actions.deleteCourseSuccess(course)))
		.catch((error) => dispatch(actions.showError(error)));
};
