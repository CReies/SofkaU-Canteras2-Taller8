import { Link } from 'wouter';
import './Header.css';

const Header = ({ title, nContacts }) => {
	return (
		<header>
			<Link to='/'>
				<h2 className='title'>{title}</h2>
			</Link>
		</header>
	);
};

export default Header;
