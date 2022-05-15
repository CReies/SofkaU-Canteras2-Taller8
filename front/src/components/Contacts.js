import React from 'react';
import Contact from './Contact';
import useContacts from '../hooks/useContacts';
import '../css/Contacts.css';

const Contacts = () => {
	const { loading, contacts } = useContacts();
	const contactsRender = loading
		? 'loading'
		: contacts.map((c) => {
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
