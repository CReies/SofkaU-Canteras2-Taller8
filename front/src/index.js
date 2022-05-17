import 'normalize.css';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App';
import reportWebVitals from './test/reportWebVitals';

const root = createRoot(document.getElementById('root'));
root.render(
	<StrictMode>
		<App />
	</StrictMode>
);

reportWebVitals();
