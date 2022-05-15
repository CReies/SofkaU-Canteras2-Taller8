import React from 'react';
import Contact from './Contact';
import '../css/Contacts.css';

const Contacts = ({ contacts }) => {
	return (
		<div className='contacts'>
			{contacts.map(({ name, tel }) => (
				<Contact name={name} tel={tel} />
			))}
		</div>
	);
};

Contacts.propTypes = {};

export default Contacts;
