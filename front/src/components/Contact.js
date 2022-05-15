import { Link } from 'wouter';

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
