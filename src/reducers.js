import { CHANGE_SEARCH_FIELD } from './constants.js';

const initialState = {
	searchField: ''
};

// searchRobots should be a true function
// return an output does not modify anything some input, same output
// setting default parameter prevent errors when empty parameters passed
export const searchRobots = (state = initialState, action = {}) => {
	switch (action.type) {
		case CHANGE_SEARCH_FIELD:
			// merge state and then action.payload to an empty obj
			return Object.assign({}, state, { searchField: action.payload });
		default:
			return state;
	}
};
