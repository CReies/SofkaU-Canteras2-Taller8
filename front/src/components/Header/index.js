import { Link, useLocation } from 'wouter';
import Button from '../Button';
import './Header.css';

const Header = ({ title, nContacts }) => {
	const [, setPath] = useLocation();

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
