import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/redux/store';
import './index.css';
import App from './app/App';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<Provider store={store} >
			<App />
		</Provider>
	</React.StrictMode>
);
