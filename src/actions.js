import * as C from './constants.js';
import { restaurants } from './components/Restaurant/restaurants';
// this is filetering placelist action
// payload is whatever data needed to go on to the reducer
export const setSearchField = (text) => ({
	type: C.CHANGE_SEARCH_FIELD,
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

	dispatch({ type: C.REQUEST_RESTAURANTS_PENDING });
	dispatch({ type: C.REQUEST_RESTAURANTS_SUCCESS, payload: restaurants });
};

export const changeRoute = (routeTo) => ({
	type: C.CHANGE_ROUTE,
	payload: routeTo
});

export const changeRouteToHome = () => ({
	type: C.CHANGE_ROUTE_HOME,
	payload: C.HOME
});

export const changeRouteToSignUp = () => ({
	type: C.CHANGE_ROUTE_SIGNUP,
	payload: C.SIGNUP
});

export const changeRouteToSignIn = () => ({
	type: C.CHANGE_ROUTE_SIGNIN,
	payload: C.SIGNIN
});

export const postEmail = (email) => ({
	type: C.POST_SIGNINFO_EMAIL,
	payload: email
});

export const postPassword = (password) => ({
	type: C.POST_SIGNINFO_PASSWORD,
	payload: password
});

export const postName = (name) => ({
	type: C.POST_SIGNINFO_NAME,
	payload: name
});

export const loggedIn = () => ({
	type: C.POST_SIGNINFO_LOGINSTATUS,
	payload: true
});

export const signInRequest = (email, password) => (dispatch) => {
	fetch('http://localhost:3001/signin', {
		method: 'post',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ email, password }, getCircularReplacer())
	})
		.then((response) => {
			return response.json();
		})
		.then((user) => {
			if (user.id.length > 0) {
				return dispatch(loggedIn());
			}
		})
		.catch((err) => {
			console.log('ERR is : ' + err);
			alert('Account or password is incorrect');
		});
};

const getCircularReplacer = () => {
	const seen = new WeakSet();
	return (key, value) => {
		if (typeof value === 'object' && value !== null) {
			if (seen.has(value)) {
				return;
			}
			seen.add(value);
		}
		return value;
	};
};

export const signUpRequest = (email, password, name) => (dispatch) => {
	if (!(email.length && password.length && name.length)) {
		return;
	}
	fetch('http://localhost:3001/signup', {
		method: 'post',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ email, password, name })
	})
		.then((res) => res.json())
		.then((data) => {
			// data is user created from signUp
			if (data) {
				//this.props.loadUserProfile(data);
				return dispatch(changeRoute(C.HOME));
			}
		});
};
