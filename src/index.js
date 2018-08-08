import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { searchRobots, searchPlaces } from './reducers';
import 'tachyons';

// usually because there are many reducers the parameter should be rootReducer
const store = createStore(searchPlaces);

ReactDOM.render(
	// provider makes the props to be accessed from top to bottom components
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
