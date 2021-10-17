import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteCourse } from '../../store/courses/actionCreators';
import Button from '../Button/Button';
import formatDuration from '../../mixins/format-duration';

const CourseCard = ({ course, authors }) => {
	const dispatch = useDispatch();

	const deleteCourseById = (id) => {
		axios
			.delete(`http://localhost:3000/courses/${id}`, {
				headers: {
					Authorization: localStorage.getItem('userToken'),
				},
			})
			.then((response) => {
				if (response.data.successful) {
					dispatch(deleteCourse(id));
				}
			});
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
					<Button
						color='danger'
						customClass='ms-2'
						title='&#128465;'
						handleClick={() => deleteCourseById(course.id)}
					/>
					<Button color='success' customClass='ms-2' title='&#9998;' />
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
