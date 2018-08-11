import {
	CHANGE_SEARCH_FIELD,
	REQUEST_RESTAURANTS_PENDING,
	REQUEST_RESTAURANTS_SUCCESS,
	REQUEST_RESTAURANTS_FAILED
} from './constants.js';

const initialStateSearch = {
	searchField: ''
};

// searchRobots should be a true function
// return an output does not modify anything some input, same output
// setting default parameter prevent errors when empty parameters passed
export const searchPlaces = (state = initialStateSearch, action = {}) => {
	switch (action.type) {
		case CHANGE_SEARCH_FIELD:
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
	switch (action.type) {
		case REQUEST_RESTAURANTS_PENDING:
			return Object.assign({}, state, { isPending: true });
		case REQUEST_RESTAURANTS_SUCCESS:
			return Object.assign({}, state, {
				restaurants: action.payload,
				isPending: false
			});
		case REQUEST_RESTAURANTS_FAILED:
			return Object.assign({}, state, {
				error: action.payload,
				isPending: false
			});
		default:
			return state;
	}
};
