import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import mockedStore from '../../../store/mocked-store';
import Header from '../Header';

const buildComponent = (store) => {
	const history = createMemoryHistory();

	return render(
		<Router history={history}>
			<Provider store={store}>
				<Header />
			</Provider>
		</Router>
	);
};

describe('Header component', () => {
	test('has logo', () => {
		const { container } = buildComponent(mockedStore);
		const logo = container.querySelector("img[class='logo']");
		expect(logo).toBeInTheDocument();
	});

	test('has user name', () => {
		const { getByText } = buildComponent(mockedStore);
		const userName = getByText('User Test');
		expect(userName).toBeInTheDocument();
	});
});
