import axios from "axios";
import { getUserLocalStorage } from "./localstorage";
import { clearStore } from "../features/user/userSlice";
import { MdOutlineLocationSearching } from "react-icons/md";

const customFetch = axios.create({
  // baseURL: "https://jobify-prod.herokuapp.com/api/v1/toolkit",
  baseURL: "http://localhost:8000",
  // baseURL: "https://skyewallet.onrender.com",
});

// customFetch.interceptors.request.use(
//   (config) => {
//     const user = getUserLocalStorage();
//     // console.log('user', user);
//     if (user) {
//       config.headers.common["Authorization"] = `Bearer ${user.token}`;
//     }
//     return config;
//   },
//   (error) => {
//     console.log('error', error);
//     return Promise.reject(error);
//   }
// );

export const checkForUnauthorizedResponse = (error, thunkAPI) => {
  console.log(error);
  if (error.response) {
    thunkAPI.dispatch(clearStore());
    return thunkAPI.rejectWithValue("Unthorized! Logging Out...");
  }
  return thunkAPI.rejectWithValue(error.response.data.msg);
};

export default customFetch;
