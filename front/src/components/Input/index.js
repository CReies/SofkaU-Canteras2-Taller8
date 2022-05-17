import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Input.css';

const Input = ({
	name,
	nameId,
	type = 'text',
	example,
	className,
	icon,
	label,
	handleOnChange,
	value,
}) => {
	const faIcon = icon ? (
		<span className='icon'>
			<FontAwesomeIcon icon={icon} />
		</span>
	) : (
		''
	);

	const labelRender = label ? <label htmlFor={name}>{name}</label> : '';

	const id = `input-${nameId || name}`;

	return (
		<div className='formGroup'>
			{labelRender}
			<div className={icon ? 'input-with-icon' : ''}>
				<input
					type={type}
					name={name}
					id={id}
					placeholder={example ?? name}
					className={className}
					value={value}
					onChange={handleOnChange}
				/>
				<button className='icon'>{faIcon}</button>
			</div>
		</div>
	);
};

export default Input;
