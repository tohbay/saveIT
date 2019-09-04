import axios from "../helpers/axiosInstance";
import { notify } from 'react-notify-toast';
import { ACCOUNT_START_LOADING, ACCOUNT_END_LOADING } from './types';

const header = {
  headers: {
    accept: "application/json",
    "content-type": "application/json",
    Authorization: `Bearer ${localStorage.getItem('user_token')}`
  }
};

export const accountsAction = (data, history) => dispatch => {
	const url = 'https://banka-tobe.herokuapp.com/api/v2/accounts';
	dispatch({ type: ACCOUNT_START_LOADING })
	return axios
		.post(url, data, header)
		.then(response => {
			dispatch({ type: ACCOUNT_END_LOADING })
			const { message } = response.data;
			notify.show(message, 'success', 4000);
			history.push('/accounts');
		})
		.catch(error => {
			dispatch({ type: ACCOUNT_END_LOADING })
			notify.show('Error creating account', 'error', 2000);
		})
}
