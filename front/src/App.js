import './css/App.css';
import AddContactForm from './components/AddContactForm/index';
import Header from './components/Header/index';
import { Route } from 'wouter';
import Home from './pages/Home';
import Detail from './pages/Detail';

const App = () => {
	return (
		<div className='app'>
			<aside>
				<Header title='Contacts' />
				<AddContactForm />
			</aside>
			<main>
				<Route component={Home} path='/' />
				<Route component={Detail} path={`/detail/:id`} />
			</main>
		</div>
	);
};

export default App;
