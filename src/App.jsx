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
import axios from 'axios';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CourseInfo from './components/Courses/CourseInfo';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Error from './components/Error/Error';
import PrivateRoute from './components/Router/PrivateRoute';
import isTokenExist from './mixins/token';

const App = () => {
	const dispatch = useDispatch();
	const [isLoggedIn, setIsLoggedIn] = useState(isTokenExist);
	const fetchedCourses = useFetch('http://localhost:3000/courses/all');
	const fetchedAuthors = useFetch('http://localhost:3000/authors/all');
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
			axios
				.get('http://localhost:3000/users/me', {
					headers: {
						Authorization: localStorage.getItem('userToken'),
					},
				})
				.then((response) => {
					dispatch(
						loginUser({
							name: response.data.result.name,
							email: response.data.result.email,
							token: localStorage.getItem('userToken'),
						})
					);
				});
		}

		dispatch(setAuthors(fetchedAuthors.data));
		dispatch(setCourses(fetchedCourses.data));
	}, [isLoggedIn, fetchedAuthors, fetchedCourses]);

	useEffect(() => {
		if (fetchedCourses.loading || fetchedAuthors.loading) {
			setIsLoading(true);
		}

		let loadingTimer = setTimeout(() => setIsLoading(false), 1000);
		return () => {
			clearTimeout(loadingTimer);
		};
	}, [isLoading]);

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
