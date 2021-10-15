import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Message from '../Message/Message';
import formatDuration from '../../mixins/format-duration';
import getAuthorsById from '../../mixins/get-authors';

const CourseInfo = () => {
	const { courseId } = useParams();
	const allAuthors = useSelector((state) => state.allAuthors.authors);
	const currentCourse = useSelector((state) =>
		state.allCourses.courses.find((course) => course.id === courseId)
	);
	const currentAuthors = currentCourse.authors;

	return (
		<div className='container'>
			<div className='text-start mt-4'>
				<Link to='/courses' className='link-dark text-decoration-none'>
					&#8918; Back to courses
				</Link>
			</div>
			{currentCourse ? (
				<div>
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
								{currentAuthors &&
									getAuthorsById(currentAuthors, allAuthors).join(', ')}
							</div>
						</div>
					</div>
				</div>
			) : (
				<Message text='There is no course with provided ID.' />
			)}
		</div>
	);
};

export default CourseInfo;
