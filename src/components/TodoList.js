import React from 'react';
import store from '../redux';
import {
  VIZ_FILTER_TYPE,
  addTodo,
  setVizFilter
} from '../redux/modules/todo/action';

/**
 * create dummy data
 */
store.dispatch(addTodo('keyA', 'msg 1'));
store.dispatch(addTodo('keyB', 'msg 2'));
store.dispatch(addTodo('keyC', 'msg 3'));
store.dispatch(addTodo('keyD', 'msg 4'));
store.dispatch(setVizFilter(VIZ_FILTER_TYPE.SHOW_COMPLETED));

/**
 * get state
 */
const { todos } = store.getState();
console.log('todos', todos);

const TodoItem = ({ id, text, completed }) => (
  <li>
    [{id}_{text}_{String(completed) || 'false'}]
  </li>
);

const TodoList = () => (
  <div>
    <strong>Todo List</strong>
    <p>{todos.visibilityFilter}</p>
    <ul>
      {todos.list.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  </div>
);

export default TodoList;
