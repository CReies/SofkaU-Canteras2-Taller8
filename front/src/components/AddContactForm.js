import '../css/AddContactForm.css';
import FormComponent from './FormComponent';

const AddContactForm = () => {
	return (
		<form className='AddContactForm'>
			<FormComponent
				name='Name'
				example={'Juanito'}
				className={'AddContactInput'}
			/>

			<FormComponent
				name='Lastname'
				example={'Rodriguez'}
				className={'AddContactInput'}
			/>

			<FormComponent
				name='Tel'
				example={'Ex: +123123123'}
				className={'AddContactInput'}
			/>

			<FormComponent
				name='Email'
				type='email'
				example={'Juanito@example.com'}
				className={'AddContactInput'}
			/>

			<FormComponent
				name='Birthday'
				type='date'
				className={'AddContactInput'}
			/>
		</form>
	);
};

export default AddContactForm;
