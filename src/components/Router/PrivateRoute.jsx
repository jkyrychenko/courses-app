import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import isTokenExist from '../../mixins/token';

const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) =>
				isTokenExist() ? <Component {...props} /> : <Redirect to='/login' />
			}
		/>
	);
};

export default PrivateRoute;
