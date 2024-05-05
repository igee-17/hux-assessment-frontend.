import { logoutUser } from "./userSlice";
import customFetch, { checkForUnauthorizedResponse } from "../../utils/axios";
import axios from "axios";

const baseURL = "http://localhost:8000"

const errorMsg = (error) => {
  if (error.message !== "Network Error") {
    return error.response.data.msg;
  } else return `${error.message} `;
};

export const registerThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user);
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const loginThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user);
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};



export const getContactsThunk = async (path, user, thunkAPI) => {
  try {
    // Assuming 'user' object contains access token information (e.g., user.accessToken)
    const { token } = user; // Replace with your access token retrieval logic

    // Set authorization header with Bearer token
    const headers = { Authorization: `Bearer ${token}` };

    const url = `${baseURL}${path}`

    const resp = await axios.get(url, { headers }); // Pass headers object
    console.log(resp.data);
    return resp.data;
  } catch (error) {
    console.log(error);
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const createContactThunk = async (path, data, thunkAPI) => {
  try {
    // Assuming 'user' object contains access token information (e.g., user.accessToken)
    const { token } = data.user; // Replace with your access token retrieval logic

    console.log('user', data.user);

    // Set authorization header with Bearer token
    const headers = { Authorization: `Bearer ${token}` };

    const url = `${baseURL}${path}`

    console.log(data.contact);

    const resp = await axios.post(url, { ...data.contact }, { headers }); // Pass headers object
    console.log(resp.data);
    return resp.data;
  } catch (error) {
    console.log(error);
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const updateContactThunk = async (path, data, thunkAPI) => {
  try {
    // Assuming 'user' object contains access token information (e.g., user.accessToken)
    const { token } = data.user; // Replace with your access token retrieval logic

    console.log('user', data.user);

    // Set authorization header with Bearer token
    const headers = { Authorization: `Bearer ${token}` };

    const url = `${baseURL}${path}`

    console.log(data.contact);

    const resp = await axios.put(url, { ...data.contact }, { headers }); // Pass headers object
    console.log(resp.data);
    return resp.data;
  } catch (error) {
    console.log(error);
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};


export const deleteContactThunk = async (path, data, thunkAPI) => {
  try {
    // Assuming 'user' object contains access token information (e.g., user.accessToken)
    const { token } = data.user; // Replace with your access token retrieval logic

    // Set authorization header with Bearer token
    const headers = { Authorization: `Bearer ${token}` };

    const url = `${baseURL}${path}`

    const resp = await axios.delete(url, { headers }); // Pass headers object
    console.log(resp.data);
    return resp.data;
  } catch (error) {
    console.log(error);
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};



export const clearStoreThunk = async (message, thunkAPI) => {
  try {
    thunkAPI.dispatch(logoutUser(message));
    // thunkAPI.dispatch(clearAllJobsState());
    thunkAPI.dispatch(clearValues());
    return Promise.resolve();
  } catch (error) {
    return Promise.reject();
  }
};
