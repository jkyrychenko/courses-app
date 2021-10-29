import { actionTypes } from './actionTypes';

const coursesInitialState = {
	courses: [],
	error: '',
};

const courses = (state = coursesInitialState, { type, payload }) => {
	switch (type) {
		case actionTypes.SET_COURSES:
			return { ...state, courses: payload };
		case actionTypes.ADD_COURSE:
			return { ...state, courses: [...state.courses, payload] };
		case actionTypes.UPDATE_COURSE:
			return {
				...state,
				courses: state.courses.map((course) =>
					course.id === payload.id
						? {
								...course,
								title: payload.title,
								description: payload.description,
								duration: payload.duration,
								authors: payload.authors,
						  }
						: course
				),
			};
		case actionTypes.DELETE_COURSE:
			return {
				...state,
				courses: state.courses.filter((course) => course.id !== payload),
			};
		case actionTypes.SHOW_ERROR:
			return {
				...state,
				error: payload.error,
			};
		default:
			return state;
	}
};

export default courses;
