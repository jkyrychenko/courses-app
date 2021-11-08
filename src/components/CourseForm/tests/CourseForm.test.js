import { render, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { useParams } from 'react-router-dom';

import getMockedStore from '../../../store/mocked-store';
import addAuthor from '../../../store/authors/actionCreators';

import CourseForm from '../CourseForm';

const buildComponent = (store) => {
	const history = createMemoryHistory();

	return render(
		<Router history={history}>
			<Provider store={store}>
				<CourseForm />
			</Provider>
		</Router>
	);
};

jest.mock('react-router', () => ({
	...jest.requireActual('react-router'),
	useParams: jest.fn(),
}));

describe('<CourseForm />', () => {
	beforeEach(() => {
		useParams.mockReturnValue({ courseId: undefined });
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	test('should show all authors list', () => {
		const { getAllByTestId } = buildComponent(getMockedStore());
		const authors = getAllByTestId('courseFormAuthor');
		const mockedAuthors = getMockedStore().getState().allAuthors.authors;

		expect(authors.length).toEqual(mockedAuthors.length);
	});

	test('should create author dispatch', () => {
		const dispatch = jest.fn();
		const { getByText } = buildComponent(getMockedStore());
		const button = getByText('Create author');

		fireEvent.click(button);
		dispatch(addAuthor);

		expect(dispatch).toHaveBeenCalledTimes(1);
	});

	test('should add author to course authors list by click', () => {
		const { container, getAllByTestId } = buildComponent(getMockedStore());
		const button = container.querySelectorAll('button[title="Add author"]')[0];

		fireEvent.click(button);

		expect(getAllByTestId('courseFormAuthorsAdded').length).toEqual(1);
	});

	test('should render form with empty fields', () => {
		const { container } = buildComponent(getMockedStore());
		const titleInput = container.querySelector('#courseTitle');
		const descriptionInput = container.querySelector('#courseDescription');
		const courseDuration = container.querySelector('#courseDuration');

		expect(titleInput.value).toBe('');
		expect(descriptionInput.value).toBe('');
		expect(courseDuration.value).toBe('');
	});
});

describe('<CourseForm />', () => {
	beforeEach(() => {
		useParams.mockReturnValue({
			courseId: 'fbba6300-b0a8-4483-8f07-fd4282eb3c04',
		});
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	test('should show course authors list', () => {
		const { getAllByTestId } = buildComponent(getMockedStore());
		const authors = getAllByTestId('courseFormAuthorsAdded');

		expect(authors.length).toBeGreaterThan(0);
	});

	test('should add new author to course authors list', () => {
		const { container, getAllByTestId } = buildComponent(getMockedStore());
		const button = container.querySelectorAll('button[title="Add author"]')[0];

		fireEvent.click(button);

		expect(getAllByTestId('courseFormAuthorsAdded')).toHaveLength(3);
	});

	test('should remove author from course authors list by click', () => {
		const { container, getAllByTestId } = buildComponent(getMockedStore());
		const button = container.querySelectorAll(
			'button[title="Delete author"]'
		)[0];

		fireEvent.click(button);

		expect(getAllByTestId('courseFormAuthorsAdded')).toHaveLength(1);
	});

	test('should render form with predefined values in the fields', () => {
		const { container } = buildComponent(getMockedStore());
		const titleInput = container.querySelector('#courseTitle');
		const descriptionInput = container.querySelector('#courseDescription');
		const courseDuration = container.querySelector('#courseDuration');

		expect(titleInput.value).toBe('UI/UX');
		expect(descriptionInput.value).toBe('Lorem ipsum 12');
		expect(courseDuration.value).toBe('124');
	});
});
