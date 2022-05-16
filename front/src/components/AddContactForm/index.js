import './AddContactForm.css';
import Input from '../Input';

const AddContactForm = () => {
	return (
		<form className='addContactForm'>
			<Input
				name='Name'
				example={'Juanito'}
				className={'addContactInput'}
				label={true}
			/>

			<Input
				name='Lastname'
				example={'Rodriguez'}
				className={'addContactInput'}
				label={true}
			/>

			<Input
				name='Tel'
				example={'Ex: +123123123'}
				className={'addContactInput'}
				label={true}
			/>

			<Input
				name='Email'
				type='email'
				example={'Juanito@example.com'}
				className={'addContactInput'}
				label={true}
			/>

			<Input
				name='Birthday'
				type='date'
				className={'addContactInput'}
				label={true}
			/>
		</form>
	);
};

export default AddContactForm;
