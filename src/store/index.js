import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlicer';


const FoodStore = configureStore({
  reducer:{
    user: userSlice.reducer,
  }
});

export default FoodStore;
