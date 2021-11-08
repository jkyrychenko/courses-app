import { useSelector } from 'react-redux';

import { getAuthors } from '../../store/selectors';
import getAuthorsById from '../../mixins/get-authors';

import CourseCard from './CourseCard';

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
