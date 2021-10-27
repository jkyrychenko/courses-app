import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCourse } from '../../store/courses/actionCreators';
import { getUserRole } from '../../store/selectors';
import Button from '../Button/Button';
import formatDuration from '../../mixins/format-duration';

const CourseCard = ({ course, authors }) => {
	const dispatch = useDispatch();
	const isAdmin = useSelector(getUserRole) === 'admin';

	const deleteCourseById = (id) => {
		dispatch(deleteCourse(id));
	};

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
				<div className='pt-3'>
					<Link to={`/courses/${course.id}`} className='btn btn-warning'>
						Show course
					</Link>
					{isAdmin && (
						<>
							<Button
								color='danger'
								customClass='ms-2'
								title='&#128465;'
								handleClick={() => deleteCourseById(course.id)}
							/>
							<Link
								to={`/courses/update/${course.id}`}
								className='btn btn-success ms-2'
							>
								&#9998;
							</Link>
						</>
					)}
				</div>
			</div>
		</article>
	);
};

CourseCard.propTypes = {
	course: PropTypes.object,
	authors: PropTypes.array,
};

export default CourseCard;
