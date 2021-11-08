import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { deleteCourse } from '../../store/courses/thunk';
import { isAdmin, getUserToken } from '../../store/selectors';
import formatDuration from '../../mixins/format-duration';

import Button from '../Button/Button';

const CourseCard = ({ course, authors }) => {
	const dispatch = useDispatch();
	const isUserAdmin = useSelector(isAdmin);
	const token = useSelector(getUserToken);

	const deleteCourseById = (id) => {
		dispatch(deleteCourse(id, token));
	};

	return (
		<article
			className='row align-items-start p-4 bg-light border'
			data-testid='courseCard'
		>
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
					{isUserAdmin && (
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
