import { userConstants } from '../_constants/userConstants';

const initialSignInfo = {
	pending: false,
	email: '',
	password: '',
	name: '',
	loggedIn: false
};

export const auth = (state = initialSignInfo, action = {}) => {
	switch (action.type) {
		case userConstants.LOGIN_REQUEST:
			return Object.assign({}, state, {});

		case userConstants.LOGIN_SUCCESS:
			return Object.assign({}, state, {
				email: action.email,
				password: action.password,
				name: action.name,
				loggedIn: true
			});

		case userConstants.LOGIN_FAILURE:
			return Object.assign({}, state, {
				loggedIn: false
			});

		case userConstants.LOGOUT:
			return Object.assign({}, state, {
				loggedIn: false
			});

		default:
			return state;
	}
};
