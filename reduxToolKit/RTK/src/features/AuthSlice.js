import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoding: false,
  token: null,
  isError: false,
};

export const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setLoding: (state) => {
      state.isLoding = true;
    },
    setToken: (state, action) => {
      state.isLoding = false;
      state.token = action.payload;
      state.isError = false;
    },
    setError: (state) => {
      state.isLoding = false;
      state.token = null;
      state.isError = true;
    },
    setLogout: (state, action) => {
      state.isLoding = false;
      state.token = null;
      state.isError = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoding, setToken, setError, setLogout } = authSlice.actions;

export default authSlice.reducer;
