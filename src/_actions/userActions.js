import { userConstants } from '../_constants/userConstants.js';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export const userActions = {
	login,
	logout,
	signUp
	// getAll,
	// delete: _delete
};

function login(email, password) {
	return (dispatch) => {
		const token = {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email, password }, getCircularReplacer())
		};

		fetch('http://localhost:3001/signin', token)
			.then((res) => {
				return res.json();
			})
			.then((user) => {
				if (user.id.length > 0) {
					dispatch(success());
					history.push('/user/' + email);
				}
			})
			.catch((err) => {
				console.log('ERR msg is : ' + err);
				alert('Account or password is incorrect');
				dispatch(failure());
			});

		function request() {
			return { type: userConstants.LOGIN_REQUEST, pending: true };
		}
		function success() {
			return { type: userConstants.LOGIN_REQUEST, pending: true };
		}
		function failure() {
			return { type: userConstants.LOGIN_REQUEST, pending: true };
		}

		function getCircularReplacer() {
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
		}
	};
}

function logout() {
	return (dispatch) => dispatch({ type: userConstants.LOGOUT });
}

function signUp(email, password, name) {
	return (dispatch) => {
		if (!(email.length && password.length && name.length)) return;

		dispatch(request());

		const token = {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email, password, name })
		};

		fetch('http://localhost:3001/signup', token)
			.then((res) => res.json())
			.then((user) => {
				if (user) {
					//this.props.loadUserProfile(data);
					return dispatch(success());
				}
			})
			.catch((err) => {
				console.log('Err msg is : ' + err);
				alert('Something went wrong');
				dispatch(failure());
			});

		const request = () => ({ type: userConstants.SIGNUP_REQUEST });
		const success = () => ({ type: userConstants.SIGNUP_SUCESS });
		const failure = () => ({ type: userConstants.SIGNUP_FAILURE });
	};
}

// // this is filetering placelist action
// // payload is whatever data needed to go on to the reducer
// export const setSearchField = (text) => ({
// 	type: C.CHANGE_SEARCH_FIELD,
// 	payload: text
// });

// export const requestRestaurants = () => (dispatch) => {
// 	// dispatch({ type: REQUEST_RESTAURANTS_PENDING });
// 	// fetch('./components/Restaurant/restaurants.json')
// 	// 	.then((response) => response.json())
// 	// 	.then((data) => {
// 	// 		dispatch({ type: REQUEST_RESTAURANTS_SUCCESS, payload: data });
// 	// 	})
// 	// 	.catch((error) => dispatch({ type: REQUEST_RESTAURANTS_FAILED, payload: error }));

// 	dispatch({ type: C.REQUEST_RESTAURANTS_PENDING });
// 	dispatch({ type: C.REQUEST_RESTAURANTS_SUCCESS, payload: restaurants });
// };
