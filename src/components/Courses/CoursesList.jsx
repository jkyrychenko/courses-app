import CourseCard from './CourseCard';
import getAuthorsById from '../../mixins/get-authors';

const CoursesList = ({ coursesList }) => {
	return (
		<div className='d-grid gap-4'>
			{coursesList.map((course) => (
				<CourseCard
					course={course}
					authors={getAuthorsById(course.authors)}
					key={course.id}
				/>
			))}
		</div>
	);
};

export default CoursesList;
