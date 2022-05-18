import './Button.css';

/**
 * Button component
 *
 * @param {Object} props Component props
 * @returns Button component
 */
const Button = ({ value, onClick }) => {
	return (
		<button className='btn' onClick={onClick}>
			{value}
		</button>
	);
};

export default Button;
