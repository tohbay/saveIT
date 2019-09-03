import axios from "axios";
import { notify } from "react-notify-toast";
import jwt_decode from "jwt-decode";
import { START_LOADING, END_LOADING } from "./types";

const header = {
  headers: {
    accept: "application/json",
    "content-type": "application/json",
  },
};

export const loginAction = (data, history) => dispatch => {
  const url = "https://banka-tobe.herokuapp.com/api/v2/auth/signin";
  dispatch({ type: START_LOADING });
  return axios
    .post(url, data, header)
    .then(response => {
      dispatch({ type: END_LOADING });
      console.log(response);
      const { message, token } = response.data;
      notify.show(message, "success", 4000);
      const decoded = jwt_decode(token);
      console.log(decoded);
      const email = decoded.email;
      const firstName = decoded.firstName;
      localStorage.setItem("user_token", token);
      localStorage.setItem("email", email);
      console.log("email>>>", email);
      history.push("/client");
    })
    .catch(error => {
      dispatch({ type: END_LOADING });
      const message = error.response
        ? error.response["data"].message
        : error.message;
      notify.show(message, "error", 2000);
    });
};

export const registerAction = (data, history) => dispatch => {
  console.log(data);
  delete data.redirect;
  const url = "https://banka-tobe.herokuapp.com/api/v2/auth/signup";
  dispatch({ type: START_LOADING });
  return axios
    .post(url, data)
    .then(response => {
      console.log(response);
      dispatch({ type: END_LOADING });
      const { message } = response.data;
      notify.show(message, "success", 4000);
      history.push("/login");
    })
    .catch(error => {
      dispatch({ type: END_LOADING });
      const { message } = error.response.data;
      notify.show(message, "error", 2000);
    });
};
