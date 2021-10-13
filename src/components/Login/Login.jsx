import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Message from '../Message/Message';

const Login = ({ handleLogin }) => {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loginError, setLoginError] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		const user = {
			email,
			password,
		};

		axios
			.post('http://localhost:3000/login', user)
			.then((response) => {
				if (response.data.successful) {
					localStorage.setItem('userToken', response.data.result);
					handleLogin();
					history.push('/courses');
				}
			})
			.catch((error) => {
				console.log(error.response.data);
				setLoginError(true);
			});
	};

	return (
		<div className='container'>
			{loginError && <Message text='Entered data is invalid.' type='danger' />}
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
