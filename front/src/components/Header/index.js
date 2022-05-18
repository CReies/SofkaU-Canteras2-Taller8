import { Link, useLocation } from 'wouter';
import Button from '../Button';
import './Header.css';

/**
 * Header component, shows a button that redirects to '/new' if the app is displayed in mobile
 *
 * @param {Object} props Component props
 * @returns Header component
 */
const Header = ({ title }) => {
	const [, setPath] = useLocation();

	// Redirects to '/new'
	const handleClick = () => {
		setPath('/new');
	};

	return (
		<header>
			<Link to='/'>
				<h2 className='title'>{title}</h2>
			</Link>
			<div className='onlyMobile'>
				<Button value={'+'} onClick={handleClick} />
			</div>
		</header>
	);
};

export default Header;
