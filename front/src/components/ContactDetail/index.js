import Button from '../Button';
import './ContactDetail.css';
import ContactDetailInfo from '../ContactDetailInfo';
import deleteContact from '../../services/deleteContact';
import { useLocation } from 'wouter';

/**
 * ContactDetail component
 * Renders one ContactComponentInfo for each contact data
 *
 * @param {Object} props Component props
 * @returns ContactDetail component
 */
const ContactDetail = ({ contact }) => {
	const { id, name, lastname, tel, email, birthday } = contact;
	const bDate = new Date(birthday);

	// Formats the birthday to - DD / MM / YY -
	const formatBirthday = `${bDate.getDate()} / ${
		bDate.getMonth() + 1
	} / ${bDate.getFullYear()}`;

	// Renders the birthday only if it's present
	const birthdayRender = birthday ? (
		<ContactDetailInfo id={id} name='Birthday' info={formatBirthday} />
	) : (
		''
	);

	const [, setPath] = useLocation();

	// Deletes the contact and redirects to home page
	const handleSubmit = (e) => {
		e.preventDefault();
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
