import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import mockedCoursesList from '../../data/mockedCoursesList';
import formatDuration from '../../mixins/format-duration';
import getAuthorsById from '../../mixins/get-authors';
// import mockedAuthorsList from '../../data/mockedAuthorsList';

const CourseInfo = () => {
	const { courseId } = useParams();
	const [course, setCourse] = useState({});

	useEffect(() => {
		const currentCourse = mockedCoursesList.find(
			(course) => course.id === courseId
		);
		setCourse(currentCourse);
	}, []);

	return (
		<div className='container'>
			<div className='text-start'>
				<Link to='/courses' className='btn btn-light'>
					&#8918; Back to courses
				</Link>
			</div>
			<div className='row align-items-start p-4'>
				<h2 className='text-center mb-5'>{course.title}</h2>
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
						{/* <strong>Authors:</strong> &nbsp; {authors.join(', ')} */}
						<strong>Authors:</strong> &nbsp;{' '}
						{getAuthorsById(course.authors).join(', ')}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseInfo;
