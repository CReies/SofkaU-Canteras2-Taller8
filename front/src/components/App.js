import { useState } from 'react';
import '../css/App.css';
import AddContactForm from './AddContactForm';
import Contacts from './Contacts';
import Header from './Header';
import SearchBar from './SearchBar';

const App = () => {
	const [contacts] = useState([
		{ name: 'Juan', tel: '1231231234', id: 1 },
		{ name: 'Juan', tel: '1231231234', id: 2 },
		{ name: 'Juan', tel: '1231231234', id: 3 },
	]);
	const nContacts = contacts.length;

	return (
		<div className='app'>
			<aside>
				<Header title='Contacts' nContacts={nContacts} />
				<AddContactForm />
			</aside>
			<main>
				<section>
					<SearchBar />
				</section>
				<section>
					<Contacts contacts={contacts} />
				</section>
			</main>
		</div>
	);
};

export default App;
