import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import formatDuration from '../../mixins/format-duration';

const CourseCard = ({ course, authors }) => {
	const [description, setDescription] = useState(course.description);

	const replaceTextWithEllipsis = () => {
		// setDescription(text);
	};

	useEffect(() => {
		replaceTextWithEllipsis();
		window.addEventListener('resize', replaceTextWithEllipsis);
		return () => {
			window.removeEventListener('resize', replaceTextWithEllipsis);
		};
	});

	return (
		<article className='row align-items-start p-4 bg-light border'>
			<div className='col-8 overflow-hidden'>
				<h4>{course.title}</h4>
				<p>{description}</p>
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
				<div className='text-center pt-3'>
					<Button title='Show course' color='warning' />
				</div>
			</div>
		</article>
	);
};

export default CourseCard;
