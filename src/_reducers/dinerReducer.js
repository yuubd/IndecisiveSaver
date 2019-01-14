import { dinerConstants } from '../_constants/dinerConstants.js';

const initialStateSearch = {
	searchField: ''
};

/** searchRobots should be a true function
* return an output does not modify anything some input, same output
* setting default parameter prevent errors when empty parameters passed
*/
// export const searchPlaces = (state = initialStateSearch, action = {}) => {
// 	switch (action.type) {
// 		case C.CHANGE_SEARCH_FIELD:
// 			// merge state and then action.payload to an empty obj
// 			return Object.assign({}, state, { searchField: action.payload });

// 		default:
// 			return state;
// 	}
// };

const initialStateRestaurants = {
	isPending: false,
	places: [],
	error: ''
};

export const diners = (state = initialStateRestaurants, action = {}) => {
	switch (action.type) {
		case dinerConstants.GETALL_REQUEST:
			return Object.assign({}, state, { isPending: true });

		case dinerConstants.GETALL_SUCESS:
			return Object.assign({}, state, { places: action.payload, isPending: false });

		case dinerConstants.GETALL_FAILED:
			return Object.assign({}, state, { error: action.payload, isPending: false });

		default:
			return state;
	}
};
