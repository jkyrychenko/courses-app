import { useSelector } from 'react-redux';
import CourseCard from './CourseCard';
import { getAuthors } from '../../store/selectors';
import getAuthorsById from '../../mixins/get-authors';

const CoursesList = ({ courses }) => {
	const authorsList = useSelector(getAuthors);

	return (
		<div className='d-grid gap-4'>
			{courses.map((course) => (
				<CourseCard
					course={course}
					authors={getAuthorsById(course.authors, authorsList)}
					key={course.id}
				/>
			))}
		</div>
	);
};

export default CoursesList;
