import {
	ACCOUNT_START_LOADING,
	ACCOUNT_END_LOADING
} from '../actions/types';

const initialState = {
	loading: false,
	createAccountLoading: false,
  error: '',
  accounts: []
};

export default (state = initialState, action) => {
  switch (action.type) {
			
		case ACCOUNT_START_LOADING:
			return { ...state, createAccountLoading: true };
			
		case ACCOUNT_END_LOADING:
		  return { ...state, createAccountLoading: false };

    default:
      return state;
  }
};
