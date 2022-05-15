import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FormComponent = ({
	name,
	type = 'text',
	example,
	className,
	icon,
	typeIcon,
}) => {
	return (
		<div className='form-group'>
			{icon ? (
				<FontAwesomeIcon icon={`fa-${typeIcon ?? 'solid'} fa-${icon}`} />
			) : (
				<></>
			)}
			<label htmlFor={name}>{name}</label>
			<input
				type={type}
				name={name}
				id={`addContactForm-${name}`}
				placeholder={example ?? name}
				className={className}
			/>
		</div>
	);
};

export default FormComponent;
