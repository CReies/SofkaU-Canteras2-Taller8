import React from 'react';
import Contact from './Contact';
import '../css/Contacts.css';

const Contacts = ({ contacts }) => {
	const contactsRender = contacts.map(({ name, tel }) => (
		<Contact name={name} tel={tel} />
	));

	return <div className='contacts'>{contactsRender}</div>;
};

Contacts.propTypes = {};

export default Contacts;
