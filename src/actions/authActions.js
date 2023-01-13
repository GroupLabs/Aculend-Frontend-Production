import axios from "axios";
import setAuthToken from "utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { SERVER_URL } from "./types";
import { notify } from "component/Notify";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";

// Register User
export const registerUser = (userData, router) => {
  axios
    .post(`${SERVER_URL}/register`, userData)
    .then((res) => {
      if (res) {
        notify("success", "register successful");
        router.push("/login");
      }
    })
    .catch((err) => {
      if (err) {
        notify("warn", err.response.data);
      }
    });
};


// Login - Get User Token
export const loginUser = (userData, router) => {
  axios
    .post(`${SERVER_URL}/login`, userData)
    .then((res) => {
      if (res) {
        notify("success", res.data);
        router.push("/dashboard");
      }
      // Save to localStorage
      const { token } = res.data;

      if (typeof window !== 'undefined') {
        // Perform localStorage action
        localStorage.setItem('jwtToken', token);
      }
      

      // Set token to auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) => {
      if (err.response) notify("warn", err.response.statusText);
    });
};

// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

// Log user out
export const logoutUser = () => (dispatch) => {
  // Remove token from localStorage

  if (typeof window !== 'undefined') {
    localStorage.removeItem("jwtToken");
  }
  // Remove auth header for future requests
  setAuthToken(false);
  // Set the current user to {} which is will also set isAuthenticated to false
  dispatch(setCurrentUser({}));
};

// applicant create
export const createApplicant = (data, router) => {
  axios
    .post(`${SERVER_URL}/bank/create`, { data })
    .then((res) => {
      if (res) {
        notify("success", "Saved Applicant!");
        router.push("/dashboard");
        // window.open(res.data.iframeurl)
      }
    })
    .catch((err) => {
      if (err) {
        console.log(err);
        // notify("warn", );
      }
    });
};
export const getAvailaleBankList = () => {
  axios
    .get(`${SERVER_URL}/bank/getbanklist`)
    .then((banklist) => {
      return banklist.data;
    })
    .catch((err) => console.log(err));
};

export const changePass = (email, pass, router) => {
  axios
    .post(`${SERVER_URL}/changepass`, { email, pass })
    .then((res) => {
      if (res) {
        notify("success", res.data.msg);
        router.push("/login");
      }
      // Save to localStorage
      // const { token } = res.data;
      // localStorage.setItem('jwtToken', token);
      // Set token to auth header
      // setAuthToken(token);
      // Decode token to get user data
      // const decoded = jwt_decode(token);
      // Set current user
      // dispatch(setCurrentUser(decoded));
    })
    .catch((err) => {
      if (err.response) notify("warn", err.response.data.email);
    });
};

export const sendEmail = (email, func) => {
  axios
    .post(`${SERVER_URL}/sendemail`, { email })
    .then((res) => {
      if (res) {
        func();
      }
    })
    .catch((err) => notify("warn", err.response.data.msg));
};
