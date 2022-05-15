import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FormComponent = ({
	name,
	type = 'text',
	example,
	className,
	icon,
	typeIcon,
}) => {
	const faIcon = icon ? (
		<FontAwesomeIcon icon={`fa-${typeIcon ?? 'solid'} fa-${icon}`} />
	) : (
		<></>
	);

	const id = `formComponent-${name}`;

	return (
		<div className='form-group'>
			{faIcon}
			<label htmlFor={name}>{name}</label>
			<input
				type={type}
				name={name}
				id={id}
				placeholder={example ?? name}
				className={className}
			/>
		</div>
	);
};

export default FormComponent;
