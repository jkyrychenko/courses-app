import CourseCard from '../CourseCard/CourseCard';

const Courses = (props) => {
	const authorsList = props.authors;
	const courses = props.courses;

	const findAuthorsById = (authors) => {
		let courseAuthors = [];
		authors.forEach((author) => {
			if (authorsList.find((item) => item.id === author)) {
				let name = authorsList.find((item) => item.id === author).name;
				courseAuthors.push(name);
			}
		});

		return courseAuthors;
	};

	return (
		<section className='mt-4 mb-4'>
			<div className='container'>
				<div className='d-grid gap-4'>
					{courses.map((course) => (
						<CourseCard
							course={course}
							authors={findAuthorsById(course.authors)}
							key={course.id}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Courses;
