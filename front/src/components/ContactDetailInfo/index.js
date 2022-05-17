import { faChevronRight, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import editContact from '../../services/editContact';
import Input from '../Input';
import './ContactDetailInfo.css';

const ContactDetailInfo = ({ id, name, info }) => {
	const [isEditing, setEditing] = useState(false);
	const [inputValue, setInputValue] = useState(info);

	const handleClick = (e) => {
		e.preventDefault();
		setEditing(true);
	};

	const handleChange = (e) => {
		setInputValue(e.target.value);
	};

	const submitChange = (e) => {
		e.preventDefault();
		setInputValue(e.target[0].value);
		editContact({
			id,
			value: inputValue,
			info: name.toLocaleLowerCase(),
		});
		console.log(inputValue);
		setEditing(false);
	};
	const isBirthday = name === 'Birthday';

	const infoRender = isEditing ? (
		<>
			<form onSubmit={(e) => submitChange(e)} className='w-100'>
				<Input
					label={false}
					nameId={`edit-${name}-${id}`}
					name={`Edit ${name}`}
					icon={faChevronRight}
					className='input inputS'
					value={inputValue}
					handleOnChange={handleChange}
					type={isBirthday ? 'date' : 'text'}
				/>
			</form>
		</>
	) : (
		<>
			<h5>{inputValue ?? info}</h5>
			<span onClick={handleClick}>
				<FontAwesomeIcon icon={faEdit} />
			</span>
		</>
	);

	return (
		<>
			<div className='contactDetailInfo'>
				<div className='name'>
					<h3>{name}</h3>
				</div>
				<div className='info'>{infoRender}</div>
			</div>
		</>
	);
};

export default ContactDetailInfo;
