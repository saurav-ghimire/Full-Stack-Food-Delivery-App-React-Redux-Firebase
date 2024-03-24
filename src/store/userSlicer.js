import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name:'user',
  initialState: null,
  reducers:{
    storeUser: (store, action) => {
    return store = action.payload;
    }
  }
});


export const userActions = userSlice.actions;


export default userSlice;