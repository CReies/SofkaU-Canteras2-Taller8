import { Link } from 'wouter';
import './Contact.css';

/**
 * Contact component
 * Is rendered in the Contacts component and shows the contact's full name and tel
 *
 * @param {Object} props Component props
 * @returns Contact component
 */
const Contact = ({ id, name, tel }) => {
	return (
		<Link to={`/detail/${id}`}>
			<div className='contact'>
				<div className='contactName'>{name}</div>
				<div className='contactTel'>{tel}</div>
			</div>
		</Link>
	);
};

export default Contact;
