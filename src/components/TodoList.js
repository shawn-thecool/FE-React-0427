import React from 'react';
import store from '../redux';
import { FILTER_TYPE, addTodo, setFilter } from '../redux/modules/todo/action';

/**
 * create dummy data
 */
store.dispatch(
  addTodo({ title: 'title', desc: 'desc', boss: 'boss', worker: 'worker' })
);
store.dispatch(setFilter(FILTER_TYPE.SHOW_TODO));

/**
 * get state
 */
const { todos } = store.getState();
console.log('todos', todos);

const TodoItem = ({ id, title, desc, boss, worker }) => (
  <li>
    [{id}]{title}:{desc}
    <br />
    {boss} / {worker}
  </li>
);

const TodoList = () => (
  <div>
    <strong>Todo List</strong>
    <p>{todos.filter}</p>
    <ul>
      {todos.contents.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  </div>
);

export default TodoList;
