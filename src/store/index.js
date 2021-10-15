import { combineReducers } from 'redux';
import authorsReduser from './authors/reducer';
import coursesReduser from './courses/reducer';
import userReduser from './user/reducer';

const reducers = combineReducers({
	allAuthors: authorsReduser,
	allCourses: coursesReduser,
	user: userReduser,
});

export default reducers;
