import '../css/AddContactForm.css';
import FormComponent from './FormComponent';

const AddContactForm = () => {
	return (
		<form className='AddContactForm'>
			<FormComponent
				name='Name'
				example={'Juanito'}
				className={'AddContactInput'}
				label={true}
			/>

			<FormComponent
				name='Lastname'
				example={'Rodriguez'}
				className={'AddContactInput'}
				label={true}
			/>

			<FormComponent
				name='Tel'
				example={'Ex: +123123123'}
				className={'AddContactInput'}
				label={true}
			/>

			<FormComponent
				name='Email'
				type='email'
				example={'Juanito@example.com'}
				className={'AddContactInput'}
				label={true}
			/>

			<FormComponent
				name='Birthday'
				type='date'
				className={'AddContactInput'}
				label={true}
			/>
		</form>
	);
};

export default AddContactForm;
