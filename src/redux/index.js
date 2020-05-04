import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todosModel from './modules/todo/reducer';

export default configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosModel
  }
});
