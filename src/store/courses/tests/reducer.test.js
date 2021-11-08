import { actionTypes } from '../actionTypes';
import courses from '../reducer';

describe('Courses reducer', () => {
	test('should return the initial state', () => {
		expect(courses(undefined, {})).toEqual({
			courses: [],
			error: null,
			loading: false,
		});
	});

	test('should add new course and return new state', () => {
		const prevState = {
			courses: [],
			error: null,
			loading: false,
		};
		const newCourse = {
			title: 'UI/UX',
			description: 'Lorem ipsum 12',
			duration: 124,
			authors: [
				'1c972c52-3198-4098-b6f7-799b45903199',
				'072fe3fc-e751-4745-9af5-aa9eed0ea9ed',
			],
			creationDate: '20/10/2021',
			id: 'fbba6300-b0a8-4483-8f07-fd4282eb3c04',
		};
		expect(
			courses(prevState, { type: actionTypes.ADD_COURSE, payload: newCourse })
		).toEqual({
			courses: [
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
			error: null,
			loading: false,
		});
	});

	test('should get all courses and returns new state', () => {
		const fetchedCourses = [
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
		];
		expect(
			courses(undefined, {
				type: actionTypes.FETCH_COURSES_SUCCESS,
				payload: fetchedCourses,
			})
		).toEqual({
			courses: [
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
			error: null,
			loading: false,
		});
	});
});
