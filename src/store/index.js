import { combineReducers } from 'redux';

import authors from './authors/reducer';
import courses from './courses/reducer';
import user from './user/reducer';

const reducers = combineReducers({
	allAuthors: authors,
	allCourses: courses,
	user: user,
});

export default reducers;
