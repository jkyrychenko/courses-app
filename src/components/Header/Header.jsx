import PropTypes from 'prop-types';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../store/user/actionCreators';
import { getUserName, getUserStatus } from '../../store/selectors';
import api from '../../lib/api/api';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';

const Header = () => {
	const router = useHistory();
	const dispatch = useDispatch();
	const currentLocation = useLocation().pathname;
	const userName = useSelector(getUserName);
	const isAuth = useSelector(getUserStatus);

	const handleLogoutBtn = () => {
		const token = localStorage.getItem('userToken');
		api.logout(token).then(() => {
			localStorage.removeItem('userToken');
			dispatch(logoutUser());
			router.push('/login');
		});
	};

	return (
		<header className='border-bottom bg-light'>
			<div className='container'>
				<div className='d-flex flex-row justify-content-between align-items-center pt-3 pb-3'>
					<Logo />
					{currentLocation !== ('/login' || '/registration') && (
						<div className='d-flex flex-row align-items-center'>
							{isAuth ? (
								<>
									<div className='me-4'>{userName}</div>
									<Button title='Logout' handleClick={handleLogoutBtn} />
								</>
							) : (
								<Link to='/login' className='btn btn-info'>
									Login
								</Link>
							)}
						</div>
					)}
				</div>
			</div>
		</header>
	);
};

Header.propTypes = {
	handleLogout: PropTypes.func,
};

export default Header;
