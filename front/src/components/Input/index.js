import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Input.css';

/**
 * Dinamic input component
 *
 * @param {Object} props Component props
 * @returns Input component
 */
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
	// Fontawesome icon if available
	const faIcon = icon ? (
		<span className='icon'>
			<FontAwesomeIcon icon={icon} />
		</span>
	) : (
		''
	);

	// If label is true renders the lable
	const labelRender = label ? <label htmlFor={name}>{name}</label> : '';

	// The input id
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
				<button className={`icon ${type === 'date' ? 'icon-date' : ''}`}>
					{faIcon}
				</button>
			</div>
		</div>
	);
};

export default Input;
