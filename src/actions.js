import { CHANGE_SEARCH_FIELD } from './constants.js';

// this is filetering placelist action
// payload is whatever data needed to go on to the reducer
export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text
});
