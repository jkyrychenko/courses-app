import { render, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import mockedStore from '../../../store/mocked-store';
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

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useParams: () => ({
		courseId: 'fbba6300-b0a8-4483-8f07-fd4282eb3c04',
	}),
}));

describe('CourseForm component', () => {
	test('shows all authors list', () => {
		const { getAllByTestId } = buildComponent(mockedStore);
		const authors = getAllByTestId('courseFormAuthor');
		const mockedAuthors = mockedStore.getState().allAuthors.authors;
		expect(authors.length).toEqual(mockedAuthors.length);
	});

	test('shows course authors list', () => {
		const { getAllByTestId } = buildComponent(mockedStore);
		const authors = getAllByTestId('courseFormAuthorsAdded');
		expect(authors.length).toBeGreaterThan(0);
	});

	test('create author dispatch', () => {
		const dispatch = jest.fn();
		const { getByText } = buildComponent(mockedStore);
		const button = getByText('Create author');
		fireEvent.click(button);
		dispatch(addAuthor);
		expect(dispatch).toHaveBeenCalledTimes(1);
	});

	test('adds author to course authors list by click', () => {
		const { container, getAllByTestId } = buildComponent(mockedStore);
		const button = container.querySelectorAll('button[title="Add author"]')[0];
		fireEvent.click(button);
		expect(getAllByTestId('courseFormAuthorsAdded').length).toEqual(3);
	});

	test('removes author from course authors list by click', () => {
		const { container, getAllByTestId } = buildComponent(mockedStore);
		const button = container.querySelectorAll(
			'button[title="Delete author"]'
		)[0];
		fireEvent.click(button);
		expect(getAllByTestId('courseFormAuthorsAdded').length).toEqual(1);
	});
});

describe('CourseForm component', () => {
	jest.mock('react-router-dom', () => ({
		...jest.requireActual('react-router-dom'),
		useParams: () => ({
			courseId: 'fbba6300-b0a8-4483-8f07-fd4282eb3c04',
		}),
	}));

	afterEach(() => {
		jest.clearAllMocks();
	});

	test('shows course authors list', () => {
		const { getAllByTestId } = buildComponent(mockedStore);
		const authors = getAllByTestId('courseFormAuthorsAdded');
		expect(authors.length).toBeGreaterThan(0);
	});
});
