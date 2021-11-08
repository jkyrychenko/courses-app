import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import getMockedStore from '../../../store/mocked-store';
import CourseCard from '../CourseCard';

const buildComponent = (store, props) => {
	const history = createMemoryHistory();

	return render(
		<Router history={history}>
			<Provider store={store}>
				<CourseCard {...props} />
			</Provider>
		</Router>
	);
};

describe('CourseCard component', () => {
	let props;

	beforeEach(() => {
		props = {
			course: {
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
			authors: ['author2', 'author3'],
		};
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	test('has title', () => {
		const { getByText } = buildComponent(getMockedStore(), props);
		const title = getByText('UI/UX');
		expect(title).toBeInTheDocument();
	});

	test('has description', () => {
		const { getByText } = buildComponent(getMockedStore(), props);
		const description = getByText('Lorem ipsum 12');
		expect(description).toBeInTheDocument();
	});

	test('has duration in correct format', () => {
		const { getByText } = buildComponent(getMockedStore(), props);
		const duration = getByText('02:04 hours');
		expect(duration).toBeInTheDocument();
	});

	test('has authors listed', () => {
		const { getByText } = buildComponent(getMockedStore(), props);
		const authors = getByText('author2, author3');
		expect(authors).toBeInTheDocument();
	});

	test('has creation date', () => {
		const { getByText } = buildComponent(getMockedStore(), props);
		const creationDate = getByText('20/10/2021');
		expect(creationDate).toBeInTheDocument();
	});
});
