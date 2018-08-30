import {
	CHANGE_SEARCH_FIELD,
	REQUEST_RESTAURANTS_PENDING,
	REQUEST_RESTAURANTS_SUCCESS,
	REQUEST_RESTAURANTS_FAILED,
	CHANGE_ROUTE,
	POST_SIGNINFO_NAME,
	POST_SIGNINFO_PASSWORD,
	POST_SIGNINFO_EMAIL
} from './constants.js';
import { restaurants } from './components/Restaurant/restaurants';
// this is filetering placelist action
// payload is whatever data needed to go on to the reducer
export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text
});

export const requestRestaurants = () => (dispatch) => {
	// dispatch({ type: REQUEST_RESTAURANTS_PENDING });
	// fetch('./components/Restaurant/restaurants.json')
	// 	.then((response) => response.json())
	// 	.then((data) => {
	// 		dispatch({ type: REQUEST_RESTAURANTS_SUCCESS, payload: data });
	// 	})
	// 	.catch((error) => dispatch({ type: REQUEST_RESTAURANTS_FAILED, payload: error }));

	dispatch({ type: REQUEST_RESTAURANTS_PENDING });
	dispatch({ type: REQUEST_RESTAURANTS_SUCCESS, payload: restaurants });
};

export const changeRoute = (routeTo) => ({
	type: CHANGE_ROUTE,
	payload: routeTo
});

export const postEmail = (email) => ({
	type: POST_SIGNINFO_EMAIL,
	payload: email
});

export const postPassword = (password) => ({
	type: POST_SIGNINFO_PASSWORD,
	payload: password
});

export const postName = (name) => ({
	type: POST_SIGNINFO_NAME,
	payload: name
});
