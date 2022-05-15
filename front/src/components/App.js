import { useState } from 'react';
import '../css/App.css';
import AddContactForm from './AddContactForm';
import Contacts from './Contacts';
import FormComponent from './FormComponent';
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
	const nContacts = contacts.length;

	return (
		<div className='app'>
			<aside>
				<Header title='Contacts' nContacts={nContacts} />
				<AddContactForm />
			</aside>
			<main>
				<section>
					<FormComponent name='Search' className={'searchInput'} />
				</section>
				<section>
					<Contacts contacts={contacts} />
				</section>
			</main>
		</div>
	);
};

export default App;
