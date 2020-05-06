import { configureStore } from '@reduxjs/toolkit';
import counterModel from './modules/counter/reducer';
import todoModel from './modules/todo/reducer';

export default configureStore({
  reducer: {
    counter: counterModel,
    todo: todoModel
  }
});
