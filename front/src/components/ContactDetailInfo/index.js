import { faChevronRight, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import editContact from '../../services/editContact';
import Input from '../Input';
import './ContactDetailInfo.css';

/**
 * ContactDetailInfo component
 * Shows one contact field and handle the contact editing
 *
 * @param {Object} props Component props
 * @returns ContactDetailInfo component
 */
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

		editContact(id, inputValue, name.toLocaleLowerCase());

		setEditing(false);
	};

	const isBirthday = name === 'Birthday';

	// What will be rendered depending if is editing or not
	const infoRender = isEditing ? (
		<>
			{/* If is editing, renders a form to handle the contact editing */}
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
			{/* If isn't editing only shows the info and the edit button */}
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
