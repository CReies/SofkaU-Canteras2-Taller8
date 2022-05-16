import React from 'react';
import Contact from '../../components/Contact';
import useContact from '../../hooks/useContact';

const Detail = ({ params }) => {
	const { id } = params;
	const { contact, loading } = useContact({ id });
	const contactRender = loading ? (
		'loading'
	) : (
		<Contact
			name={`${contact.name} ${contact.lastname}`}
			tel={contact.tel}
			id={contact.id}
			key={`contact-${contact.id}`}
		/>
	);
	return <div>{contactRender}</div>;
};

export default Detail;
