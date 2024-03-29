import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name:'cart',
  initialState: [],
  reducers:{
    addToCart: (store, action) => {
    return [...store, action.payload];
    }
  }
});


export const cartActions = cartSlice.actions;


export default cartSlice;