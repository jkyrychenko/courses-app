import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminRoute = ({ component: Component, ...rest }) => {
	const isAdmin = useSelector((state) => state.user.role) === 'admin';

	return (
		<Route
			{...rest}
			render={(props) =>
				isAdmin ? <Component {...props} /> : <Redirect to='/courses' />
			}
		/>
	);
};

export default AdminRoute;
