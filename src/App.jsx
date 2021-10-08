import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
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
		console.lof('createCourse func in App');
		// const updatedCoursesList = [...courses, newCourse];
		// setCourses(updatedCoursesList);
		// setAuthors(allAuthors);
	};

	return (
		<Router>
			<Header isLoggedIn={isLoggedIn} />
			<Switch>
				<Route exact path='/courses'>
					<Courses courses={courses} authors={authors} />
				</Route>
				<Route path='/courses/add'>
					<CreateCourse authors={authors} createCourse={createCourse} />
				</Route>
				<Route path='/courses/:courseId' children={<CourseInfo />}></Route>
				<Route path='/login'>
					<Login />
				</Route>
				<Route path='/registration'>
					<Registration />
				</Route>
				<Route path='*'>
					<Error />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
