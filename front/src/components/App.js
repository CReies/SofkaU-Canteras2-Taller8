<<<<<<< HEAD
=======
import { GifsContextProvider } from '../context/ContactsContext';
>>>>>>> 57443f8503f0142dcb3635e873ddd67dd54ec1a9
import '../css/App.css';
import AddContactForm from './AddContactForm';
import Contacts from './Contacts';
import Header from './Header';
import SearchBar from './SearchBar';

const App = () => {
	const nContacts = 'contacts'.length;

	return (
<<<<<<< HEAD
=======
		<GifsContextProvider>
>>>>>>> 57443f8503f0142dcb3635e873ddd67dd54ec1a9
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
						<Contacts />
					</section>
				</main>
			</div>
<<<<<<< HEAD
=======
		</GifsContextProvider>
>>>>>>> 57443f8503f0142dcb3635e873ddd67dd54ec1a9
	);
};

export default App;
