import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';
import Input from '../Input';

const SearchBar = () => {
	return (
		<div className='searchBar'>
			<Input
				name='Search'
				className={'input inputL'}
				label={false}
				icon={faSearch}
			/>
		</div>
	);
};

export default SearchBar;
