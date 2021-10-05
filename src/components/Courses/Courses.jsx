import { useState } from 'react';
import CoursesList from '../Courses/CoursesList';
import Search from '../Search/Search';
import Button from '../Button/Button';
import Message from '../Message/Message';

const Courses = (props) => {
	const authorsList = props.authors;
	const [courses, setCourses] = useState(props.courses);

	const searchCourses = (query) => {
		if (query.trim() === '') {
			setCourses(props.courses);
			return false;
		}

		let searchedQuery = query.toLowerCase();
		let filteredCourses = props.courses.filter(
			(el) =>
				el.id.toLowerCase().includes(searchedQuery) ||
				el.title.toLowerCase().includes(searchedQuery)
		);
		setCourses(filteredCourses);
	};

	return (
		<section className='mt-4 mb-4'>
			<div className='container'>
				<div className='d-flex mb-4'>
					<div className='col'>
						<Search action={searchCourses} />
					</div>
					<div className='col text-end'>
						<Button title='Add new course' action={props.createCourse} />
					</div>
				</div>
				{courses.length > 0 ? (
					<CoursesList courses={courses} authorsList={authorsList} />
				) : (
					<Message text='No courses found. Please search or create one.' />
				)}
			</div>
		</section>
	);
};

export default Courses;
