import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import reducers from './index';

const middleware = [ReduxThunk];
const store = createStore(
	reducers,
	{},
	// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
