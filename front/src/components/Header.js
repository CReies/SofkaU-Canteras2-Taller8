import '../css/Header.css';

const Header = ({ title, nContacts }) => {
	return (
		<header>
			<h2>{title}</h2>
			<h4>{nContacts} contacts</h4>
		</header>
	);
};

export default Header;
