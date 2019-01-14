import { dinerConstants } from '../_constants/dinerConstants.js';
import { restaurants } from '../components/Restaurant/restaurants';
// this is filetering placelist action
// payload is whatever data needed to go on to the reducer
// export const setSearchField = (text) => ({
// 	type: C.CHANGE_SEARCH_FIELD,
// 	payload: text
// });

export const requestDiners = () => (dispatch) => {
	// dispatch({ type: REQUEST_RESTAURANTS_PENDING });
	// fetch('./components/Restaurant/restaurants.json')
	// 	.then((response) => response.json())
	// 	.then((data) => {
	// 		dispatch({ type: REQUEST_RESTAURANTS_SUCCESS, payload: data });
	// 	})
	// 	.catch((error) => dispatch({ type: REQUEST_RESTAURANTS_FAILED, payload: error }));

	dispatch({ type: dinerConstants.GETALL_REQUEST });
	dispatch({ type: dinerConstants.GETALL_SUCCESS, payload: restaurants });
};
