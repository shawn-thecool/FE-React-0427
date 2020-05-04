import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todoReducer from './modules/todo/reducer';

export default configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer
  }
});
