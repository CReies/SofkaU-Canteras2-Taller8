import './AddContactForm.css';
import addContact from '../../services/addContact';
import Input from '../Input';
import Button from '../Button';
import { useState } from 'react';
import { useLocation } from 'wouter';

/**
 * AddContactComponent
 * Renders a form where the user can add a contact
 *
 * @returns AddContactForm component
 */
const AddContactForm = () => {
	const [name, setName] = useState('');
	const [lastname, setLastname] = useState('');
	const [tel, setTel] = useState('');
	const [email, setEmail] = useState('');
	const [birthday, setBirthday] = useState('');
	const [, setPath] = useLocation();

	const handleSubmit = (e) => {
		e.preventDefault();
		setPath('/', true);
		addContact({ name, lastname, tel, email, birthday });
	};

	return (
		<form className='addContactForm' onSubmit={handleSubmit}>
			<Input
				name='Name'
				example={'Juanito'}
				className={'input'}
				label={true}
				handleOnChange={(e) => {
					setName(e.target.value);
				}}
			/>

			<Input
				name='Lastname'
				example={'Rodriguez'}
				className={'input'}
				label={true}
				value={lastname}
				handleOnChange={(e) => {
					setLastname(e.target.value);
				}}
			/>

			<Input
				name='Tel'
				example={'Ex: +123123123'}
				className={'input'}
				label={true}
				handleOnChange={(e) => {
					setTel(e.target.value);
				}}
			/>

			<Input
				name='Email'
				type='email'
				example={'Juanito@example.com'}
				className={'input'}
				handleOnChange={(e) => {
					setEmail(e.target.value);
				}}
				label={true}
			/>

			<Input
				name='Birthday'
				type='date'
				className={'input'}
				label={true}
				handleOnChange={(e) => {
					setBirthday(e.target.value);
				}}
			/>

			<Button value='Add' />
		</form>
	);
};

export default AddContactForm;
