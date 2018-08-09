import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { searchPlaces } from './reducers';
import 'tachyons';

const logger = createLogger();

// usually because there are many reducers the parameter should be rootReducer
// middleware goes as the second parameter
const store = createStore(searchPlaces, applyMiddleware(logger));

ReactDOM.render(
	// provider makes the props to be accessed from top to bottom components
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
