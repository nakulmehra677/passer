import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initial-state";
import reducers from "./reducers";

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: reducers,
});

export const {
  setLoadingUserDetails,
  setDataUserDetails,
  setErrorUserDetails,

  setDataUserList,
  setErrorUserList,
  setLoadingUserList,
} = userSlice.actions;

export default userSlice.reducer;
