import { useState } from 'react';
import CourseCard from '../CourseCard/CourseCard';
import Search from '../Search/Search';
import Message from '../Message/Message';

const Courses = (props) => {
	const authorsList = props.authors;
	const [courses, setCourses] = useState(props.courses);

	const findAuthorsById = (authors) => {
		let courseAuthors = [];
		authors.forEach((author) => {
			if (authorsList.find((item) => item.id === author)) {
				let name = authorsList.find((item) => item.id === author).name;
				courseAuthors.push(name);
			}
		});

		return courseAuthors;
	};

	const searchCourses = () => {
		// setCoursesVisibility(!coursesListVisible);
		console.log(courses);
		// courses.filter((el) => el.id === );
	};

	return (
		<section className='mt-4 mb-4'>
			<div className='container'>
				<div className='row mb-4'>
					<div className='col'>
						<Search action={() => searchCourses()} />
					</div>
					<div className='col'>Add new course</div>
				</div>
				{courses.length > 0 ? (
					<div className='d-grid gap-4'>
						{courses.map((course) => (
							<CourseCard
								course={course}
								authors={findAuthorsById(course.authors)}
								key={course.id}
							/>
						))}
					</div>
				) : (
					<Message text='No courses found. Please search or create one.' />
				)}
			</div>
		</section>
	);
};

export default Courses;
