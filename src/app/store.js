import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const rootReducer = {
  user: (state = {}) => state
};

const createStore = (preloadedState) => configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([thunk]),
  reducer: rootReducer,
  preloadedState
});

export default createStore;

