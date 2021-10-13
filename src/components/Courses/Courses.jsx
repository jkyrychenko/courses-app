import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CoursesList from '../Courses/CoursesList';
import Search from '../Search/Search';
import Message from '../Message/Message';

const Courses = ({ courses, authors, loading }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [coursesList, setCourses] = useState(courses);
	const [authorsList, setAuthors] = useState(authors);

	const searchCourses = (query) => {
		if (!query.trim()) {
			setCourses(courses);
			return;
		}

		let searchedQuery = query.toLowerCase();
		let filteredCourses = courses.filter(
			(el) =>
				el.id.toLowerCase().includes(searchedQuery) ||
				el.title.toLowerCase().includes(searchedQuery)
		);
		setCourses(filteredCourses);
	};

	useEffect(() => {
		setIsLoading(loading);
		setCourses(courses);
		setAuthors(authors);
	}, [loading, courses, authors]);

	return (
		<section className='mt-4 mb-4'>
			<div className='container'>
				<div className='d-flex mb-4'>
					<div className='col'>
						<Search handleSearch={searchCourses} />
					</div>
					<div className='col text-end'>
						<Link to='/courses/add' className='btn btn-info'>
							Add new course
						</Link>
					</div>
				</div>
				{isLoading
					? 'Loading...'
					: [
							coursesList?.length > 0 ? (
								<CoursesList
									coursesList={coursesList}
									authorsList={authorsList}
								/>
							) : (
								<Message text='No courses found. Please search or create one.' />
							),
					  ]}
			</div>
		</section>
	);
};

Courses.propTypes = {
	courses: PropTypes.array,
	authors: PropTypes.array,
};

export default Courses;
