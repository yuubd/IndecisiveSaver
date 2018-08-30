import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import { searchPlaces, requestRestaurants, changeRoute, postSignInfo } from './reducers';
import 'tachyons';

const logger = createLogger();

const rootReducer = combineReducers({
	searchPlaces,
	requestRestaurants,
	changeRoute,
	postSignInfo
});
// usually because there are many reducers the parameter should be rootReducer
// middleware goes as the second parameter
// redux is not async. thunkMiddleware makes handle asyn actions like ajax calls
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
	// provider makes the props to be accessed from top to bottom components
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
