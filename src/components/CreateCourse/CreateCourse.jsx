import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Message from '../Message/Message';
import formatDuration from '../../mixins/format-duration';

const CreateCourse = (props) => {
	const [allAuthors, setAllAuthors] = useState(props.authors);
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
		setAllAuthors((oldAuthors) => [...oldAuthors, newAuthor]);
		setNewAuthorName('');
		console.log(allAuthors);
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

	const validateForm = () => {
		if (!title || title.trim() === '') {
			alert('Please, fill in all fields!');
			return false;
		}
		if (!description || description.trim() === '' || description.length < 2) {
			alert('Please, fill in all fields!');
			return false;
		}
		if (!duration || duration <= 0) {
			alert('Please, enter duration of the course in minutes!');
			return false;
		}
		return true;
	};

	const createNewCourse = (e) => {
		e.preventDefault();

		let authorIdList = [];
		courseAuthors.map((author) => {
			return authorIdList.push(author.id);
		});

		let newCourse = {
			id: uuidv4(),
			title: title,
			description: description,
			creationDate: new Date().toLocaleDateString(),
			duration: duration,
			authors: authorIdList,
		};

		if (validateForm()) {
			props.createCourse({ newCourse, allAuthors });
		}
	};

	return (
		<section>
			<div className='container mt-4 mb-4'>
				<form onSubmit={createNewCourse} className='d-grid gap-4'>
					<div className='d-flex align-items-end'>
						<div className='col-6'>
							<Input
								id='courseTitle'
								placeholder='Enter title...'
								title='Title'
								value={title}
								change={(e) => setTitle(e.target.value)}
							/>
						</div>
						<div className='col-6 text-end'>
							<Button
								title='Create course'
								color='warning'
								customClass='me-4'
								type='submit'
							/>
							<Button title='Cancel' color='danger' action={props.cancel} />
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
									change={(e) => setNewAuthorName(e.target.value)}
								/>
								<div className='text-center mt-4'>
									<Button
										title='Create author'
										action={() => addNewAuthor(newAuthorName)}
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
											action={() => addNewAuthorToCourse(author)}
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
									change={(e) => getUserDuration(e.target.value)}
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
