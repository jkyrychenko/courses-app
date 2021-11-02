import { render, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import mockedStore from '../../../store/mocked-store';
import Courses from '../Courses';

const mockFetchedCourses = {
	loading: false,
	data: [
		{
			title: 'UI/UX',
			description: 'Lorem ipsum 12',
			duration: 124,
			authors: [
				'1c972c52-3198-4098-b6f7-799b45903199',
				'072fe3fc-e751-4745-9af5-aa9eed0ea9ed',
			],
			creationDate: '20/10/2021',
			id: 'fbba6300-b0a8-4483-8f07-fd4282eb3c04',
		},
	],
};

const mockFetchedEmptyCourses = { data: [] };

const buildComponent = (store) => {
	const history = createMemoryHistory();

	return render(
		<Router history={history}>
			<Provider store={store}>
				<Courses />
			</Provider>
		</Router>
	);
};

jest.mock('../../../mixins/use-fetch', () => ({
	useFetch: () => mockFetchedCourses,
}));

afterEach(() => {
	jest.clearAllMocks();
});

describe('Courses component', () => {
	test('amount of CourseCard equal length of courses array', () => {
		const { getAllByTestId } = buildComponent(mockedStore);
		const cards = getAllByTestId('courseCard');
		const courses = mockedStore.getState().allCourses.courses;
		expect(cards.length).toEqual(courses.length);
	});

	test('CourseForm should be showed after a click', () => {
		const history = createMemoryHistory();
		const { getByText } = render(
			<Router history={history}>
				<Provider store={mockedStore}>
					<Courses />
				</Provider>
			</Router>
		);
		const button = getByText('Add new course');
		fireEvent.click(button);
		expect(history.location.pathname).toBe('/courses/add');
	});
});

describe('Courses component', () => {
	jest.mock('../../../mixins/use-fetch', () => ({
		useFetch: () => mockFetchedEmptyCourses,
	}));

	test('Empty container if courses array length is 0', () => {
		const { getByText } = buildComponent(mockedStore);
		const message = getByText('No courses found. Please search or create one.');
		expect(message).toBeInTheDocument();
	});
});
