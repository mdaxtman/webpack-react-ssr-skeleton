import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const rootReducer = {
  user: () => ({})
};

const preloadedState = (global && global.__REDUX_STATE__) || undefined;
delete global.__REDUX_STATE__;

export default configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([thunk]),
  reducer: rootReducer,
  preloadedState
});
