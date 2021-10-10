import {
	BrowserRouter as Router,
	Route,
	Switch,
	// Redirect,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useFetch } from './mixins/use-fetch';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CourseInfo from './components/Courses/CourseInfo';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Error from './components/Error/Error';

const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const courses = useFetch('http://localhost:3000/courses/all').data;
	const authors = useFetch('http://localhost:3000/authors/all').data;

	const createCourse = ({ newCourse, allAuthors }) => {
		console.log('createCourse func in App');
		// const updatedCoursesList = [...courses, newCourse];
		// setCourses(updatedCoursesList);
		// setAuthors(allAuthors);
	};

	const handleLogout = () => {
		localStorage.removeItem('userToken');
		setIsLoggedIn(false);
	};

	const handleLogin = () => {
		setIsLoggedIn(true);
	};

	useEffect(() => {
		if (!localStorage.getItem('userToken')) {
			// if !isLoggedIn -> redirect to /login
		}
	}, [isLoggedIn]);

	return (
		<Router>
			<Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
			<Switch>
				<Route path='/login'>
					<Login handleLogin={handleLogin} />
				</Route>
				<Route path='/registration'>
					<Registration />
				</Route>
				<Route exact path='/courses'>
					<Courses courses={courses} authors={authors} />
				</Route>
				<Route path='/courses/add'>
					<CreateCourse authors={authors} createCourse={createCourse} />
				</Route>
				<Route
					path='/courses/:courseId'
					children={<CourseInfo courses={courses} authors={authors} />}
				></Route>
				{/* <Route exact path='/'>
					{!isLoggedIn ? (
						<Redirect from='*' to='/login' component={Login} />
					) : (
						<Redirect from='*' to='/courses' component={Courses} />
					)}
				</Route> */}
				<Route path='*'>
					<Error />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
