import { actionTypes } from './actionTypes';

const coursesInitialState = {
	courses: [],
};

const coursesReduser = (state = coursesInitialState, { type, payload }) => {
	switch (type) {
		case actionTypes.SET_COURSES:
			return { ...state, courses: payload };
		case actionTypes.ADD_COURSE:
			return { ...state, courses: [...state.courses, payload] };
		case actionTypes.DELETE_COURSE:
			return {
				...state,
				courses: state.courses.filter((course) => course.id !== payload),
			};
		default:
			return state;
	}
};

export default coursesReduser;
