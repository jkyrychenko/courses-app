import { useState } from 'react';
import Button from '../Button/Button';

const Search = (props) => {
	const [query, setQuery] = useState('');

	return (
		<form onSubmit={props.action}>
			<div className='input-group'>
				<input
					type='text'
					className='form-control'
					placeholder='Enter course name...'
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<Button title='Search' type='submit' />
			</div>
		</form>
	);
};

export default Search;
