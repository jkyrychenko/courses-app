import CourseCard from './CourseCard';

const CoursesList = ({ coursesList, authorsList }) => {
	const findAuthorsById = (authors) => {
		const courseAuthors = authors.reduce((names, author) => {
			let name = authorsList.find((item) => item.id === author).name;
			names.push(name);
			return names;
		}, []);

		return courseAuthors;
	};

	return (
		<div className='d-grid gap-4'>
			{coursesList.map((course) => (
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
