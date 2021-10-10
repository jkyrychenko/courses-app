import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';

const Header = ({ isLoggedIn, handleLogout }) => {
	const currentLocation = useLocation().pathname;
	const [authorized, setAuthorized] = useState(isLoggedIn);

	useEffect(() => {
		setAuthorized(isLoggedIn);
	}, [isLoggedIn]);

	return (
		<header className='border-bottom bg-light'>
			<div className='container'>
				<div className='d-flex flex-row justify-content-between align-items-center pt-3 pb-3'>
					<Logo />
					{currentLocation !== ('/login' || '/registration') && (
						<div className='d-flex flex-row align-items-center'>
							{authorized ? (
								<>
									<div className='me-4'>Yuliia</div>
									<Button title='Logout' handleClick={handleLogout} />
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

export default Header;
