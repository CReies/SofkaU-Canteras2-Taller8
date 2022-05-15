import '../css/App.css';
import AddContactForm from './AddContactForm';
import Contacts from './Contacts';
import Header from './Header';
import SearchBar from './SearchBar';

const App = () => {
	const nContacts = 'contacts'.length;

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
						<Contacts />
					</section>
				</main>
			</div>
	);
};

export default App;
