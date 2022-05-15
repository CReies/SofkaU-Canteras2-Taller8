import React from 'react';
import Contact from './Contact';
import '../css/Contacts.css';

const Contacts = ({ contacts }) => {
	const contactsRender = contacts.map(({ id, name, tel }) => (
		<Contact name={name} tel={tel} key={`contact-${id}`} />
	));

	return <div className='contacts'>{contactsRender}</div>;
};

Contacts.propTypes = {};

export default Contacts;
