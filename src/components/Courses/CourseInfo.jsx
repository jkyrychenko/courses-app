import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import mockedCoursesList from '../../data/mockedCoursesList';
import formatDuration from '../../mixins/format-duration';
import getAuthorsById from '../../mixins/get-authors';

const CourseInfo = () => {
	const { courseId } = useParams();
	const [course, setCourse] = useState({});
	const [authors, setAuthors] = useState([]);

	useEffect(() => {
		const currentCourse = mockedCoursesList.find(
			(course) => course.id === courseId
		);
		setCourse(currentCourse);
		setAuthors(currentCourse.authors);
	}, []);

	return (
		<div className='container'>
			<div className='text-start mt-4'>
				<Link to='/courses' className='link-dark text-decoration-none'>
					&#8918; Back to courses
				</Link>
			</div>
			<h2 className='text-center mb-4 mt-4'>{course.title}</h2>
			<div className='d-flex align-items-start pt-4 pb-4'>
				<div className='col-8'>
					<p>{course.description}</p>
				</div>
				<div className='col-4'>
					<div>
						<strong>ID:</strong> &nbsp; {course.id}
					</div>
					<div>
						<strong>Duration:</strong> &nbsp; {formatDuration(course.duration)}
					</div>
					<div>
						<strong>Created:</strong> &nbsp; {course.creationDate}
					</div>
					<div>
						<strong>Authors:</strong> &nbsp;{' '}
						{getAuthorsById(authors).join(', ')}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseInfo;
