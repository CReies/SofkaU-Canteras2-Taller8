import './css/App.css';
import AddContactForm from './components/AddContactForm';
import Header from './components/Header';
import { Route } from 'wouter';
import Home from './pages/Home';
import Detail from './pages/Detail';
import NewContact from './pages/NewContact';

/**
 * Main app
 *
 * @author Cristian Reyes
 *
 * @returns React component
 */
const App = () => {
	return (
		<div className='app'>
			<aside>
				<Header title='Contacts' />
				<div className='onlyPc'>
					<AddContactForm />
				</div>
			</aside>
			<main>
				<Route component={Home} path='/' />
				<Route component={Detail} path='/detail/:id' />
				<Route component={NewContact} path='/new' />
			</main>
		</div>
	);
};

export default App;
