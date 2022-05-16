import './AddContactForm.css';
import Input from '../Input';

const AddContactForm = () => {
	return (
		<form className='AddContactForm'>
			<Input
				name='Name'
				example={'Juanito'}
				className={'AddContactInput'}
				label={true}
			/>

			<Input
				name='Lastname'
				example={'Rodriguez'}
				className={'AddContactInput'}
				label={true}
			/>

			<Input
				name='Tel'
				example={'Ex: +123123123'}
				className={'AddContactInput'}
				label={true}
			/>

			<Input
				name='Email'
				type='email'
				example={'Juanito@example.com'}
				className={'AddContactInput'}
				label={true}
			/>

			<Input
				name='Birthday'
				type='date'
				className={'AddContactInput'}
				label={true}
			/>
		</form>
	);
};

export default AddContactForm;
