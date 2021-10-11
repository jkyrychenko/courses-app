import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import Input from '../Input/Input';
import Button from '../Button/Button';

const Registration = () => {
	let history = useHistory();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		const user = {
			name,
			email,
			password,
			id: uuidv4(),
		};

		axios.post('http://localhost:3000/register', user).then((response) => {
			if (response.status >= 200) {
				history.push('/login');
			} else {
				console.log(response);
			}
		});
	};

	return (
		<div className='container'>
			<div className='w-50 mx-auto mt-5'>
				<h2 className='text-center mb-5'>Registration</h2>
				<form onSubmit={handleSubmit}>
					<Input
						id='userName'
						placeholder='Enter name...'
						title='Name'
						inputClass='mb-4'
						value={name}
						handleChange={(e) => setName(e.target.value)}
					/>
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
						<Button type='submit' title='Registration' />
					</div>
					<div className='text-center'>
						If you have an account you can <Link to='/login'>Login</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Registration;
