import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from './store/user/actionCreators';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CourseInfo from './components/Courses/CourseInfo';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import CourseForm from './components/CourseForm/CourseForm';
import Error from './components/Error/Error';
import PrivateRoute from './components/Router/PrivateRoute';
import AdminRoute from './components/Router/AdminRoute';
import isTokenExist from './mixins/token';

const App = () => {
	const dispatch = useDispatch();
	const [isLoggedIn, setIsLoggedIn] = useState(isTokenExist());

	const handleLogout = () => {
		setIsLoggedIn(false);
	};

	const handleLogin = () => {
		setIsLoggedIn(true);
	};

	useEffect(() => {
		if (isTokenExist()) {
			setIsLoggedIn(true);
			dispatch(getUser());
		}
	}, [dispatch, isLoggedIn]);

	return (
		<Router>
			<Header handleLogout={handleLogout} />
			<Switch>
				<Route
					path='/login'
					component={() => <Login handleLogin={handleLogin} />}
				></Route>
				<Route path='/registration' component={Registration}></Route>
				<PrivateRoute exact path='/courses' component={Courses}></PrivateRoute>
				<AdminRoute path='/courses/add' component={CourseForm}></AdminRoute>
				<AdminRoute
					path='/courses/update/:courseId'
					component={CourseForm}
				></AdminRoute>
				<PrivateRoute
					path='/courses/:courseId'
					component={CourseInfo}
				></PrivateRoute>
				<PrivateRoute
					exact
					path='/'
					component={() => <Redirect to='/courses' />}
				></PrivateRoute>
				<PrivateRoute path='*' component={Error}></PrivateRoute>
			</Switch>
		</Router>
	);
};

export default App;
