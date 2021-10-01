import CourseCard from './CourseCard';

const CoursesList = (props) => {
	const findAuthorsById = (authors) => {
		let courseAuthors = [];
		authors.forEach((author) => {
			if (props.authorsList.find((item) => item.id === author)) {
				let name = props.authorsList.find((item) => item.id === author).name;
				courseAuthors.push(name);
			}
		});
		return courseAuthors;
	};

	return (
		<div className='d-grid gap-4'>
			{props.courses.map((course) => (
				<CourseCard
					course={course}
					authors={findAuthorsById(course.authors)}
					key={course.id}
				/>
			))}
		</div>
	);
};

export default CoursesList;
