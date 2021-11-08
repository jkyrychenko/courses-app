import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
	getUserToken,
	getCourses,
	getCoursesLoading,
	getAuthorsLoading,
	isAdmin,
} from '../../store/selectors';
import { fetchCourses } from '../../store/courses/thunk';
import { fetchAuthors } from '../../store/authors/thunk';

import Loader from '../Loader/Loader';
import CoursesList from '../Courses/CoursesList';
import Search from '../Search/Search';
import Message from '../Message/Message';

const Courses = () => {
	const dispatch = useDispatch();

	const isUserAdmin = useSelector(isAdmin);
	const token = useSelector(getUserToken);
	const courses = useSelector(getCourses);
	const isCourseLoading = useSelector(getCoursesLoading);
	const isAuthorsLoading = useSelector(getAuthorsLoading);

	const [filteredCourses, setFilteredCourses] = useState([]);

	const searchCourses = (query) => {
		if (!query.trim()) {
			setFilteredCourses(courses);

			return;
		}

		let searchedQuery = query.toLowerCase();
		let searchResult = courses.filter(
			(el) =>
				el.id.toLowerCase().includes(searchedQuery) ||
				el.title.toLowerCase().includes(searchedQuery)
		);

		setFilteredCourses(searchResult);
	};

	useEffect(() => {
		setFilteredCourses(courses);
	}, [courses]);

	useEffect(() => {
		if (token) {
			dispatch(fetchCourses(token));
			dispatch(fetchAuthors(token));
		}
	}, [dispatch, token]);

	return (
		<section className='mt-4 mb-4'>
			<div className='container'>
				<div className='d-flex mb-4'>
					<div className='col-6'>
						<Search handleSearch={searchCourses} />
					</div>
					{isUserAdmin && (
						<div className='col-6 text-end'>
							<Link to='/courses/add' className='btn btn-info'>
								Add new course
							</Link>
						</div>
					)}
				</div>
				{isCourseLoading || isAuthorsLoading ? (
					<Loader />
				) : filteredCourses?.length > 0 ? (
					<CoursesList courses={filteredCourses} />
				) : (
					<Message text='No courses found. Please search or create one.' />
				)}
			</div>
		</section>
	);
};

export default Courses;
