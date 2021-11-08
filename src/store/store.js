import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

import reducers from './index';

const middleware = [ReduxThunk];
const store = createStore(
	reducers,
	{},
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
