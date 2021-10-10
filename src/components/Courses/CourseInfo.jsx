import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import formatDuration from '../../mixins/format-duration';
import getAuthorsById from '../../mixins/get-authors';

const CourseInfo = ({ courses, authors }) => {
	const { courseId } = useParams();
	const [allCourses, setCourses] = useState(courses);
	const [allAuthors, setAuthors] = useState(authors);
	const [currentCourse, setCurrentCourse] = useState({});
	const [currentAuthors, setCurrentAuthors] = useState([]);

	useEffect(() => {
		setCourses(courses);
		setAuthors(authors);

		const choosenCourse = allCourses.find((course) => course.id === courseId);
		setCurrentCourse(choosenCourse);
		setCurrentAuthors(choosenCourse.authors);
	}, [courses, authors]);

	return (
		<div className='container'>
			<div className='text-start mt-4'>
				<Link to='/courses' className='link-dark text-decoration-none'>
					&#8918; Back to courses
				</Link>
			</div>
			<h2 className='text-center mb-4 mt-4'>{currentCourse.title}</h2>
			<div className='d-flex align-items-start pt-4 pb-4'>
				<div className='col-8'>
					<p>{currentCourse.description}</p>
				</div>
				<div className='col-4'>
					<div>
						<strong>ID:</strong> &nbsp; {currentCourse.id}
					</div>
					<div>
						<strong>Duration:</strong> &nbsp;{' '}
						{formatDuration(currentCourse.duration)}
					</div>
					<div>
						<strong>Created:</strong> &nbsp; {currentCourse.creationDate}
					</div>
					<div>
						<strong>Authors:</strong> &nbsp;{' '}
						{authors && getAuthorsById(currentAuthors, allAuthors).join(', ')}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseInfo;
