import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import mockedCoursesList from './data/mockedCoursesList';
import mockedAuthorsList from './data/mockedAuthorsList';
import { useState } from 'react';

const App = () => {
	const [areCoursesVisible, setCoursesVisibility] = useState(true);
	const [courses, setCourses] = useState(mockedCoursesList);
	const [authors, setAuthors] = useState(mockedAuthorsList);

	const createCourse = ({ newCourse, allAuthors }) => {
		const updatedCoursesList = [...courses, newCourse];
		setCourses(updatedCoursesList);
		setAuthors(allAuthors);
		setCoursesVisibility(!areCoursesVisible);
	};

	return (
		<div className='App'>
			<Header />
			{areCoursesVisible ? (
				<Courses
					courses={courses}
					authors={authors}
					createCourse={() => setCoursesVisibility(!areCoursesVisible)}
				/>
			) : (
				<CreateCourse
					authors={authors}
					createCourse={createCourse}
					cancel={() => setCoursesVisibility(!areCoursesVisible)}
				/>
			)}
		</div>
	);
};

export default App;
