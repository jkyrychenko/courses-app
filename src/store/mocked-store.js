const mockedState = {
	allAuthors: {
		authors: [
			{ name: 'Chandler Bing', id: '5885e3a8-f1aa-450f-98b8-d3b8ce035c8b' },
			{ name: 'author2', id: '1c972c52-3198-4098-b6f7-799b45903199' },
			{ name: 'author3', id: '072fe3fc-e751-4745-9af5-aa9eed0ea9ed' },
		],
		error: '',
	},
	allCourses: {
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
		error: '',
	},
	user: {
		isAuth: true,
		name: 'User Test',
		email: 'user@test.com',
		token: '123456789',
		role: 'admin',
	},
};

const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

export default mockedStore;
