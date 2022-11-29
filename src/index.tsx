import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.scss';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { persistor } from './store/store/store';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<BrowserRouter>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	</BrowserRouter>
);
