import './ContactDetailInfo.css';

const ContactDetailInfo = ({ name, info }) => {
	return (
		<>
			<div className='contactDetailInfo'>
				<h3>{name}</h3>
				<h5>{info}</h5>
			</div>
		</>
	);
};

export default ContactDetailInfo;
