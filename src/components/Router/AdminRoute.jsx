import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { isAdmin } from '../../store/selectors';

const AdminRoute = ({ component: Component, ...rest }) => {
	const isUserAdmin = useSelector(isAdmin);

	return (
		<Route
			{...rest}
			render={(props) =>
				isUserAdmin ? <Component {...props} /> : <Redirect to='/courses' />
			}
		/>
	);
};

export default AdminRoute;
