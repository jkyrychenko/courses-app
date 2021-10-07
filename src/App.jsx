import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CourseInfo from './components/Courses/CourseInfo';
// import Login from './components/Login/Login';
// import Registration from './components/Registration/Registration';
import CreateCourse from './components/CreateCourse/CreateCourse';
import mockedCoursesList from './data/mockedCoursesList';
import mockedAuthorsList from './data/mockedAuthorsList';
import { useState } from 'react';

const App = () => {
	const [courses, setCourses] = useState(mockedCoursesList);
	const [authors, setAuthors] = useState(mockedAuthorsList);

	const createCourse = ({ newCourse, allAuthors }) => {
		const updatedCoursesList = [...courses, newCourse];
		setCourses(updatedCoursesList);
		setAuthors(allAuthors);
	};

	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path='/courses'>
					<Courses courses={courses} authors={authors} />
				</Route>
				<Route path='/courses/add'>
					<CreateCourse authors={authors} createCourse={createCourse} />
				</Route>
				<Route path='/courses/:courseId' children={<CourseInfo />}></Route>
				{/* <Route path='/login'>
						<Login />
					</Route>
					<Route path='/registration'>
						<Registration />
					</Route>
					<Route path='*'>Error component</Route> */}
				{/* </div> */}
			</Switch>
		</Router>
	);
};

export default App;
