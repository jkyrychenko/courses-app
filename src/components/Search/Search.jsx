import { useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

const Search = (props) => {
	const [query, setQuery] = useState('');

	return (
		<form onSubmit={props.action({ query })}>
			<div className='input-group'>
				<Input
					placeholder='Enter course name...'
					value={query}
					change={(e) => setQuery(e.target.value)}
				/>
				<Button title='Search' type='submit' />
			</div>
		</form>
	);
};

export default Search;
