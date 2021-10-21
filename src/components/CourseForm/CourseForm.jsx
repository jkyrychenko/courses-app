import { Link, useHistory, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Message from '../Message/Message';
import formatDuration from '../../mixins/format-duration';
import isFormValid from '../../mixins/form-validation';
import { addAuthor } from '../../store/authors/actionCreators';
import { addCourse, updateCourse } from '../../store/courses/actionCreators';

const CourseForm = () => {
	const router = useHistory();
	const { courseId } = useParams();
	const dispatch = useDispatch();
	const currentCourse = useSelector((state) =>
		state.allCourses.courses.find((course) => course.id === courseId)
	);
	const allAuthors = useSelector((state) => state.allAuthors.authors);
	const [authorslist, setAuthorsList] = useState(allAuthors);
	const [newAuthorName, setNewAuthorName] = useState('');
	const [courseAuthors, setCourseAuthors] = useState([]);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [duration, setDuration] = useState('');

	const addNewAuthor = (name) => {
		if (!name.trim() || name.length < 2) {
			alert('Please, enter valid name!');
			return;
		}

		let newAuthor = {
			name: name,
		};

		dispatch(addAuthor(newAuthor));

		setNewAuthorName('');
	};

	const addNewAuthorToCourse = (author) => {
		setCourseAuthors((oldCourseAuthorslist) => [
			...oldCourseAuthorslist,
			author,
		]);
		setAuthorsList(authorslist.filter((el) => el.id !== author.id));
	};

	const deleteCourseAuthor = (author) => {
		setCourseAuthors(courseAuthors.filter((el) => el.id !== author.id));
		const updatedAuthorsList = [...authorslist, author];
		setAuthorsList(updatedAuthorsList);
	};

	const handleCourseSubmit = (e) => {
		e.preventDefault();

		const authorIdList = courseAuthors.reduce((ids, author) => {
			ids.push(author.id);
			return ids;
		}, []);

		const courseToSubmit = {
			title,
			description,
			creationDate: new Date().toLocaleDateString(),
			duration: parseInt(duration),
			authors: authorIdList,
		};

		if (isFormValid({ title, description, duration })) {
			if (courseId) {
				dispatch(updateCourse(courseToSubmit, courseId));
			} else {
				dispatch(addCourse(courseToSubmit));
			}
			router.push('/courses');
		}
	};

	const getCurrentCourseAuthors = () => {
		if (currentCourse) {
			const authors = currentCourse.authors;

			authors.forEach((author) => {
				let name = allAuthors.find((item) => item.id === author);
				addNewAuthorToCourse(name);
			});
		}
	};

	const setCurrentCourseFields = () => {
		if (currentCourse) {
			setTitle(currentCourse.title);
			setDescription(currentCourse.description);
			setDuration(currentCourse.duration);
			setTitle(currentCourse.title);
		}
	};

	useEffect(() => {
		getCurrentCourseAuthors();
		setCurrentCourseFields();
	}, [courseId]);

	useEffect(() => {
		setAuthorsList(allAuthors);
	}, [allAuthors]);

	return (
		<section>
			<div className='container mt-4 mb-4'>
				<form onSubmit={handleCourseSubmit} className='d-grid gap-4'>
					<div className='d-flex align-items-end'>
						<div className='col-6'>
							<Input
								id='courseTitle'
								placeholder='Enter title...'
								title='Title'
								value={title}
								handleChange={(e) => setTitle(e.target.value)}
							/>
						</div>
						<div className='col-6 text-end'>
							<Button
								title={currentCourse ? 'Update course' : 'Create course'}
								color='warning'
								customClass='me-4'
								type='submit'
							/>
							<Link to='/courses' className='btn btn-danger'>
								Cancel
							</Link>
						</div>
					</div>
					<div>
						<label htmlFor='courseDescription' className='form-label'>
							Description
						</label>
						<textarea
							type='text'
							className='form-control'
							id='courseDescription'
							placeholder='Enter description...'
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						></textarea>
					</div>
					<div className='row bg-light p-4 border rounded'>
						<div className='col-6 mb-4'>
							<h5 className='mb-4 text-center'>Add author</h5>
							<div>
								<Input
									id='createAuthor'
									placeholder='Enter author name...'
									title='Author name'
									value={newAuthorName}
									handleChange={(e) => setNewAuthorName(e.target.value)}
								/>
								<div className='text-center mt-4'>
									<Button
										title='Create author'
										handleClick={() => addNewAuthor(newAuthorName)}
									/>
								</div>
							</div>
						</div>
						<div className='col-6 mb-4'>
							<h5 className='text-center mb-4'>Authors</h5>
							<div className='col-8 mx-auto'>
								{authorslist.map((author) => (
									<div
										className='d-flex justify-content-between align-items-center mb-2'
										key={author.id}
									>
										{author.name}{' '}
										<Button
											title='Add author'
											color='warning'
											handleClick={() => addNewAuthorToCourse(author)}
										/>
									</div>
								))}
							</div>
						</div>
						<div className='col-6'>
							<h5 className='text-center mb-4'>Duration</h5>
							<div>
								<Input
									type='number'
									id='courseDuration'
									placeholder='Enter duration in minutes...'
									title='Duration'
									value={duration}
									handleChange={(e) => setDuration(e.target.value)}
								/>
							</div>
							<div className='fs-4 mt-2'>
								Duration:&nbsp;
								<strong>{formatDuration(duration)}</strong>
							</div>
						</div>
						<div className='col-6 text-center'>
							<h5 className='mb-4'>Course authors</h5>
							<div className='col-8 mx-auto'>
								{courseAuthors.length > 0 ? (
									courseAuthors.map((author) => (
										<div
											className='d-flex justify-content-between align-items-center mb-2'
											key={author.id}
										>
											{author.name}
											<Button
												title='Delete author'
												color='danger'
												handleClick={() => deleteCourseAuthor(author)}
											/>
										</div>
									))
								) : (
									<Message text='Author list is empty' />
								)}
							</div>
						</div>
					</div>
				</form>
			</div>
		</section>
	);
};

export default CourseForm;
