import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlicer';
import productSlice from './productSlicer';


const FoodStore = configureStore({
  reducer:{
    user: userSlice.reducer,
    product: productSlice.reducer
  }
});

export default FoodStore;
