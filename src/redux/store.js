import { configureStore } from '@reduxjs/toolkit';
import stageReducer from './slices/stage';

export const store = configureStore({
  reducer: {
    stage: stageReducer
  },
});
