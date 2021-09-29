import { useEffect, useState } from 'react';
import Button from '../Button/Button';

const CourseCard = (props) => {
	const course = props.course;
	const authors = props.authors;
	const [description, setDescription] = useState(course.description);

	const formatDuration = () => {
		let hours = course.duration / 60;
		let h = Math.floor(hours);
		let m = Math.floor((hours.toFixed(2) - h) * 60);
		let duration = h + ':' + m + ' hours';

		return duration;
	};

	const updateDescription = () => {
		setDescription('');
	};

	useEffect(() => {
		window.addEventListener('resize', updateDescription);
		return () => {
			window.removeEventListener('resize', updateDescription);
		};
	});

	return (
		<article className='d-flex flex-row justify-content-between align-items-start p-4 bg-light border'>
			<div className='w-75 mw-100 me-4 text-start'>
				<h4>{course.title}</h4>
				<p>{description}</p>
			</div>
			<div className='text-start'>
				<div>
					<strong>Authors:</strong> &nbsp; {authors.join(', ')}
				</div>
				<div>
					<strong>Duration:</strong> &nbsp; {formatDuration()}
				</div>
				<div>
					<strong>Created:</strong> &nbsp; {course.creationDate}
				</div>
				<div className='text-center pt-3'>
					<Button title='Show course' color='warning' />
				</div>
			</div>
		</article>
	);
};

export default CourseCard;
