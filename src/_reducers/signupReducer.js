import { userConstants } from '../_constants/userConstants';

const initialSignInfo = {
	pending: false
};

export const signup = (state = initialSignInfo, action = {}) => {
	switch (action.type) {
		case userConstants.SIGNUP_REQUEST:
			return Object.assign({}, state, {
				pending: action.payload
			});

		case userConstants.SIGNUP_SUCCESS:
			return Object.assign({}, state, {});

		case userConstants.SIGNUP_FAIURE:
			return Object.assign({}, state, {});

		default:
			return state;
	}
};
