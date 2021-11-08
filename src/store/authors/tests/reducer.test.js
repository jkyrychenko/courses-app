import { actionTypes } from '../actionTypes';
import authors from '../reducer';

describe('Authors reducer', () => {
	test('should return the initial state', () => {
		expect(authors(undefined, {})).toEqual({
			authors: [],
			error: null,
			loading: false,
		});
	});

	test('should add new author and return new state', () => {
		const prevState = {
			authors: [],
			error: null,
			loading: false,
		};
		const newAuthor = {
			name: 'Chandler Bing',
			id: '5885e3a8-f1aa-450f-98b8-d3b8ce035c8b',
		};
		expect(
			authors(prevState, { type: actionTypes.ADD_AUTHOR, payload: newAuthor })
		).toEqual({
			authors: [
				{
					name: 'Chandler Bing',
					id: '5885e3a8-f1aa-450f-98b8-d3b8ce035c8b',
				},
			],
			error: null,
			loading: false,
		});
	});
});
