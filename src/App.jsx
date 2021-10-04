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
					createCourse={({ newCourse, allAuthors }) => {
						console.log(allAuthors);
						setAuthors((oldAuthorslist) => [...oldAuthorslist, allAuthors]);
						setCourses((oldCourseslist) => [...oldCourseslist, newCourse]);
						setCoursesVisibility(!areCoursesVisible);
					}}
					cancel={() => setCoursesVisibility(!areCoursesVisible)}
				/>
			)}
		</div>
	);
};

export default App;
