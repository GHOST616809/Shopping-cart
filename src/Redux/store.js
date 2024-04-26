 

// Create the Redux store
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import displayreducer from './DisplaySlice'; // Import your DisplaySlice
import  cartReducer  from './Slice1'; // Import your Slice1


const rootReducer = combineReducers({
  display:displayreducer,
  cart:cartReducer
});

// Create the Redux store


const store = configureStore({
  reducer: rootReducer
});

export default store;

 
