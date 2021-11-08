import PropTypes from 'prop-types';
import { useState } from 'react';

import Input from '../Input/Input';
import Button from '../Button/Button';

const Search = ({ handleSearch }) => {
	const [query, setQuery] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		handleSearch(query);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className='input-group'>
				<Input
					placeholder='Enter course name...'
					value={query}
					handleChange={(e) => setQuery(e.target.value)}
				/>
				<Button title='Search' type='submit' />
			</div>
		</form>
	);
};

Search.propTypes = {
	handleSearch: PropTypes.func,
};

export default Search;
