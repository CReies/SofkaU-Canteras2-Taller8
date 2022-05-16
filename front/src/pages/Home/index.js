import React from 'react';
import Contacts from '../../components/Contacts';
import SearchBar from '../../components/SearchBar';

const Home = () => {
	return (
		<>
			<section>
				<SearchBar />
			</section>
			<section>
				<Contacts />
			</section>
		</>
	);
};

export default Home;
