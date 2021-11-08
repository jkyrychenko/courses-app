import { render, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import getMockedStore from '../../../store/mocked-store';

import Courses from '../Courses';

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

describe('<Courses />', () => {
	test('amount of CourseCard equal length of courses array', () => {
		const { getAllByTestId } = buildComponent(getMockedStore());
		const renderedCourses = getAllByTestId('courseCard');
		const storedCourses = getMockedStore().getState().allCourses.courses;

		expect(renderedCourses.length).toEqual(storedCourses.length);
	});

	test('should show an empty container if no courses', () => {
		const store = getMockedStore({ allCourses: { courses: [] } });
		const { queryByTestId, getByText } = buildComponent(store);
		const courses = queryByTestId('courseCard');
		const message = getByText('No courses found. Please search or create one.');

		expect(courses).toBeNull();
		expect(message).toBeInTheDocument();
	});

	test('CourseForm should be showed after a click', () => {
		const history = createMemoryHistory();
		const { getByText } = render(
			<Router history={history}>
				<Provider store={getMockedStore()}>
					<Courses />
				</Provider>
			</Router>
		);
		const button = getByText('Add new course');

		fireEvent.click(button);

		expect(button).toBeInTheDocument();
		expect(history.location.pathname).toBe('/courses/add');
	});
});
