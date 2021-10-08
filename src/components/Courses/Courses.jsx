import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CoursesList from '../Courses/CoursesList';
import Search from '../Search/Search';
import Message from '../Message/Message';

const Courses = ({ courses, authors, createCourse }) => {
	const [coursesList, setCourses] = useState(courses);
	const [authorsList, setAuthors] = useState(authors);

	const searchCourses = (query) => {
		if (!query.trim()) {
			setCourses(courses);
			return;
		}

		let searchedQuery = query.toLowerCase();
		let filteredCourses = coursesList.filter(
			(el) =>
				el.id.toLowerCase().includes(searchedQuery) ||
				el.title.toLowerCase().includes(searchedQuery)
		);
		setCourses(filteredCourses);
	};

	useEffect(() => {
		setCourses(courses);
		setAuthors(authors);
	}, [courses, authors]);

	return (
		<section className='mt-4 mb-4'>
			<div className='container'>
				<div className='d-flex mb-4'>
					<div className='col'>
						<Search handleSearch={searchCourses} />
					</div>
					<div className='col text-end'>
						<Link
							to='/courses/add'
							onClick={createCourse}
							className='btn btn-info'
						>
							Add new course
						</Link>
					</div>
				</div>
				{coursesList?.length > 0 ? (
					<CoursesList coursesList={coursesList} authorsList={authorsList} />
				) : (
					<Message text='No courses found. Please search or create one.' />
				)}
			</div>
		</section>
	);
};

export default Courses;
