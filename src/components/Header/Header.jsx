import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';

const Header = ({ isLoggedIn, user, handleLogout }) => {
	const router = useHistory();
	const currentLocation = useLocation().pathname;
	const [authorized, setAuthorized] = useState(isLoggedIn);
	const [userName, setUserName] = useState(user);

	const handleLogoutBtn = () => {
		handleLogout();
		router.push('/login');
	};

	useEffect(() => {
		setAuthorized(isLoggedIn);
		setUserName(user);
	}, [isLoggedIn, user]);

	return (
		<header className='border-bottom bg-light'>
			<div className='container'>
				<div className='d-flex flex-row justify-content-between align-items-center pt-3 pb-3'>
					<Logo />
					{currentLocation !== ('/login' || '/registration') && (
						<div className='d-flex flex-row align-items-center'>
							{authorized ? (
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
	isLoggedIn: PropTypes.bool.isRequired,
	user: PropTypes.string,
	handleLogout: PropTypes.func,
};

export default Header;
