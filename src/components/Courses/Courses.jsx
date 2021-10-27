import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFetch } from '../../mixins/use-fetch';
import { getCourses, getUserRole } from '../../store/selectors';
import { setAuthors } from '../../store/authors/actionCreators';
import { setCourses } from '../../store/courses/actionCreators';
import Loader from '../Loader/Loader';
import CoursesList from '../Courses/CoursesList';
import Search from '../Search/Search';
import Message from '../Message/Message';

const Courses = () => {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(true);
	const { data: coursesList, loading: coursesLoading } = useFetch(
		'http://localhost:3000/courses/all'
	);
	const { data: authorsList, loading: authorsLoading } = useFetch(
		'http://localhost:3000/authors/all'
	);
	const isAdmin = useSelector(getUserRole) === 'admin';
	const courses = useSelector(getCourses);

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
		dispatch(setAuthors(authorsList));
		dispatch(setCourses(coursesList));
	}, [dispatch, authorsList, coursesList]);

	useEffect(() => {
		setIsLoading(coursesLoading && authorsLoading);
	}, [coursesLoading, authorsLoading]);

	return (
		<section className='mt-4 mb-4'>
			<div className='container'>
				<div className='d-flex mb-4'>
					<div className='col-6'>
						<Search handleSearch={searchCourses} />
					</div>
					{isAdmin && (
						<div className='col-6 text-end'>
							<Link to='/courses/add' className='btn btn-info'>
								Add new course
							</Link>
						</div>
					)}
				</div>
				{isLoading ? (
					<Loader />
				) : (
					[
						courses?.length > 0 ? (
							<CoursesList />
						) : (
							<Message text='No courses found. Please search or create one.' />
						),
					]
				)}
			</div>
		</section>
	);
};

export default Courses;
