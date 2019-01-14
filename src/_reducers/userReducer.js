import { userConstants } from '../_constants/userConstants';

const initialSignInfo = {
	email: '',
	password: '',
	name: '',
	loggedIn: false
};

export const users = (state = initialSignInfo, action = {}) => {
	switch (action.type) {
		case userConstants.SIGNUP_REQUEST:
			return Object.assign({}, state, {
				email: action.payload
			});

		case userConstants.SIGNUP_SUCCESS:
			return Object.assign({}, state, {
				password: action.payload
			});

		case userConstants.SIGNUP_FAIURE:
			return Object.assign({}, state, {
				name: action.payload
			});

		default:
			return state;
	}
};
