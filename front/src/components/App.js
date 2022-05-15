import { useState } from 'react';
import '../css/App.css';
import AddContactForm from './AddContactForm';
import Contacts from './Contacts';
import Header from './Header';

const App = () => {
	const [contacts] = useState([
		{ name: 'Juan', tel: '1231231234' },
		{ name: 'Juan', tel: '1231231234' },
		{ name: 'Juan', tel: '1231231234' },
		{ name: 'Juan', tel: '1231231234' },
		{ name: 'Juan', tel: '1231231234' },
		{ name: 'Juan', tel: '1231231234' },
		{ name: 'Juan', tel: '1231231234' },
		{ name: 'Juan', tel: '1231231234' },
	]);

	return (
		<div className='app'>
			<aside>
				<Header title='Contacts' nContacts={contacts.length} />
				<AddContactForm />
			</aside>
			<main>
				<section>
					<Contacts contacts={contacts} />
				</section>
			</main>
		</div>
	);
};

export default App;
