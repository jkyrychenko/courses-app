import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useFetch } from './mixins/use-fetch';
import { useDispatch } from 'react-redux';
import { setAuthors } from './store/authors/actionCreators';
import { setCourses } from './store/courses/actionCreators';
import { loginUser } from './store/user/actionCreators';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CourseInfo from './components/Courses/CourseInfo';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Error from './components/Error/Error';
import PrivateRoute from './components/Router/PrivateRoute';
import api from './lib/api/api';
import isTokenExist from './mixins/token';

const App = () => {
	const dispatch = useDispatch();
	const [isLoggedIn, setIsLoggedIn] = useState(isTokenExist);
	const { data: courses, loading: coursesLoading } = useFetch(
		'http://localhost:3000/courses/all'
	);
	const { data: authors, loading: authorsLoading } = useFetch(
		'http://localhost:3000/authors/all'
	);
	const [isLoading, setIsLoading] = useState(true);

	const handleLogout = () => {
		setIsLoggedIn(false);
	};

	const handleLogin = () => {
		setIsLoggedIn(true);
	};

	useEffect(() => {
		if (isTokenExist) {
			setIsLoggedIn(true);
			api.getUser().then((data) => {
				dispatch(
					loginUser({
						name: data.result.name,
						email: data.result.email,
						token: localStorage.getItem('userToken'),
					})
				);
			});
		}

		dispatch(setAuthors(authors));
		dispatch(setCourses(courses));
	}, [dispatch, isLoggedIn, authors, courses]);

	useEffect(() => {
		setIsLoading(coursesLoading && authorsLoading);
	}, [coursesLoading, authorsLoading]);

	return (
		<Router>
			<Header handleLogout={handleLogout} />
			<Switch>
				<Route
					path='/login'
					component={() => <Login handleLogin={handleLogin} />}
				></Route>
				<Route path='/registration' component={Registration}></Route>
				<PrivateRoute
					exact
					path='/courses'
					component={() => <Courses isLoading={isLoading} />}
				></PrivateRoute>
				<PrivateRoute
					path='/courses/add'
					component={() => <CreateCourse />}
				></PrivateRoute>
				<PrivateRoute
					path='/courses/:courseId'
					children={<CourseInfo />}
				></PrivateRoute>
				<PrivateRoute
					exact
					path='/'
					component={() => <Redirect to='/courses' />}
				></PrivateRoute>
				<PrivateRoute path='*' component={() => <Error />}></PrivateRoute>
			</Switch>
		</Router>
	);
};

export default App;
