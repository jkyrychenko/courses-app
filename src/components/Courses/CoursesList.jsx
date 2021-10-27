import { useSelector } from 'react-redux';
import CourseCard from './CourseCard';
import { getCourses, getAuthors } from '../../store/selectors';
import getAuthorsById from '../../mixins/get-authors';

const CoursesList = () => {
	const coursesList = useSelector(getCourses);
	const authorsList = useSelector(getAuthors);

	return (
		<div className='d-grid gap-4'>
			{coursesList.map((course) => (
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
