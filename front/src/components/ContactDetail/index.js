import Button from '../Button';
import './ContactDetail.css'
import ContactDetailInfo from '../ContactDetailInfo';
import deleteContact from '../../services/deleteContact';
import { useLocation } from 'wouter';

const ContactDetail = ({ contact }) => {
	const { id, name, lastname, tel, email, birthday } = contact;
	const bDate = new Date(birthday);

	const formatBirthday = `${bDate.getDate()} / ${
		bDate.getMonth() + 1
	} / ${bDate.getFullYear()}`;
	const birthdayRender = birthday ? (
		<ContactDetailInfo id={id} name='Birthday' info={formatBirthday} />
	) : (
		''
	);
	const [, setPath] = useLocation();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('first');
		deleteContact({ id });
		setPath('/');
	};

	return (
		<div className='contactDetail'>
			<ContactDetailInfo id={id} name='Name' info={name} />
			<ContactDetailInfo id={id} name='Lastname' info={lastname} />
			<ContactDetailInfo id={id} name='Tel' info={tel} />
			<ContactDetailInfo id={id} name='Email' info={email} />
			{birthdayRender}
			<form onSubmit={handleSubmit}>
				<Button value={'Delete contact'} />
			</form>
		</div>
	);
};

export default ContactDetail;
