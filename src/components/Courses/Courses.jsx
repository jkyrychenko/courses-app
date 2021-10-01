import { useState } from 'react';
import CoursesList from '../Courses/CoursesList';
// import Search from '../Search/Search';
import Button from '../Button/Button';
import Message from '../Message/Message';

const Courses = (props) => {
	const authorsList = props.authors;
	const [courses, setCourses] = useState(props.courses);
	const [query, setQuery] = useState('');

	const searchCourses = (e) => {
		e.preventDefault();
		if (query.trim() === '') {
			setCourses(props.courses);
			return;
		}

		let searchedQuery = query.toLowerCase();
		let filteredCourses = props.courses.filter(
			(el) =>
				el.id.toLowerCase().includes(searchedQuery) ||
				el.title.toLowerCase().includes(searchedQuery)
		);
		setCourses(filteredCourses);
	};

	return (
		<section className='mt-4 mb-4'>
			<div className='container'>
				<div className='d-flex mb-4'>
					<div className='col'>
						{/* <Search action={(e) => searchCourses(e)} /> */}
						<form onSubmit={(e) => searchCourses(e)}>
							<div className='input-group'>
								<input
									type='text'
									className='form-control'
									placeholder='Enter course name...'
									value={query}
									onChange={(e) => setQuery(e.target.value)}
								/>
								<Button title='Search' type='submit' />
							</div>
						</form>
					</div>
					<div className='col text-end'>
						<Button title='Add new course' action={props.createCourse} />
					</div>
				</div>
				{courses.length > 0 ? (
					<CoursesList courses={courses} authorsList={authorsList} />
				) : (
					<Message text='No courses found. Please search or create one.' />
				)}
			</div>
		</section>
	);
};

export default Courses;
