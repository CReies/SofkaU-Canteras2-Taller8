const Contact = ({ name, tel }) => {
	return (
		<div className='contact'>
			<div className='contactName'>{name}</div>
			<div className='contactTel'>{tel}</div>
		</div>
	);
};

export default Contact;
