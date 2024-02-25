import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './module/home.js';

const store = configureStore({
  reducer: {
    // slice reducer
    home: homeReducer,
  }
})

export default store;

