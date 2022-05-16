import Contacts from '../../components/Contacts';
import SearchBar from '../../components/SearchBar';
import './Home.css'

const Home = () => {
	return (
		<>
			<section>
				<SearchBar />
			</section>
			<section>
				<Contacts />
			</section>
		</>
	);
};

export default Home;
