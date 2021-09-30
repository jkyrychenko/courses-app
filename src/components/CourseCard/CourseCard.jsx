import { useEffect, useRef, useState } from 'react';
import Button from '../Button/Button';

const CourseCard = (props) => {
	const course = props.course;
	const authors = props.authors;
	const [description, setDescription] = useState(course.description);
	const refRight = useRef(null);
	const refLeft = useRef(null);
	// const [height, setHeight] = useState('auto');

	const formatDuration = () => {
		let hours = course.duration / 60;
		let h = Math.floor(hours);
		let m = Math.floor((hours.toFixed(2) - h) * 60);
		let duration = h + ':' + m + ' hours';

		return duration;
	};

	const replaceTextWithEllipsis = () => {
		// console.log(refLeft.current.clientHeight);
		// setHeight(refRight.current.clientHeight);
		// let text = course.description;
		// text = text.replace(/\W*\s(\S)*$/, '...');
		// setDescription(text);
		// if (refLeft.current.clientHeight > height) {
		// 	console.log(refLeft.current.clientHeight);
		// 	// if (refLeft.current.clientHeight <= 200) {
		// 	// 	break;
		// 	// }
		// 	// if (text.split(' ').length <= 1) {
		// 	// 	break;
		// 	// }
		// 	let text = course.description;
		// 	text = text.replace(/\W*\s(\S)*$/, '...');
		// 	setDescription(text);
		// }
		// console.log(refLeft.current.clientHeight > refRight.current.clientHeight);
		// while (refLeft.current.clientHeight > refRight.current.clientHeight) {
		// 	if (refLeft.current.clientHeight <= 200) {
		// 		console.log('BREAK');
		// 		break;
		// 	}
		// 	if (text.split(' ').length <= 1) {
		// 		break;
		// 	}
		// 	text = text.replace(/\W*\s(\S)*$/, '...');
		// 	console.log(text);
		// 	console.log('left', refLeft);
		// 	// console.log('right', refRight);
		// 	// console.log(refLeft.current.clientHeight > refRight.current.clientHeight);
		// }
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
			{/* <h1>{height}</h1> */}
			<div
				className='col-8 text-start overflow-hidden'
				ref={refLeft}
				// style={{ height: height + 'px', textOverflow: 'ellipsis' }}
			>
				<h4>{course.title}</h4>
				<p>{description}</p>
			</div>
			<div className='text-start col-4' ref={refRight}>
				<div className='text-truncate'>
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
