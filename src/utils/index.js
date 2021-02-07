import axios from "axios";
import validator from "email-validator";
import moment from "moment";
let TOKEN_KEY = "jwt";

// USER AUTH
// Register New User
export const registerUser = async (info) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const user = await axios.post(
    `${process.env.REACT_APP_BASE}/api/users`,
    info,
    config
  );
  console.log(user);
  return user;
};

// USER TOKEN
// Set User Token
export const setToken = (value, tokenKey = TOKEN_KEY) => {
  if (localStorage) {
    localStorage.setItem(tokenKey, JSON.stringify(value));
  }
};
// Get User Token
export const getToken = (tokenKey = TOKEN_KEY) => {
  if (localStorage && localStorage.getItem(tokenKey)) {
    return JSON.parse(localStorage.getItem(tokenKey));
  }
  return null;
};
// Remove User Token
export const logOut = (tokenKey = TOKEN_KEY) => {
  if (localStorage) {
    localStorage.removeItem(tokenKey);
    sessionStorage.removeItem(tokenKey);
  }
};

// Actions
// Retrieve all
export const retrieveItems = async (type) => {
  const retrieve = await axios.get(`${process.env.REACT_APP_BASE}/api/${type}`);
  return retrieve.data;
};
export const retrieveItemsAuth = async (type) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": getToken(),
    },
  };
  const retrieve = await axios.get(
    `${process.env.REACT_APP_BASE}/api/${type}`,
    config
  );
  return retrieve.data;
};
// Create model
export const createItem = async (info, type) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": getToken(),
    },
  };
  const submit = await axios.post(
    `${process.env.REACT_APP_BASE}/api/${type}`,
    info,
    config
  );
  return submit.data;
};
