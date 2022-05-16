import ContactDetailInfo from '../ContactDetailInfo';

const ContactDetail = ({ contact }) => {
	const { id, name, lastname, tel, email, birthday } = contact;
	return (
		<>
			<ContactDetailInfo id={id} name='Name' info={name} />
			<ContactDetailInfo id={id} name='Lastname' info={lastname} />
			<ContactDetailInfo id={id} name='Tel' info={tel} />
			<ContactDetailInfo id={id} name='Email' info={email} />
			<ContactDetailInfo id={id} name='Birthday' info={birthday} />
		</>
	);
};

export default ContactDetail;
