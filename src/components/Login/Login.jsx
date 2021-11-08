import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loginUser } from '../../store/user/thunk';
import { getUserStatus, getUserError } from '../../store/selectors';

import Input from '../Input/Input';
import Button from '../Button/Button';
import Message from '../Message/Message';

const Login = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const isAuthUser = useSelector(getUserStatus);
	const error = useSelector(getUserError);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loginError, setLoginError] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();

		const user = {
			email,
			password,
		};

		dispatch(loginUser(user));
	};

	useEffect(() => {
		if (isAuthUser) {
			history.push('/courses');
		}
	}, [history, isAuthUser]);

	useEffect(() => {
		setLoginError(error);
	}, [error]);

	return (
		<div className='container'>
			{loginError && <Message text={loginError} type='danger' />}
			<div className='w-50 mx-auto mt-5'>
				<h2 className='text-center mb-5'>Login</h2>
				<form onSubmit={handleSubmit}>
					<Input
						type='email'
						id='userEmail'
						placeholder='Enter email...'
						title='Email'
						inputClass='mb-4'
						value={email}
						handleChange={(e) => setEmail(e.target.value)}
					/>
					<Input
						type='password'
						id='userPassword'
						placeholder='Enter password...'
						title='Password'
						inputClass='mb-4'
						value={password}
						handleChange={(e) => setPassword(e.target.value)}
					/>
					<div className='text-center mb-3'>
						<Button type='submit' title='Login' />
					</div>
					<div className='text-center'>
						If you don't have an account you can{' '}
						<Link to='/registration'>Register</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

Login.propTypes = {
	handleLogin: PropTypes.func,
};

export default Login;
