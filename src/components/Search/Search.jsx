import { useState } from 'react';
import Button from '../Button/Button';

const Search = (props) => {
	const [query, setQuery] = useState('');

	return (
		<div className='input-group'>
			<input
				type='text'
				className='form-control'
				placeholder='Enter course name...'
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<Button title='Search' action={props.action} />
		</div>
	);
};

export default Search;
