import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getUserLocalStorage,
  setUserLocalStorage,
  removeUserLocalStorage,
} from "../../utils/localstorage";
import {
  registerThunk,
  loginThunk,
  clearStoreThunk,
  getContactsThunk,
  createContactThunk,
  updateContactThunk,
} from "./thunkFunctions";

const initialState = {
  isLoading: false,
  isSidebar: false,
  user: getUserLocalStorage(),
  paymentIds: getUserLocalStorage()?.paymentIds,
  transactions: [],
  contacts: [],
  count: 1,
};

// REGISTER USER
export const registerUser = createAsyncThunk(
  "user/signup",
  async (user, thunkAPI) => {
    // return registerThunk("/auth/register", user, thunkAPI);
    return registerThunk("/auth/signup", user, thunkAPI);
  }
);

// LOGIN USER
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    return loginThunk("/auth/signin", user, thunkAPI);
  }
);

// GET USER CONTACTS
export const getUserContacts = createAsyncThunk(
  "user/getContacts",
  async (user, thunkAPI) => {
    return getContactsThunk("/user/get-all-contacts", user, thunkAPI);
  }
);


// CREATE CONTACT
export const createContact = createAsyncThunk(
  "user/createContact",
  async (data, thunkAPI) => {
    return createContactThunk("/user/create-contact", data, thunkAPI);
  }
);

// UPDATE CONTACT
export const updateContact = createAsyncThunk(
  "user/createContact",
  async (data, thunkAPI) => {
    return updateContactThunk("/user/update-contact", data, thunkAPI);
  }
);



// CLEAR ENTIRE STORE
export const clearStore = createAsyncThunk("user/clearStore", clearStoreThunk);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebar = !state.isSidebar;
    },
    logoutUser: (state) => {
      state.isSidebar = false;
      state.user = null;
      removeUserLocalStorage();
    },
    increaseCount: (state) => {
      state.count += 1;
    }
  },
  extraReducers: {
    // REGISTER USER
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      const { user, message } = payload;
      state.isLoading = false;
      state.user = user;

      setUserLocalStorage(user);
      toast.success(message);
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;

      toast.error("User exists, wrong password");
    },
    // LOGIN USER
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      state.isLoading = false;
      state.user = user;
      setUserLocalStorage(user);

      toast.success(`Welcome back ${user.firstname}`);
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(`${payload}`);
    },
    // GET USER CONTACTS
    [getUserContacts.pending]: (state) => {
      state.isLoading = true;
    },
    [getUserContacts.fulfilled]: (state, { payload }) => {
      const { contacts } = payload;
      state.isLoading = false;
      state.contacts = contacts;
      // setUserLocalStorage(user);

    },
    // CREATE CONTACT
    [createContact.pending]: (state) => {
      state.isLoading = true;
    },
    [createContact.fulfilled]: (state, { payload }) => {
      const { contact } = payload;
      const { contacts } = state

      state.isLoading = false;
      state.contacts = [...contacts, contact];
      // setUserLocalStorage(user);
      state.count = state.count + 1

      toast.success(`Contact created!`);
    },
    [createContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(`${payload}`);
    },
    // UPDATE CONTACT
    [updateContact.pending]: (state) => {
      state.isLoading = true;
    },
    [updateContact.fulfilled]: (state, { payload }) => {
      const { contact } = payload;
      const { contacts } = state

      state.isLoading = false;
      state.contacts = [...contacts, contact];
      // setUserLocalStorage(user);

      toast.success(`Contact Updated!`);
    },
    [updateContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(`${payload} 💀`);
    },

  },
});

export const { toggleSidebar, logoutUser, increaseCount } = userSlice.actions;

export default userSlice.reducer;
