import Contact from '../Contact';
import useContacts from '../../hooks/useContacts';
import './Contacts.css';

/**
 * Contacts component
 *
 * @returns Contacts component
 */
const Contacts = () => {
	const { contacts, loading } = useContacts();

	// What will be rendered
	const contactsRender = loading
		? 'loading'
		: contacts.map((c) => {
				//Contact component for each contact
				return (
					<Contact
						name={`${c.name} ${c.lastname}`}
						tel={c.tel}
						id={c.id}
						key={`contact-${c.id}`}
					/>
				);
		  });

	return <div className='contacts'>{contactsRender}</div>;
};

export default Contacts;
