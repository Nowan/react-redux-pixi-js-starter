import { createStore, combineReducers } from '@reduxjs/toolkit';
import stageReducer, { setCounterValue } from './slices/stage';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({
  actionCreators: {
    setCounterValue(value) { return setCounterValue(value); }
  }
});

export const store = createStore(
  combineReducers({
    stage: stageReducer
  }),
  composeEnhancers()
);
