import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useFetch } from './mixins/use-fetch';
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
	const [isLoggedIn, setIsLoggedIn] = useState(isTokenExist);
	const [userName, setUserName] = useState('');
	const { loading, data } = useFetch('http://localhost:3000/courses/all');
	const authors = useFetch('http://localhost:3000/authors/all').data;

	const handleLogout = () => {
		axios
			.delete('http://localhost:3000/logout', {
				headers: {
					Authorization: localStorage.getItem('userToken'),
				},
			})
			.then(() => {
				localStorage.removeItem('userToken');
				setIsLoggedIn(false);
				setUserName('');
			});
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
					setUserName(response.data.result.name);
				});
		}
	}, [isLoggedIn]);

	return (
		<Router>
			<Header
				isLoggedIn={isLoggedIn}
				user={userName}
				handleLogout={handleLogout}
			/>
			<Switch>
				<Route
					path='/login'
					component={() => <Login handleLogin={handleLogin} />}
				></Route>
				<Route path='/registration' component={Registration}></Route>
				<PrivateRoute
					exact
					path='/courses'
					component={() => (
						<Courses loading={loading} courses={data} authors={authors} />
					)}
				></PrivateRoute>
				<PrivateRoute
					path='/courses/add'
					component={() => <CreateCourse authors={authors} />}
				></PrivateRoute>
				<PrivateRoute
					path='/courses/:courseId'
					children={<CourseInfo courses={data} authors={authors} />}
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
