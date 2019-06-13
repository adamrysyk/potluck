import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from './components/App/App';
import './styles/main.scss';

const Page = () => (
	<Provider store={store}>
	  <App />
	</Provider>
);

ReactDOM.render(
	<Page />,
	document.getElementById('root')
);
