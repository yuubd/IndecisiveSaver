import * as C from './constants.js';

const initialStateSearch = {
	searchField: ''
};
/** searchRobots should be a true function
* return an output does not modify anything some input, same output
* setting default parameter prevent errors when empty parameters passed
*/
export const searchPlaces = (state = initialStateSearch, action = {}) => {
	switch (action.type) {
		case C.CHANGE_SEARCH_FIELD:
			// merge state and then action.payload to an empty obj
			return Object.assign({}, state, { searchField: action.payload });

		default:
			return state;
	}
};

const initialStateRestaurants = {
	isPending: false,
	restaurants: [],
	error: ''
};

export const requestRestaurants = (state = initialStateRestaurants, action = {}) => {
	console.log('REQUESTRESTAURANTS IS CALLED');
	switch (action.type) {
		case C.REQUEST_RESTAURANTS_PENDING:
			return Object.assign({}, state, { isPending: true });

		case C.REQUEST_RESTAURANTS_SUCCESS:
			return Object.assign({}, state, { restaurants: action.payload, isPending: false });

		case C.REQUEST_RESTAURANTS_FAILED:
			return Object.assign({}, state, { error: action.payload, isPending: false });

		default:
			return state;
	}
};

const initialRoute = {
	route: ''
};

export const changeRoute = (state = initialRoute, action = {}) => {
	switch (action.type) {
		case C.CHANGE_ROUTE:
			return Object.assign({}, state, { route: action.payload });

		case C.CHANGE_ROUTE_HOME:
			return Object.assign({}, state, { route: action.payload });

		case C.CHANGE_ROUTE_SIGNUP:
			return Object.assign({}, state, { route: action.payload });

		case C.CHANGE_ROUTE_SIGNIN:
			return Object.assign({}, state, { route: action.payload });

		default:
			return state;
	}
};

const initialSignInfo = {
	email: '',
	password: '',
	name: '',
	logInStatus: false
};

export const postSignInfo = (state = initialSignInfo, action = {}) => {
	switch (action.type) {
		case C.POST_SIGNINFO_EMAIL:
			return Object.assign({}, state, {
				email: action.payload
			});

		case C.POST_SIGNINFO_PASSWORD:
			return Object.assign({}, state, {
				password: action.payload
			});

		case C.POST_SIGNINFO_NAME:
			return Object.assign({}, state, {
				name: action.payload
			});

		case C.POST_SIGNINFO_LOGINSTATUS:
			return Object.assign({}, state, {
				logInStatus: action.payload
			});

		default:
			return state;
	}
};
