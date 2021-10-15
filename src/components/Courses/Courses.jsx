import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CoursesList from '../Courses/CoursesList';
import Search from '../Search/Search';
import Message from '../Message/Message';

const Courses = ({ isLoading }) => {
	const [loading, setLoading] = useState(true);
	const authorsList = useSelector((state) => state.allAuthors.authors);
	const coursesList = useSelector((state) => state.allCourses.courses);
	const [courses, setCourses] = useState(coursesList);

	const searchCourses = (query) => {
		if (!query.trim()) {
			setCourses(coursesList);
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
		setLoading(isLoading);
		setCourses(coursesList);
	}, [isLoading, coursesList]);

	console.log();

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
				{loading
					? 'Loading...'
					: [
							courses?.length > 0 ? (
								<CoursesList coursesList={courses} authorsList={authorsList} />
							) : (
								<Message text='No courses found. Please search or create one.' />
							),
					  ]}
			</div>
		</section>
	);
};

Courses.propTypes = {
	isLoading: PropTypes.bool,
};

export default Courses;
