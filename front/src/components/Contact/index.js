import { Link } from 'wouter';
import './Contact.css';

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
