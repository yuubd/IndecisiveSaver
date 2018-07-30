import React from 'react';
import './SearchBox.css';
const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div>
			<input
				className="pa3 ba b--color w-h etc"
				type="search"
				placeholder="search"
				onChange={searchChange}
			/>
		</div>
	);
};

export default SearchBox;
