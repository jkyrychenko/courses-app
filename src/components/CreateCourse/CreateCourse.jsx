import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from '../Button/Button';
import Message from '../Message/Message';
import formatDuration from '../../mixins/format-duration';

const CreateCourse = (props) => {
	const [authorslist, setAuthorsList] = useState(props.authors);
	const [newAuthorName, setNewAuthorName] = useState('');
	const [courseAuthors, setCourseAuthors] = useState([]);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [duration, setDuration] = useState('');
	const [userDuration, setUserDuration] = useState('00:00 hours');

	const addNewAuthor = (name) => {
		if (!name || name.trim() === '' || name.length < 2) {
			alert('Please, enter valid name!');
			return false;
		}

		let newAuthor = {
			id: uuidv4(),
			name: name,
		};

		setAuthorsList((oldAuthorslist) => [...oldAuthorslist, newAuthor]);
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
		setAuthorsList((oldAuthorslist) => [...oldAuthorslist, author]);
	};

	const getUserDuration = (minutes) => {
		setDuration(minutes);
		setUserDuration(formatDuration(minutes));
	};

	const createNewCourse = (e) => {
		e.preventDefault();

		[title, description].map((value) => {
			if (!value || value.trim() === '' || value.length < 2) {
				alert('Please, enter valid title and description for the course!');
				return false;
			}

			return [title, description];
		});

		let newCourse = {
			id: uuidv4(),
			title: title,
			description: description,
			creationDate: new Date().toLocaleDateString(),
			duration: duration,
			authors: courseAuthors,
		};

		props.createCourse({ newCourse, courseAuthors });
	};

	return (
		<section>
			<div className='container mt-4 mb-4'>
				<form onSubmit={createNewCourse} className='d-grid gap-4'>
					<div className='d-flex align-items-end'>
						<div className='col-6'>
							<label htmlFor='courseTitle' className='form-label'>
								Title
							</label>
							<input
								type='text'
								className='form-control'
								id='courseTitle'
								placeholder='Enter title...'
								value={title}
								onChange={(e) => setTitle(e.target.value)}
							/>
						</div>
						<div className='col-6 text-end'>
							<Button
								title='Create course'
								color='warning'
								customClass='me-4'
								type='submit'
							/>
							<Button
								title='Cancel'
								color='danger'
								action={props.createCourse}
							/>
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
							<h5 className='text-center mb-4'>Add author</h5>
							<div>
								<label htmlFor='createAuthor' className='form-label'>
									Author name
								</label>
							</div>
							<div className='input-group'>
								<input
									type='text'
									className='form-control'
									id='createAuthor'
									placeholder='Enter author name...'
									value={newAuthorName}
									onChange={(e) => setNewAuthorName(e.target.value)}
								/>
								<Button
									title='Create author'
									action={() => addNewAuthor(newAuthorName)}
								/>
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
											action={() => addNewAuthorToCourse(author)}
										/>
									</div>
								))}
							</div>
						</div>
						<div className='col-6'>
							<h5 className='text-center mb-4'>Duration</h5>
							<div>
								<label htmlFor='courseDuration' className='form-label'>
									Duration
								</label>
								<input
									type='number'
									className='form-control'
									id='courseDuration'
									placeholder='Enter duration in minutes...'
									value={duration}
									onChange={(e) => getUserDuration(e.target.value)}
								/>
							</div>
							<div className='fs-4 mt-2'>
								Duration:&nbsp;
								<strong>{userDuration}</strong>
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
												action={() => deleteCourseAuthor(author)}
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

export default CreateCourse;
