import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import '../css/SearchBar.css';
import FormComponent from './FormComponent';

const SearchBar = () => {
	return (
		<div className='searchBar'>
			<FormComponent
				name='Search'
				className={'searchInput'}
				label={false}
				icon={faSearch}
			/>
		</div>
	);
};

export default SearchBar;
