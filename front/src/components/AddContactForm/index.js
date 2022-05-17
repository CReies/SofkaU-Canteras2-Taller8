import './AddContactForm.css';
import Input from '../Input';

const AddContactForm = () => {
	return (
		<form className='addContactForm'>
			<Input name='Name' example={'Juanito'} className={'input'} label={true} />

			<Input
				name='Lastname'
				example={'Rodriguez'}
				className={'input'}
				label={true}
			/>

			<Input
				name='Tel'
				example={'Ex: +123123123'}
				className={'input'}
				label={true}
			/>

			<Input
				name='Email'
				type='email'
				example={'Juanito@example.com'}
				className={'input'}
				label={true}
			/>

			<Input name='Birthday' type='date' className={'input'} label={true} />
		</form>
	);
};

export default AddContactForm;
