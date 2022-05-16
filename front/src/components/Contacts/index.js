import React from 'react';
import Contact from '../Contact/index';
import useContacts from '../../hooks/useContacts';
import './Contacts.css';

const Contacts = () => {
	const { contacts, loading } = useContacts();
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
