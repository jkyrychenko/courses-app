import Logo from '../Logo/Logo';
import Button from '../Button/Button';

const Header = () => {
	return (
		<header className='border-bottom bg-light'>
			<div className='container'>
				<div className='d-flex flex-row justify-content-between align-items-center pt-3 pb-3'>
					<Logo />
					<div className='d-flex flex-row align-items-center'>
						<div className='me-4'>Yuliia</div>
						<Button title='Logout' />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
