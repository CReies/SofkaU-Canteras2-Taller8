import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FormComponent = ({
	name,
	type = 'text',
	example,
	className,
	icon,
	typeIcon,
	label,
}) => {
	const faIcon = icon ? (
		<span className='icon'>
			<FontAwesomeIcon icon={icon} />
		</span>
	) : (
		''
	);

	const labelRender = label ? <label htmlFor={name}>{name}</label> : '';

	const id = `formComponent-${name}`;

	return (
		<div className='form-group'>
			{labelRender}
			<div className={icon ? 'input-with-icon' : ''}>
				<input
					type={type}
					name={name}
					id={id}
					placeholder={example ?? name}
					className={className}
				/>
				{faIcon}
			</div>
		</div>
	);
};

export default FormComponent;
