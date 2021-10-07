import { Link } from 'react-router-dom';
import formatDuration from '../../mixins/format-duration';

const CourseCard = ({ course, authors }) => {
	return (
		<article className='row align-items-start p-4 bg-light border'>
			<div className='col-8 overflow-hidden'>
				<h4>{course.title}</h4>
				<p className='box-truncate'>{course.description}</p>
			</div>
			<div className='col-4'>
				<div className='text-truncate'>
					<strong>Authors:</strong> &nbsp; {authors.join(', ')}
				</div>
				<div>
					<strong>Duration:</strong> &nbsp; {formatDuration(course.duration)}
				</div>
				<div>
					<strong>Created:</strong> &nbsp; {course.creationDate}
				</div>
				<div className='text-center pt-3'>
					<Link to={`/courses/${course.id}`} className='btn btn-warning'>
						Show course
					</Link>
				</div>
			</div>
		</article>
	);
};

export default CourseCard;
